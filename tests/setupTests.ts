// tests/setupTests.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// If components use ResizeObserver (Bootstrap/Carousel sometimes does)
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
;(global as any).ResizeObserver = ResizeObserver

// Optional: mock Bootstrap JS if you instantiate it directly in components
vi.mock('bootstrap', () => {
  return {
    Dropdown: class { constructor() {} toggle() {} hide() {} show() {} },
    Collapse: class { constructor() {} toggle() {} },
    Carousel: class { constructor() {} next() {} prev() {} pause() {} cycle() {} }
  }
})