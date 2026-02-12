// @vitest-environment happy-dom

import FooterComponent from '@/views/partials/Footer.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('FooterComponent', () => {
  test('renders footer element', () => {
    const { container } = render(FooterComponent)
    const footer = container.querySelector('footer#footer')
    expect(footer).toBeTruthy()
  })

  test('renders author statement', () => {
    const { getByText } = render(FooterComponent)
    expect(getByText('Created by')).toBeTruthy()
  })

  test('renders author name', () => {
    const { getByText } = render(FooterComponent)
    expect(getByText('Quinise')).toBeTruthy()
  })

  test('renders link to developer website', () => {
    const { container } = render(FooterComponent)
    const link = container.querySelector('a[href="https://quinise.ercolano.com/"]')
    expect(link).toBeTruthy()
    expect(link?.getAttribute('target')).toBe('_blank')
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer')
  })

  test('link has correct aria-label', () => {
    const { getByLabelText } = render(FooterComponent)
    const link = getByLabelText("Link to developer's website")
    expect(link).toBeTruthy()
  })

  test('has screen reader text for external link', () => {
    const { container } = render(FooterComponent)
    const srOnly = container.querySelector('.sr-only')
    expect(srOnly?.textContent).toContain('opens in a new tab')
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(FooterComponent)
      
      expect(getByText('Created by')).toBeTruthy()
      expect(getByText('Quinise')).toBeTruthy()
      expect(container.querySelector('footer')).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText } = render(FooterComponent)
      
      expect(getByText('Created by')).toBeTruthy()
      expect(getByText('Quinise')).toBeTruthy()
    })
  })
})