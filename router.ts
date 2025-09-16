import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import AboutView from '@/components/AboutView.vue'
import EventsView from '@/components/EventsView.vue'
import ServicesView from '@/components/ServicesView.vue'
import ContactView from '@/components/ContactView.vue'
import GalleryView from '@/components/GalleryView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Home • Ile Iwori-Bogbe' }
  },
  {
    path: '/about',
    component: AboutView,
    meta: { title: 'About • Ile Iwori-Bogbe' }
  },
  {
    path: '/events',
    component: EventsView,
    meta: { title: 'Events • Ile Iwori-Bogbe' }
  },
  {
    path: '/services',
    component: ServicesView,
    meta: { title: 'Services • Ile Iwori-Bogbe' }
  },
  {
    path: '/contact',
    component: ContactView,
    meta: { title: 'Contact • Ile Iwori-Bogbe' }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
    meta: { title: 'Gallery • Ile Iwori-Bogbe' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const reduce = typeof window !== 'undefined'
        && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      return { el: to.hash, behavior: reduce ? 'auto' : 'smooth' }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = String(to.meta.title)
  const region = document.getElementById('route-change-live-region')
  if (region) region.textContent = (to.meta?.title as string) || document.title
})

export default router