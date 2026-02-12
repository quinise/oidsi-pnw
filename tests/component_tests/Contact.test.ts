// @vitest-environment happy-dom

import ContactComponent from '@/views/Contact.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('ContactComponent', () => {
  test('renders title', () => {
    const { getByText } = render(ContactComponent)
    expect(getByText('Contact Seattle O.I.D.S.I.')).toBeTruthy()
  })

  test('renders email blurb', () => {
    const { getByText } = render(ContactComponent)
    expect(getByText('Send Us an Email')).toBeTruthy()
  })

  test('renders phone contact button with correct text', () => {
    const { getByText } = render(ContactComponent)
    expect(getByText('Call or Text (347) 841-6087')).toBeTruthy()
  })

  test('renders phone link with correct href', () => {
    const { container } = render(ContactComponent)
    const phoneLink = container.querySelector('a[href="tel:+13478416087"]')
    expect(phoneLink).toBeTruthy()
  })

  test('renders ContactForm component', () => {
    const { container } = render(ContactComponent)
    const cardBody = container.querySelector('.card-body')
    expect(cardBody).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(ContactComponent)
      
      expect(getByText('Contact Seattle O.I.D.S.I.')).toBeTruthy()
      expect(getByText('Send Us an Email')).toBeTruthy()
      expect(getByText('Call or Text (347) 841-6087')).toBeTruthy()
      expect(container.querySelector('.card-body')).toBeTruthy()
    })

    test('phone link is accessible on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(ContactComponent)
      const phoneLink = container.querySelector('a[href="tel:+13478416087"]')
      expect(phoneLink).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText } = render(ContactComponent)
      
      expect(getByText('Contact Seattle O.I.D.S.I.')).toBeTruthy()
      expect(getByText('Send Us an Email')).toBeTruthy()
    })
  })
})