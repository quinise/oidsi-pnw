// @vitest-environment happy-dom

import HomeComponent from '@/views/Home.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('HomeComponent', () => {
  test('renders main title', () => {
    const { getByText } = render(HomeComponent)
    expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
  })

  test('renders subtitle location', () => {
    const { getByText } = render(HomeComponent)
    expect(getByText('Seattle, Washington')).toBeTruthy()
  })

  test('renders hero SVG with correct aria-label', () => {
    const { container } = render(HomeComponent)
    const heroSvg = container.querySelector('svg[aria-label="Ile Iwori-Bogbe"]')
    expect(heroSvg).toBeTruthy()
  })

  test('renders subtitle SVG with correct aria-label', () => {
    const { container } = render(HomeComponent)
    const subtitleSvg = container.querySelector('svg[aria-label="Seattle, Washington"]')
    expect(subtitleSvg).toBeTruthy()
  })

  test('renders intro image with correct alt text', () => {
    const { getByAltText } = render(HomeComponent)
    expect(getByAltText(/American aborisha and IFA priest women/i)).toBeTruthy()
  })

  test('renders Proud Member of text', () => {
    const { getByText } = render(HomeComponent)
    expect(getByText('Proud Member of')).toBeTruthy()
  })

  test('renders Obafemi Institute logo', () => {
    const { getByAltText } = render(HomeComponent)
    expect(getByAltText(/Obafemi Institute/i)).toBeTruthy()
  })

  test('renders link to Obafemi website', () => {
    const { container } = render(HomeComponent)
    const link = container.querySelector('a[href="https://www.obafemi.org"]')
    expect(link).toBeTruthy()
    expect(link?.getAttribute('target')).toBe('_blank')
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, getByAltText } = render(HomeComponent)
      
      expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
      expect(getByText('Seattle, Washington')).toBeTruthy()
      expect(getByText('Proud Member of')).toBeTruthy()
      expect(getByAltText(/American aborisha and IFA priest women/i)).toBeTruthy()
    })

    test('SVG elements render on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(HomeComponent)
      expect(container.querySelector('svg[aria-label="Ile Iwori-Bogbe"]')).toBeTruthy()
      expect(container.querySelector('svg[aria-label="Seattle, Washington"]')).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(HomeComponent)
      
      expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
      expect(getByText('Seattle, Washington')).toBeTruthy()
      expect(container.querySelector('.hero-svg')).toBeTruthy()
      expect(container.querySelector('.subtitle-svg')).toBeTruthy()
    })
  })
})