// tests/unit/Navbar.spec.ts
import { render, screen, fireEvent } from '@testing-library/vue'
import Navbar from '@/views/partials/Navbar.vue' // adjust path

describe('Navbar', () => {
  it('has proper a11y landmarks and brand link', () => {
    render(Navbar)
    const nav = screen.getByRole('navigation', { name: /primary navigation/i })
    expect(nav).toBeInTheDocument()
    const home = screen.getByRole('link', { name: /home link/i })
    expect(home).toHaveAttribute('href', '/')
  })

  it('toggles mobile menu via hamburger button', async () => {
    render(Navbar)
    const btn = screen.getByRole('button', { name: /toggle navigation/i })
    const menu = screen.getByTestId('nav-collapse') // add data-testid on the collapsible div
    // collapsed by default (Bootstrap adds .show when open)
    expect(menu.classList.contains('show')).toBe(false)
    await fireEvent.click(btn)
    expect(menu.classList.contains('show')).toBe(true)
    await fireEvent.click(btn)
    expect(menu.classList.contains('show')).toBe(false)
  })
})