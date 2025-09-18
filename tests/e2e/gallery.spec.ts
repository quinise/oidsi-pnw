// tests/e2e/gallery.spec.ts
import { test, expect } from '@playwright/test'

test('Gallery heading is visible', async ({ page }) => {
  // Log browser console + page errors to your test output
  page.on('console', m => console.log('[console]', m.type(), m.text()))
  page.on('pageerror', e => console.error('[pageerror]', e))

  // 1) Try direct navigation to /gallery (history router)
  await page.goto('/gallery', { waitUntil: 'domcontentloaded' })

  // If we ended up on a hash router 404, try hash route
  if (!/(\/|#\/)gallery/i.test(await page.url())) {
    await page.goto('/#/gallery', { waitUntil: 'domcontentloaded' })
  }

  // Always log URL + a small HTML snippet so we know what rendered
  console.log('URL:', await page.url())
  console.log('HTML snippet:', (await page.content()).slice(0, 800))

  // If your navbar collapses on mobile, ensure we’re at desktop sizes in config;
  // but for this test we’re not clicking nav at all—just visiting the route.

  // 2) Build a resilient locator for the heading
  const heading =
    page.getByTestId('gallery-title') // preferred (add data-testid once in your template)
      .or(page.getByRole('heading', { name: /A nifẹ lati pin/i })) // matches your Yoruba title
      .or(page.locator('h1.gradient-title')) // stylistic fallback

  // 3) Screenshot for debugging (always kept in report folder)
  await page.screenshot({ path: 'playwright-report/gallery-debug.png', fullPage: true })

  // 4) Assert it’s visible
  await expect(heading).toBeVisible({ timeout: 15000 })
})