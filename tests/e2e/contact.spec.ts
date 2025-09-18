// tests/e2e/contact.spec.ts
import { test, expect, Page, Locator } from '@playwright/test'

async function firstPresent(page: Page, locators: Locator[]): Promise<Locator> {
  for (const l of locators) {
    if (await l.count()) return l.first()
  }
  return page.locator('never-matches-this-selector')
}

// One regex that covers the common contact endpoints we might use
const CONTACT_POST_RE = /(\/api\/v1\.0\/email\/send-form\/?$)|(^https?:\/\/[^/]*formspree\.io\/.*)|(^https?:\/\/[^/]*api\.emailjs\.com\/api\/v1\.0\/email\/send-?form)/i

test('contact shows success banner after submit (stubbed)', async ({ page }) => {
  // ---- Network route stub BEFORE navigation ----
  await page.route('**/*', async (route, request) => {
    const url = request.url()
    const method = request.method()

    // Handle CORS preflight for our targets
    if (method === 'OPTIONS' && CONTACT_POST_RE.test(url)) {
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

    // Stub success for the POST to any of the endpoints we recognize
    if (method === 'POST' && CONTACT_POST_RE.test(url)) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, message: 'stubbed' }),
      })
    }

    return route.continue()
  })

  // ---- Safety net: patch fetch + XHR BEFORE app code runs ----
  await page.addInitScript(() => {
    // @ts-ignore
    const CONTACT_RE = /(\/api\/v1\.0\/email\/send-form\/?$)|(^https?:\/\/[^/]*formspree\.io\/.*)|(^https?:\/\/[^/]*api\.emailjs\.com\/api\/v1\.0\/email\/send-?form)/i

    // fetch
    const origFetch = window.fetch.bind(window)
    // @ts-ignore
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input)
      const method = (init?.method || 'GET').toUpperCase()
      if (CONTACT_RE.test(url) && method === 'POST') {
        return new Response(JSON.stringify({ ok: true, message: 'stubbed' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      }
      return origFetch(input as any, init)
    }

    // XHR
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
        const R = /(\/api\/v1\.0\/email\/send-form\/?$)|(^https?:\/\/[^/]*formspree\.io\/.*)|(^https?:\/\/[^/]*api\.emailjs\.com\/api\/v1\.0\/email\/send-?form)/i
        if (R.test(this._url) && this._method === 'POST') {
          setTimeout(() => {
            // @ts-ignore
            this.status = 200
            // @ts-ignore
            this.responseText = JSON.stringify({ ok: true, message: 'stubbed' })
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

  // Diagnostics while stabilizing (kept)
  page.on('request', r => { if (r.method() === 'POST') console.log('[POST]', r.url()) })
  page.on('pageerror', e => console.error('[pageerror]', e))

  // ---- Go to contact page ----
  await page.goto('/contact', { waitUntil: 'networkidle' })

  // ---- Fill using your exact control IDs/labels ----
  const name = (await page.getByLabel('Name').count()) ? page.getByLabel('Name') : page.locator('#cf-name')
  const email = (await page.getByLabel('Email').count()) ? page.getByLabel('Email') : page.locator('#cf-email')
  const message = (await page.getByLabel('Message').count()) ? page.getByLabel('Message') : page.locator('#cf-message')

  await name.fill('Quinise Ercolano')
  await email.fill('devin@example.com')
  await message.fill('Aláfíà! Just saying hi.')

  // ---- Submit via the real button to mirror user behavior ----
  const sendBtn = page.getByRole('button', { name: /^send$/i })
  await sendBtn.click()

  // ---- Wait for either: observed POST OR success banner ----
  const networkWait = page.waitForResponse(res =>
    res.request().method() === 'POST' && CONTACT_POST_RE.test(res.url()) && res.status() >= 200 && res.status() < 300
  ).catch(() => null)

  const successLocator = await firstPresent(page, [
    page.getByTestId('contact-success'), // your component renders this on success
    page.getByRole('status'),
    page.getByRole('alert'),
    page.getByText(/Message sent! We(’|'|)ll get back to you shortly\./i),
  ])

  await Promise.race([
    networkWait,
    // Give the UI a bit more time to flip status after promise resolve
    successLocator.waitFor({ state: 'visible', timeout: 12_000 }),
  ])

  await expect(successLocator).toBeVisible({ timeout: 15_000 })
})