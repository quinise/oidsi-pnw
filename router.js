import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '/src/components/HomeView.vue'
import AboutView from '/src/components/AboutView.vue'
import EventsView from '/src/components/EventsView.vue'
import ServicesView from '/src/components/ServicesView.vue'
import ContactView from '/src/components/ContactView.vue'
import GalleryView from '/src/components/GalleryView.vue'

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/about', name: 'about', component: AboutView},
  {path: '/events', name: 'events', component: EventsView},
  {path: '/services', name: 'services', component: ServicesView},
  {path: '/contact', name: 'contact', component: ContactView},
  {path: '/gallery', name: 'gallery', component: GalleryView},

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router