// tests/e2e/navbar.spec.ts
import { test, expect } from '@playwright/test'
test.use({ viewport: { width: 360, height: 800 } })

test('mobile nav opens/closes', async ({ page }) => {
  await page.goto('/')

  const toggle = page.getByRole('button', { name: /toggle navigation/i })
  await expect(toggle).toBeVisible()

  // Open
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  const menu = page.getByRole('dialog', { name: /main navigation/i })
  await expect(menu).toBeVisible()

  // Close
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await expect(menu).toBeHidden()
})
