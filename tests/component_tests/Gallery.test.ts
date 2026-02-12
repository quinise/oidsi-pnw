// @vitest-environment happy-dom

import GalleryComponent from '@/views/Gallery.vue'
import { render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'

describe('GalleryComponent', () => {
  test('renders title in Yoruba', () => {
    const { getByText } = render(GalleryComponent)
    expect(getByText('A nifẹ lati pin àwọn àkókò tí ó dára')).toBeTruthy()
  })

  test('renders subtitle in English', () => {
    const { getByText } = render(GalleryComponent)
    expect(getByText('We love to share good times')).toBeTruthy()
  })

  test('renders carousel structure', () => {
    const { container } = render(GalleryComponent)
    const carousel = container.querySelector('#galleryCarousel')
    expect(carousel).toBeTruthy()
    expect(carousel?.classList.contains('carousel')).toBe(true)
  })

  test('renders carousel controls', () => {
    const { container } = render(GalleryComponent)
    const prevButton = container.querySelector('.carousel-control-prev')
    const nextButton = container.querySelector('.carousel-control-next')
    expect(prevButton).toBeTruthy()
    expect(nextButton).toBeTruthy()
  })

  test('renders carousel slides', () => {
    const { container } = render(GalleryComponent)
    const slides = container.querySelectorAll('.carousel-item')
    expect(slides.length).toBeGreaterThan(0)
  })

  test('renders carousel indicators', () => {
    const { container } = render(GalleryComponent)
    const indicators = container.querySelector('.carousel-indicators')
    expect(indicators).toBeTruthy()
  })

  test('renders slide counter text', () => {
    const { getByText } = render(GalleryComponent)
    expect(getByText(/Slide \d+ \/ \d+/)).toBeTruthy()
  })

  describe('Mobile viewport', () => {
    test('renders correctly on mobile viewport (375px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 })
      
      const { getByText, container } = render(GalleryComponent)
      
      expect(getByText('A nifẹ lati pin àwọn àkókò tí ó dára')).toBeTruthy()
      expect(getByText('We love to share good times')).toBeTruthy()
      expect(container.querySelector('#galleryCarousel')).toBeTruthy()
    })

    test('carousel controls are present on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(GalleryComponent)
      expect(container.querySelector('.carousel-control-prev')).toBeTruthy()
      expect(container.querySelector('.carousel-control-next')).toBeTruthy()
    })

    test('carousel slides render on mobile', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      expect(slides.length).toBeGreaterThan(0)
    })
  })

  describe('Desktop viewport', () => {
    test('renders correctly on desktop viewport (1024px)', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 })
      
      const { getByText, container } = render(GalleryComponent)
      
      expect(getByText('A nifẹ lati pin àwọn àkókò tí ó dára')).toBeTruthy()
      expect(container.querySelector('.carousel-indicators')).toBeTruthy()
    })
  })
})