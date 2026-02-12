// @vitest-environment happy-dom

import NotFound from '@/views/NotFound.vue'
import { render } from '@testing-library/vue'
import { expect, test } from 'vitest'

test('renders NotFound component with title and image', () => {
  const { getByText } = render(NotFound)

  expect(getByText('Page Not Found')).toBeTruthy()
  expect(getByText(/page you’re looking for doesn’t exist/)).toBeTruthy()
  expect(getByText('Go home')).toBeTruthy()
  expect(getByText('Contact us')).toBeTruthy()
})