// @vitest-environment happy-dom

import AboutComponent from '@/views/About.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('AboutComponent', () => {
  test('renders title', () => {
    const { getByText } = render(AboutComponent)
    expect(getByText('We Are Ile Iwori-Bogbe')).toBeTruthy()
  })

  test('renders image', () => {
    const { getByAltText } = render(AboutComponent)
    expect(getByAltText(/group of American aborisha casually dressed/i)).toBeTruthy()
  })

  test('renders mission statement content', () => {
    const { getByText } = render(AboutComponent)
    expect(getByText(/holistic healing institute/i)).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, getByAltText } = render(AboutComponent)
      
      expect(getByText('We Are Ile Iwori-Bogbe')).toBeTruthy()
      expect(getByAltText(/group of American aborisha casually dressed/i)).toBeTruthy()
      expect(getByText(/holistic healing institute/i)).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(AboutComponent)
      
      expect(getByText('We Are Ile Iwori-Bogbe')).toBeTruthy()
      expect(container.querySelector('#about-section')).toBeTruthy()
    })
  })
})
