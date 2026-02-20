// @vitest-environment happy-dom

import ContactFormComponent from '@/views/partials/ContactForm.vue'
import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, test, vi } from 'vitest'
import { nextTick } from 'vue'

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

  describe('Behavioral Logic Tests', () => {
    test('invalid name field gets is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const nameInput = container.querySelector('#cf-name') as HTMLInputElement
      expect(nameInput).toBeTruthy()

      await fireEvent.blur(nameInput)
      await nextTick()

      expect(nameInput.classList.contains('is-invalid')).toBe(true)
      expect(nameInput.getAttribute('aria-invalid')).toBe('true')
    })

    test('valid name field does not get is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const nameInput = container.querySelector('#cf-name') as HTMLInputElement
      expect(nameInput).toBeTruthy()

      nameInput.value = 'John Doe'
      await fireEvent.blur(nameInput)
      await nextTick()

      expect(nameInput.classList.contains('is-invalid')).toBe(false)
    })

    test('invalid email field gets is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const emailInput = container.querySelector('#cf-email') as HTMLInputElement
      expect(emailInput).toBeTruthy()

      emailInput.value = 'invalid-email'
      await fireEvent.blur(emailInput)
      await nextTick()

      expect(emailInput.classList.contains('is-invalid')).toBe(true)
      expect(emailInput.getAttribute('aria-invalid')).toBe('true')
    })

    test('valid email field does not get is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const emailInput = container.querySelector('#cf-email') as HTMLInputElement
      expect(emailInput).toBeTruthy()

      emailInput.value = 'test@example.com'
      await fireEvent.blur(emailInput)
      await nextTick()

      expect(emailInput.classList.contains('is-invalid')).toBe(false)
    })

    test('invalid message field gets is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const messageTextarea = container.querySelector('#cf-message') as HTMLTextAreaElement
      expect(messageTextarea).toBeTruthy()

      await fireEvent.blur(messageTextarea)
      await nextTick()

      expect(messageTextarea.classList.contains('is-invalid')).toBe(true)
      expect(messageTextarea.getAttribute('aria-invalid')).toBe('true')
    })

    test('valid message field does not get is-invalid class on blur', async () => {
      const { container } = render(ContactFormComponent)
      const messageTextarea = container.querySelector('#cf-message') as HTMLTextAreaElement
      expect(messageTextarea).toBeTruthy()

      messageTextarea.value = 'This is a valid message'
      await fireEvent.blur(messageTextarea)
      await nextTick()

      expect(messageTextarea.classList.contains('is-invalid')).toBe(false)
    })

    test('submit button shows spinner and disabled state during submission', async () => {
      const { container, getByText } = render(ContactFormComponent)
      const form = container.querySelector('form') as HTMLFormElement
      const nameInput = container.querySelector('#cf-name') as HTMLInputElement
      const emailInput = container.querySelector('#cf-email') as HTMLInputElement
      const messageTextarea = container.querySelector('#cf-message') as HTMLTextAreaElement

      nameInput.value = 'Test User'
      emailInput.value = 'test@example.com'
      messageTextarea.value = 'Test message'

      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
      
      await new Promise(resolve => setTimeout(resolve, 50))

      const submitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement
      expect(submitButton.hasAttribute('disabled')).toBe(true)
      expect(submitButton.getAttribute('aria-busy')).toBe('true')
    })

    test('honeypot prevents actual form submission when filled', async () => {
      const { container } = render(ContactFormComponent)
      const form = container.querySelector('form') as HTMLFormElement
      const honeypot = container.querySelector('input[name="website"]') as HTMLInputElement
      const nameInput = container.querySelector('#cf-name') as HTMLInputElement
      const emailInput = container.querySelector('#cf-email') as HTMLInputElement
      const messageTextarea = container.querySelector('#cf-message') as HTMLTextAreaElement

      nameInput.value = 'Bot User'
      emailInput.value = 'bot@example.com'
      messageTextarea.value = 'Spam message'
      honeypot.value = 'http://spam.com'

      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
      
      await new Promise(resolve => setTimeout(resolve, 100))

      const successMessage = container.querySelector('[data-testid="contact-success"]')
      expect(successMessage).toBeTruthy()
    })

    test('form prevents default submission behavior', () => {
      const { container } = render(ContactFormComponent)
      const form = container.querySelector('form') as HTMLFormElement
      
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      const preventDefaultSpy = vi.spyOn(submitEvent, 'preventDefault')
      
      form.dispatchEvent(submitEvent)
      
      expect(preventDefaultSpy).toHaveBeenCalled()
    })

    test('error message displays when form is invalid', async () => {
      const { container } = render(ContactFormComponent)
      const form = container.querySelector('form') as HTMLFormElement

      await fireEvent.submit(form)
      await nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      const errorMessage = container.querySelector('[data-testid="contact-error"]')
      expect(errorMessage).toBeTruthy()
    })

    test('form fields have correct aria-errormessage attributes', () => {
      const { container } = render(ContactFormComponent)
      
      const nameInput = container.querySelector('#cf-name')
      const emailInput = container.querySelector('#cf-email')
      const messageTextarea = container.querySelector('#cf-message')

      expect(nameInput?.getAttribute('aria-errormessage')).toBe('cf-name-error')
      expect(emailInput?.getAttribute('aria-errormessage')).toBe('cf-email-error')
      expect(messageTextarea?.getAttribute('aria-errormessage')).toBe('cf-message-error')
    })

    test('submit button text changes when submitting', async () => {
      const { container } = render(ContactFormComponent)
      const form = container.querySelector('form') as HTMLFormElement
      const nameInput = container.querySelector('#cf-name') as HTMLInputElement
      const emailInput = container.querySelector('#cf-email') as HTMLInputElement
      const messageTextarea = container.querySelector('#cf-message') as HTMLTextAreaElement
      const submitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement

      expect(submitButton.textContent?.trim()).toBe('Send')

      nameInput.value = 'Test User'
      emailInput.value = 'test@example.com'
      messageTextarea.value = 'Test message'

      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
      
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(submitButton.textContent?.includes('Sending')).toBe(true)
    })
  })
})
