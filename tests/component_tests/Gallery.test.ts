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

  describe('Behavioral Logic Tests', () => {
    test('carousel has correct Bootstrap data attributes', () => {
      const { container } = render(GalleryComponent)
      const carousel = container.querySelector('#galleryCarousel')
      
      expect(carousel?.getAttribute('data-bs-ride')).toBe('carousel')
      expect(carousel?.getAttribute('data-bs-interval')).toBe('5000')
    })

    test('carousel has proper ARIA attributes', () => {
      const { container } = render(GalleryComponent)
      const carousel = container.querySelector('#galleryCarousel')
      
      expect(carousel?.getAttribute('role')).toBe('region')
      expect(carousel?.getAttribute('aria-roledescription')).toBe('carousel')
      expect(carousel?.getAttribute('aria-label')).toBe('Gallery')
    })

    test('carousel previous button has correct data attributes', () => {
      const { container } = render(GalleryComponent)
      const prevButton = container.querySelector('.carousel-control-prev')
      
      expect(prevButton?.getAttribute('data-bs-target')).toBe('#galleryCarousel')
      expect(prevButton?.getAttribute('data-bs-slide')).toBe('prev')
      expect(prevButton?.getAttribute('aria-label')).toBe('Previous slide')
    })

    test('carousel next button has correct data attributes', () => {
      const { container } = render(GalleryComponent)
      const nextButton = container.querySelector('.carousel-control-next')
      
      expect(nextButton?.getAttribute('data-bs-target')).toBe('#galleryCarousel')
      expect(nextButton?.getAttribute('data-bs-slide')).toBe('next')
      expect(nextButton?.getAttribute('aria-label')).toBe('Next slide')
    })

    test('carousel indicators have correct data attributes', () => {
      const { container } = render(GalleryComponent)
      const indicators = container.querySelectorAll('.carousel-indicators button')
      
      expect(indicators.length).toBeGreaterThan(0)
      
      indicators.forEach((indicator, index) => {
        expect(indicator.getAttribute('data-bs-target')).toBe('#galleryCarousel')
        expect(indicator.getAttribute('data-bs-slide-to')).toBe(String(index))
        expect(indicator.getAttribute('aria-label')).toBe(`Slide ${index + 1}`)
      })
    })

    test('first carousel indicator has active class', () => {
      const { container } = render(GalleryComponent)
      const indicators = container.querySelectorAll('.carousel-indicators button')
      const firstIndicator = indicators[0]
      
      expect(firstIndicator?.classList.contains('active')).toBe(true)
    })

    test('first carousel item has active class', () => {
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      const firstSlide = slides[0]
      
      expect(firstSlide?.classList.contains('active')).toBe(true)
    })

    test('active slide image has tabindex 0', () => {
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      const firstSlideImg = slides[0]?.querySelector('img')
      
      expect(firstSlideImg?.getAttribute('tabindex')).toBe('0')
    })

    test('inactive slide images have tabindex -1', () => {
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      
      for (let i = 1; i < slides.length; i++) {
        const img = slides[i]?.querySelector('img')
        expect(img?.getAttribute('tabindex')).toBe('-1')
      }
    })

    test('inactive slide images have aria-hidden true', () => {
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      
      for (let i = 1; i < slides.length; i++) {
        const img = slides[i]?.querySelector('img')
        expect(img?.getAttribute('aria-hidden')).toBe('true')
      }
    })

    test('all carousel images have lazy loading', () => {
      const { container } = render(GalleryComponent)
      const images = container.querySelectorAll('.gallery-img')
      
      images.forEach(img => {
        expect(img.getAttribute('loading')).toBe('lazy')
      })
    })

    test('all carousel images have alt text', () => {
      const { container } = render(GalleryComponent)
      const images = container.querySelectorAll('.gallery-img')
      
      images.forEach(img => {
        const alt = img.getAttribute('alt')
        expect(alt).toBeTruthy()
        expect(alt?.length).toBeGreaterThan(0)
      })
    })

    test('carousel control buttons have visually hidden text', () => {
      const { container } = render(GalleryComponent)
      const prevButton = container.querySelector('.carousel-control-prev')
      const nextButton = container.querySelector('.carousel-control-next')
      
      expect(prevButton?.querySelector('.visually-hidden')?.textContent).toBe('Previous')
      expect(nextButton?.querySelector('.visually-hidden')?.textContent).toBe('Next')
    })

    test('carousel control icons have aria-hidden true', () => {
      const { container } = render(GalleryComponent)
      const prevIcon = container.querySelector('.carousel-control-prev-icon')
      const nextIcon = container.querySelector('.carousel-control-next-icon')
      
      expect(prevIcon?.getAttribute('aria-hidden')).toBe('true')
      expect(nextIcon?.getAttribute('aria-hidden')).toBe('true')
    })

    test('slide counter shows correct initial state', () => {
      const { getByText } = render(GalleryComponent)
      expect(getByText(/Slide 1 \/ \d+/)).toBeTruthy()
    })

    test('carousel inner container exists', () => {
      const { container } = render(GalleryComponent)
      const carouselInner = container.querySelector('.carousel-inner')
      
      expect(carouselInner).toBeTruthy()
      expect(carouselInner?.classList.contains('gallery-frame')).toBe(true)
    })

    test('carousel images have correct CSS classes', () => {
      const { container } = render(GalleryComponent)
      const images = container.querySelectorAll('img')
      
      images.forEach(img => {
        expect(img.classList.contains('gallery-img')).toBe(true)
      })
    })

    test('carousel renders 10 slides', () => {
      const { container } = render(GalleryComponent)
      const slides = container.querySelectorAll('.carousel-item')
      
      expect(slides.length).toBe(10)
    })

    test('carousel renders 10 indicators', () => {
      const { container } = render(GalleryComponent)
      const indicators = container.querySelectorAll('.carousel-indicators button')
      
      expect(indicators.length).toBe(10)
    })
  })
})