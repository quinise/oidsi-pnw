import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Home • Ile Iwori-Bogbe' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: 'About • Ile Iwori-Bogbe' }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/Events.vue'),
    meta: { title: 'Events • Ile Iwori-Bogbe' }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services.vue'),
    meta: { title: 'Services • Ile Iwori-Bogbe' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: { title: 'Contact • Ile Iwori-Bogbe' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery.vue'),
    meta: { title: 'Gallery • Ile Iwori-Bogbe' }
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found • Ile Iwori-Bogbe' }
  },
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