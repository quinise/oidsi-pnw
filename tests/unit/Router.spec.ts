// tests/unit/Router.spec.ts
import { render, screen } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue'), name: 'home' },
  { path: '/home', component: () => import('@/views/Home.vue'), name: 'home-alias' },
  { path: '/about', component: () => import('@/views/About.vue'), name: 'about' },
  { path: '/events', component: () => import('@/views/Events.vue'), name: 'events' },
  { path: '/services', component: () => import('@/views/Services.vue'), name: 'services' },
  { path: '/contact', component: () => import('@/views/Contact.vue'), name: 'contact' },
  { path: '/gallery', component: () => import('@/views/Gallery.vue'), name: 'gallery' }
]

function makeRouter(initial = '/') {
  const router = createRouter({ history: createWebHistory(), routes })
  router.push(initial)
  return router.isReady().then(() => router)
}

test('navigates to /home', async () => {
  const router = await makeRouter('/home')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in Home
  expect(await screen.findByRole('heading', { name: /home/i })).toBeInTheDocument()
})

test('navigates to /about', async () => {
  const router = await makeRouter('/about')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in About
  expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument()
})

test('navigates to /events', async () => {
  const router = await makeRouter('/events')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in Events
  expect(await screen.findByRole('heading', { name: /events/i })).toBeInTheDocument()
})

test('navigates to /services', async () => {
  const router = await makeRouter('/services')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in Services
  expect(await screen.findByRole('heading', { name: /services/i })).toBeInTheDocument()
})

test('navigates to /contact', async () => {
  const router = await makeRouter('/contact')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in Contact
  expect(await screen.findByRole('heading', { name: /contact/i })).toBeInTheDocument()
})

test('navigates to /gallery', async () => {
  const router = await makeRouter('/gallery')
  render(App, { global: { plugins: [router] } })
  // Assert something unique in Gallery
  expect(await screen.findByRole('heading', { name: /gallery/i })).toBeInTheDocument()
})