// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test'

test('homepage renders and nav to Gallery works', async ({ page }) => {
  // log browser console + page errors to your test output
  page.on('console', m => console.log('[console]', m.type(), m.text()))
  page.on('pageerror', e => console.error('[pageerror]', e))

  await page.goto('/') // uses baseURL
  await expect(page.locator('body')).toBeVisible({ timeout: 15000 })

  // If your navbar collapses on mobile, ensure desktop-like viewport in config.
  // Otherwise, open the hamburger first:
  const hamburger = page.getByRole('button', { name: /toggle navigation/i })
  if (await hamburger.isVisible().catch(() => false)) {
    await hamburger.click()
  }

  // Wait for the Gallery link to actually be visible before clicking.
  const galleryLink = page.getByRole('link', { name: /gallery/i }).first()
  await expect(galleryLink).toBeVisible({ timeout: 15000 })
  await galleryLink.click()

  // Confirm navigation
  await expect(page).toHaveURL(/\/gallery/i, { timeout: 15000 })
})