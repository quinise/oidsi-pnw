// tests/unit/GalleryCarousel.spec.ts
import { render, screen } from '@testing-library/vue'
import GalleryCarousel from '@/components/GalleryCarousel.vue'

it('sets Bootstrap carousel options explicitly to avoid type warnings', async () => {
  render(GalleryCarousel, {
    props: { interval: 5000, ride: 'carousel', pause: 'hover' } // example props
  })
  const carousel = screen.getByTestId('gallery-carousel') // add data-testid
  // Ensure data attributes exist (if you use data-bs-*)
  expect(carousel.getAttribute('data-bs-ride')).toBe('carousel')
})