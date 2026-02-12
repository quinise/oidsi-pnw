// @vitest-environment happy-dom

import AboutComponent from '@/views/About.vue'
import { render } from '@testing-library/vue'
import { expect, test } from 'vitest'


test('renders title, image, and content sections', () => {
  const { getByText, getByAltText } = render(AboutComponent)

  expect(getByText('We Are Ile Iwori-Bogbe')).toBeTruthy()
  expect(getByAltText(/group of American aborisha casually dressed/i)).toBeTruthy()
  expect(getByText(/holistic healing institute/i)).toBeTruthy()
})