// @vitest-environment happy-dom

import EventsComponent from '@/views/Events.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('EventsComponent', () => {
  test('renders title', () => {
    const { getByText } = render(EventsComponent)
    expect(getByText('Seattle O.I.D.S.I. Events Calendar')).toBeTruthy()
  })

  test('renders timezone information', () => {
    const { getByText } = render(EventsComponent)
    expect(getByText('Times shown in Pacific Time (America/Los_Angeles)')).toBeTruthy()
  })

  test('renders calendar iframe with correct attributes', () => {
    const { container } = render(EventsComponent)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeTruthy()
    expect(iframe?.getAttribute('title')).toBe('OIDSI-PNW Google Calendar (Seattle)')
    expect(iframe?.getAttribute('aria-label')).toBe('OIDSI-PNW Google Calendar (Seattle)')
  })

  test('calendar iframe has correct source URL', () => {
    const { container } = render(EventsComponent)
    const iframe = container.querySelector('iframe')
    expect(iframe?.getAttribute('src')).toContain('calendar.google.com')
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(EventsComponent)
      
      expect(getByText('Seattle O.I.D.S.I. Events Calendar')).toBeTruthy()
      expect(getByText('Times shown in Pacific Time (America/Los_Angeles)')).toBeTruthy()
      expect(container.querySelector('iframe')).toBeTruthy()
    })

    test('calendar iframe is responsive on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(EventsComponent)
      const iframe = container.querySelector('iframe')
      expect(iframe).toBeTruthy()
      const ratioContainer = container.querySelector('.ratio')
      expect(ratioContainer).toBeTruthy()
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(EventsComponent)
      
      expect(getByText('Seattle O.I.D.S.I. Events Calendar')).toBeTruthy()
      expect(container.querySelector('iframe')).toBeTruthy()
    })
  })
})