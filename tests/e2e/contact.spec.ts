// tests/e2e/contact.spec.ts
import { test, expect, Page, Locator } from '@playwright/test'

async function firstPresent(page: Page, locators: Locator[]): Promise<Locator> {
  for (const l of locators) {
    if (await l.count()) return l.first()
  }
  // Fallback to a non-matching dummy so the next expect() fails clearly
  return page.locator('never-matches-this-selector')
}

test('contact shows success banner after submit (stubbed)', async ({ page }) => {
  // ---- Robust stubbing BEFORE navigation ----
  // Catch relative/absolute URLs and trailing slash. Also satisfy CORS preflight.
  await page.route('**/api/v1.0/email/send-form*', async (route, request) => {
    const method = request.method()
    if (method === 'OPTIONS') {
      return route.fulfill({
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
        },
        body: '',
      })
    }
    if (method === 'POST') {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    }
    return route.continue()
  })

  // Safety net: patch fetch/XHR in case the app constructs absolute URLs.
  await page.addInitScript(() => {
    // @ts-ignore
    const urlRe = /\/api\/v1\.0\/email\/send-form\/?$/i

    const origFetch = window.fetch.bind(window)
    // @ts-ignore
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input)
      const method = (init?.method || 'GET').toUpperCase()
      if (urlRe.test(url) && method === 'POST') {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      }
      return origFetch(input as any, init)
    }

    const OrigXHR = window.XMLHttpRequest
    class FakeXHR extends OrigXHR {
      private _method = 'GET'
      private _url = ''
      open(method: string, url: string, ...rest: any[]) {
        this._method = method.toUpperCase()
        this._url = url
        // @ts-ignore
        return super.open(method, url, ...(rest as [boolean, string, string]))
      }
      send(body?: Document | XMLHttpRequestBodyInit | null) {
        // @ts-ignore
        const re = /\/api\/v1\.0\/email\/send-form\/?$/i
        if (re.test(this._url) && this._method === 'POST') {
          setTimeout(() => {
            // @ts-ignore
            this.status = 200
            // @ts-ignore
            this.responseText = JSON.stringify({ ok: true })
            // @ts-ignore
            this.readyState = 4
            // @ts-ignore
            this.onreadystatechange && this.onreadystatechange(new Event('readystatechange'))
            // @ts-ignore
            this.onload && this.onload(new Event('load'))
          }, 0)
        } else {
          // @ts-ignore
          super.send(body as any)
        }
      }
    }
    // @ts-ignore
    window.XMLHttpRequest = FakeXHR
  })

  // Diagnostics (kept from your test)
  page.on('request', r => { if (r.method() === 'POST') console.log('[POST]', r.url()) })
  page.on('pageerror', e => console.error('[pageerror]', e))

  // ---- Go to contact page ----
  await page.goto('/contact', { waitUntil: 'networkidle' })

  // ---- Fill valid values to avoid native HTML5 blocking ----
  // Use your exact IDs/labels from the component
  const name = (await page.getByLabel('Name').count()) ? page.getByLabel('Name') : page.locator('#cf-name')
  const email = (await page.getByLabel('Email').count()) ? page.getByLabel('Email') : page.locator('#cf-email')
  const message = (await page.getByLabel('Message').count()) ? page.getByLabel('Message') : page.locator('#cf-message')

  await name.fill('Quinise Ercolano')
  await email.fill('devin@example.com')
  await message.fill('Aláfíà! Just saying hi.')

  // ---- Submit deterministically via the actual <form> ----
  const form = page.locator('form#contact-form')
  await form.evaluate((f: HTMLFormElement) => f.requestSubmit())

  // ---- Wait for either the network success OR the UI success (whichever comes first) ----
  const networkWait = page.waitForResponse(res =>
    res.request().method() === 'POST' &&
    /\/api\/v1\.0\/email\/send-form\/?$/i.test(res.url()) &&
    res.status() >= 200 && res.status() < 300
  ).catch(() => null)

  // Your component renders this element on success:
  const successLocator = await firstPresent(page, [
    page.getByTestId('contact-success'), // <div data-testid="contact-success" role="status" ...>
    page.getByRole('status'),
    page.getByRole('alert'),
    page.getByText(/Message sent! We(’|'|)ll get back to you shortly\./i),
  ])

  await Promise.race([
    networkWait,
    successLocator.waitFor({ state: 'visible', timeout: 8000 }),
  ])

  // Final assertion
  await expect(successLocator).toBeVisible({ timeout: 15000 })
})