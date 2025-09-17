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
  // ---- Stub the EmailJS submit before navigation ----
  await page.route('**/api/v1.0/email/send-form', async route => {
    if (route.request().method() === 'POST') {
      // Minimal 200 OK; adjust body if your handler inspects it
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    }
    return route.continue()
  })

  // Optional diagnostics while stabilizing
  page.on('request', r => { if (r.method() === 'POST') console.log('[POST]', r.url()) })
  page.on('pageerror', e => console.error('[pageerror]', e))

  // ---- Go to contact page ----
  await page.goto('/contact', { waitUntil: 'domcontentloaded' })

  // ---- Fill valid values to avoid native HTML5 blocking ----
  // Try labels first; fall back to placeholders if needed.
  const name = (await page.getByLabel(/name/i).count())
    ? page.getByLabel(/name/i) : page.getByPlaceholder(/name/i)
  const email = (await page.getByLabel(/email/i).count())
    ? page.getByLabel(/email/i) : page.getByPlaceholder(/email/i)
  const message = (await page.getByLabel(/message|comment/i).count())
    ? page.getByLabel(/message|comment/i) : page.getByRole('textbox', { name: /message|comment/i })

  await name.fill('Quinise Ercolano')
  await email.fill('devin@example.com')
  await message.fill('Aláfíà! Just saying hi.')

  // ---- Submit deterministically via the actual <form> ----
  const form = page.locator('form').first()
  await form.evaluate((f: HTMLFormElement) => f.requestSubmit())

  // ---- Wait for the stubbed POST to complete (ensures handler ran) ----
  await page.waitForResponse(res =>
    res.request().method() === 'POST' &&
    /api\/v1\.0\/email\/send-form$/.test(res.url()) &&
    res.ok()
  )

  // ---- Assert success using robust, semantic signals ----
  const success = await firstPresent(page, [
    page.getByRole('status'),                                        // e.g., role="status"
    page.getByRole('alert'),                                         // e.g., role="alert"
    page.getByText(/Message sent! We’ll get back to you shortly\./i),// your current copy
    page.getByTestId('contact-success'),                             // works if you add the test id
  ])

  await expect(success).toBeVisible({ timeout: 15000 })
})
