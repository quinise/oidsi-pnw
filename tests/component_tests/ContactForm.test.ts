// @vitest-environment happy-dom

import ContactFormComponent from '@/views/partials/ContactForm.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('ContactFormComponent', () => {
  test('renders form element', () => {
    const { container } = render(ContactFormComponent)
    const form = container.querySelector('form#contact-form')
    expect(form).toBeTruthy()
  })

  test('renders name field with label', () => {
    const { getByLabelText } = render(ContactFormComponent)
    expect(getByLabelText('Name')).toBeTruthy()
  })

  test('name input has correct attributes', () => {
    const { container } = render(ContactFormComponent)
    const nameInput = container.querySelector('#cf-name')
    expect(nameInput).toBeTruthy()
    expect(nameInput?.getAttribute('name')).toBe('user_name')
    expect(nameInput?.getAttribute('type')).toBe('text')
    expect(nameInput?.hasAttribute('required')).toBe(true)
  })

  test('renders email field with label', () => {
    const { getByLabelText } = render(ContactFormComponent)
    expect(getByLabelText('Email')).toBeTruthy()
  })

  test('email input has correct attributes', () => {
    const { container } = render(ContactFormComponent)
    const emailInput = container.querySelector('#cf-email')
    expect(emailInput).toBeTruthy()
    expect(emailInput?.getAttribute('name')).toBe('user_email')
    expect(emailInput?.getAttribute('type')).toBe('email')
    expect(emailInput?.getAttribute('inputmode')).toBe('email')
    expect(emailInput?.hasAttribute('required')).toBe(true)
  })

  test('renders email address useage text', () => {
    const { getByText } = render(ContactFormComponent)
    expect(getByText(/We.ll only use this to reply/)).toBeTruthy()
  })

  test('renders message field with label', () => {
    const { getByLabelText } = render(ContactFormComponent)
    expect(getByLabelText('Message')).toBeTruthy()
  })

  test('message textarea has correct attributes', () => {
    const { container } = render(ContactFormComponent)
    const messageTextarea = container.querySelector('#cf-message')
    expect(messageTextarea).toBeTruthy()
    expect(messageTextarea?.getAttribute('name')).toBe('message')
    expect(messageTextarea?.getAttribute('rows')).toBe('6')
    expect(messageTextarea?.hasAttribute('required')).toBe(true)
  })

  test('renders submit button', () => {
    const { getByText } = render(ContactFormComponent)
    expect(getByText('Send')).toBeTruthy()
  })

  test('submit button has correct type', () => {
    const { container } = render(ContactFormComponent)
    const submitButton = container.querySelector('button[type="submit"]')
    expect(submitButton).toBeTruthy()
  })

  test('renders validation error messages', () => {
    const { container } = render(ContactFormComponent)
    expect(container.querySelector('#cf-name-error')).toBeTruthy()
    expect(container.querySelector('#cf-email-error')).toBeTruthy()
    expect(container.querySelector('#cf-message-error')).toBeTruthy()
  })

  test('name error message has correct text', () => {
    const { getByText } = render(ContactFormComponent)
    expect(getByText('Please enter your name.')).toBeTruthy()
  })

  test('email error message has correct text', () => {
    const { getByText } = render(ContactFormComponent)
    expect(getByText('Please enter a valid email address.')).toBeTruthy()
  })

  test('message error message has correct text', () => {
    const { getByText } = render(ContactFormComponent)
    expect(getByText('Please include a brief message.')).toBeTruthy()
  })

  test('form has novalidate attribute', () => {
    const { container } = render(ContactFormComponent)
    const form = container.querySelector('form')
    expect(form?.hasAttribute('novalidate')).toBe(true)
  })

  test('hidden honeypot field exists', () => {
    const { container } = render(ContactFormComponent)
    const honeypot = container.querySelector('input[name="website"]')
    expect(honeypot).toBeTruthy()
    expect(honeypot?.getAttribute('tabindex')).toBe('-1')
  })

  test('status message area has aria-live', () => {
    const { container } = render(ContactFormComponent)
    const statusArea = container.querySelector('[aria-live="polite"][aria-atomic="true"]')
    expect(statusArea).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByLabelText, getByText, container } = render(ContactFormComponent)
      
      expect(getByLabelText('Name')).toBeTruthy()
      expect(getByLabelText('Email')).toBeTruthy()
      expect(getByLabelText('Message')).toBeTruthy()
      expect(getByText('Send')).toBeTruthy()
      expect(container.querySelector('form')).toBeTruthy()
    })

    test('all form fields are accessible on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(ContactFormComponent)
      expect(container.querySelector('#cf-name')).toBeTruthy()
      expect(container.querySelector('#cf-email')).toBeTruthy()
      expect(container.querySelector('#cf-message')).toBeTruthy()
    })

    test('submit button has correct mobile layout classes', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(ContactFormComponent)
      const buttonContainer = container.querySelector('.d-grid.d-sm-flex')
      expect(buttonContainer).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByLabelText, getByText } = render(ContactFormComponent)
      
      expect(getByLabelText('Name')).toBeTruthy()
      expect(getByLabelText('Email')).toBeTruthy()
      expect(getByLabelText('Message')).toBeTruthy()
      expect(getByText('Send')).toBeTruthy()
    })

    test('form structure is correct on desktop', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      
      const { container } = render(ContactFormComponent)
      const form = container.querySelector('form.needs-validation')
      expect(form).toBeTruthy()
    })
  })
})
