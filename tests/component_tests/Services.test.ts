// @vitest-environment happy-dom

import ServicesComponent from '@/views/Services.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } },
    { path: '/services', component: { template: '<div>Services</div>' } }
  ]
})

describe('ServicesComponent', () => {
  test('renders title', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('Services')).toBeTruthy()
  })

  test('renders offering image', () => {
    const { getByAltText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByAltText(/Ifa offering to Yemoja/i)).toBeTruthy()
  })

  test('renders contact call-to-action heading', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('Questions or ready to schedule?')).toBeTruthy()
  })

  test('renders Message us button', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('Message us')).toBeTruthy()
  })

  test('renders services list', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(container.querySelector('ul.list-group')).toBeTruthy()
  })

  test('renders multiple service items', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const serviceItems = container.querySelectorAll('li.list-group-item')
    expect(serviceItems.length).toBeGreaterThan(0)
  })

  test('renders service titles', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('Ifa Readings')).toBeTruthy()
    expect(getByText('Orisha Readings')).toBeTruthy()
    expect(getByText(/Spiritual Baths/)).toBeTruthy()
  })

  test('renders service descriptions', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    expect(getByText(/spiritual energy diagnostic reading facilitated and interpreted by one or/i)).toBeTruthy()
    expect(getByText(/merindilogun/i)).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(ServicesComponent, {
        global: { plugins: [router] }
      })
      
      expect(getByText('Services')).toBeTruthy()
      expect(container.querySelector('ul.list-group')).toBeTruthy()
      expect(getByText('Message us')).toBeTruthy()
    })

    test('accordion buttons are present on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(ServicesComponent, {
        global: { plugins: [router] }
      })
      const accordionToggles = container.querySelectorAll('.accordion-toggle')
      expect(accordionToggles.length).toBeGreaterThan(0)
    })

    test('accordion content has correct structure', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(ServicesComponent, {
        global: { plugins: [router] }
      })
      const accordionContent = container.querySelectorAll('.accordion-content')
      expect(accordionContent.length).toBeGreaterThan(0)
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(ServicesComponent, {
        global: { plugins: [router] }
      })
      
      expect(getByText('Services')).toBeTruthy()
      expect(container.querySelector('ul.list-group')).toBeTruthy()
      expect(getByText('Ifa Readings')).toBeTruthy()
    })
  })
})

describe('Message Us Button Behavior', () => {
  test('Message us button links to contact page', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const link = container.querySelector('a#contact-cta-link')
    expect(link).toBeTruthy()
    expect(link?.getAttribute('href')).toBe('/contact')
  })

  test('Message us button has correct text', () => {
    const { getByText } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const button = getByText('Message us')
    expect(button).toBeTruthy()
  })

  test('Message us button has correct CSS classes', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const link = container.querySelector('#contact-cta-link')
    expect(link?.classList.contains('btn')).toBe(true)
    expect(link?.classList.contains('btn-success')).toBe(true)
    expect(link?.classList.contains('fw-semibold')).toBe(true)
    expect(link?.classList.contains('btn-contrast')).toBe(true)
  })

  test('Message us button has correct accessibility attributes', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const link = container.querySelector('#contact-cta-link')
    expect(link?.getAttribute('aria-labelledby')).toBe('contact-cta-link contact-cta-heading')
    expect(link?.getAttribute('aria-describedby')).toBe('contact-cta-help')
  })

  test('screen reader helper text is present', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const helpText = container.querySelector('#contact-cta-help')
    expect(helpText).toBeTruthy()
    expect(helpText?.classList.contains('sr-only')).toBe(true)
    expect(helpText?.textContent).toContain('Navigates to the Contact page')
  })

  test('button is clickable and configured to navigate to contact', () => {
    const { getByText, container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    
    const button = getByText('Message us')
    const link = container.querySelector('#contact-cta-link')
    
    expect(button).toBeTruthy()
    expect(link?.tagName).toBe('A')
    expect(link?.getAttribute('href')).toBe('/contact')
  })

  test('button is keyboard accessible as anchor element', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    
    const link = container.querySelector('#contact-cta-link')
    
    expect(link?.tagName).toBe('A')
    expect(link?.getAttribute('href')).toBe('/contact')
    expect(link).toBeTruthy()
  })

  test('CTA heading is referenced by button', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const heading = container.querySelector('#contact-cta-heading')
    const button = container.querySelector('#contact-cta-link')
    
    expect(heading?.textContent).toContain('Questions or ready to schedule?')
    expect(button?.getAttribute('aria-labelledby')).toContain('contact-cta-heading')
  })

  test('button renders in correct location in DOM', () => {
    const { container } = render(ServicesComponent, {
      global: { plugins: [router] }
    })
    const button = container.querySelector('#contact-cta-link')
    const parentDiv = button?.closest('.col-auto.text-center')
    expect(parentDiv).toBeTruthy()
  })
})