// @vitest-environment happy-dom

import ServicesComponent from '@/views/Services.vue'
import { render } from '@testing-library/vue'
import { expect, test } from 'vitest'

test('renders title, image, contact heading, and services list', () => {
  const { getByText, getByAltText, container } = render(ServicesComponent)

  expect(getByText('Services')).toBeTruthy()
  expect(getByAltText(/Ifa offering to Yemoja/i)).toBeTruthy()
  expect(getByText('Questions or ready to schedule?')).toBeTruthy()
  expect(container.querySelector('ul.list-group')).toBeTruthy()
  expect(container.querySelectorAll('li.list-group-item').length).toBeGreaterThan(0)
})