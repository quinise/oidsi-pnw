// @vitest-environment happy-dom

import NavbarComponent from '@/views/partials/Navbar.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

// Create a mock router for testing
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/about', component: { template: '<div>About</div>' } },
    { path: '/events', component: { template: '<div>Events</div>' } },
    { path: '/services', component: { template: '<div>Services</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } },
    { path: '/gallery', component: { template: '<div>Gallery</div>' } }
  ]
})

describe('NavbarComponent', () => {
  test('renders navbar element', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const navbar = container.querySelector('nav.navbar')
    expect(navbar).toBeTruthy()
  })

  test('renders brand text', () => {
    const { getByText } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
  })

  test('renders brand logo image', () => {
    const { getByAltText } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    expect(getByAltText('Ile Iwori-Bogbe logo')).toBeTruthy()
  })

  test('logo has correct dimensions', () => {
    const { getByAltText } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const logo = getByAltText('Ile Iwori-Bogbe logo')
    expect(logo.getAttribute('width')).toBe('36')
    expect(logo.getAttribute('height')).toBe('36')
  })

  test('renders navigation toggle button', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const toggler = container.querySelector('.navbar-toggler')
    expect(toggler).toBeTruthy()
    expect(toggler?.getAttribute('aria-label')).toBe('Toggle navigation menu')
  })

  test('renders all navigation links', () => {
    const { getByText } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    expect(getByText('About')).toBeTruthy()
    expect(getByText('Events')).toBeTruthy()
    expect(getByText('Services')).toBeTruthy()
    expect(getByText('Contact Us')).toBeTruthy()
    expect(getByText('Gallery')).toBeTruthy()
  })

  test('navigation has correct aria-label', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const nav = container.querySelector('nav[aria-label="Primary navigation"]')
    expect(nav).toBeTruthy()
  })

  test('navbar collapse has correct structure', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const collapse = container.querySelector('#navbarSupportedContent')
    expect(collapse).toBeTruthy()
    expect(collapse?.classList.contains('navbar-collapse')).toBe(true)
  })

  test('renders navigation list', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const navList = container.querySelector('ul.navbar-nav')
    expect(navList).toBeTruthy()
  })

  test('each nav link has correct structure', () => {
    const { container } = render(NavbarComponent, {
      global: { plugins: [router] }
    })
    const navItems = container.querySelectorAll('.nav-item')
    expect(navItems.length).toBe(5)
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(NavbarComponent, {
        global: { plugins: [router] }
      })
      
      expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
      expect(container.querySelector('.navbar-toggler')).toBeTruthy()
      expect(getByText('About')).toBeTruthy()
    })

    test('toggler button is visible on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(NavbarComponent, {
        global: { plugins: [router] }
      })
      const toggler = container.querySelector('.navbar-toggler')
      expect(toggler).toBeTruthy()
    })

    test('navbar has correct mobile structure', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(NavbarComponent, {
        global: { plugins: [router] }
      })
      expect(container.querySelector('.navbar-expand-lg')).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(NavbarComponent, {
        global: { plugins: [router] }
      })
      
      expect(getByText('Ile Iwori-Bogbe')).toBeTruthy()
      expect(container.querySelector('nav.navbar')).toBeTruthy()
      expect(getByText('Gallery')).toBeTruthy()
    })

    test('all nav links are accessible on desktop', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      
      const { container } = render(NavbarComponent, {
        global: { plugins: [router] }
      })
      const navItems = container.querySelectorAll('.nav-item')
      expect(navItems.length).toBe(5)
    })
  })
})
