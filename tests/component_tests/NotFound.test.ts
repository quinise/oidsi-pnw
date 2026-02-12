// @vitest-environment happy-dom

import NotFound from '@/views/NotFound.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('NotFoundComponent', () => {
  test('renders 404 status code', () => {
    const { getByText } = render(NotFound)
    expect(getByText('404')).toBeTruthy()
  })

  test('renders title', () => {
    const { getByText } = render(NotFound)
    expect(getByText('Page Not Found')).toBeTruthy()
  })

  test('renders error message', () => {
    const { getByText } = render(NotFound)
    expect(getByText(/The page you’re looking for doesn’t exist or may have moved./)).toBeTruthy()
  })

  test('renders Go home button', () => {
    const { getByText } = render(NotFound)
    expect(getByText('Go home')).toBeTruthy()
  })

  test('renders Contact us button', () => {
    const { getByText } = render(NotFound)
    expect(getByText('Contact us')).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText } = render(NotFound)
      
      expect(getByText('404')).toBeTruthy()
      expect(getByText('Page Not Found')).toBeTruthy()
      expect(getByText(/The page you’re looking for doesn’t exist or may have moved./)).toBeTruthy()
      expect(getByText('Go home')).toBeTruthy()
      expect(getByText('Contact us')).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText } = render(NotFound)
      
      expect(getByText('404')).toBeTruthy()
      expect(getByText('Page Not Found')).toBeTruthy()
    })
  })
})