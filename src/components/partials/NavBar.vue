<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar" role="navigation" aria-label="Primary navigation">
    <div class="container-fluid">
      <!-- Brand/logo -->
      <RouterLink to="/" custom v-slot="{ href, navigate, isExactActive }">
        <a
          :href="href"
          @click="(e) => { hideForMobile(); navigate(e) }"
          class="navbar-brand d-flex align-items-center"
          :aria-current="isExactActive ? 'page' : undefined"
          aria-label="Home link"
        >
          <img
            src="@/assets/images/ib-logo.png"
            alt="Ile Iwori-Bogbe logo"
            width="36"
            height="36"
            class="me-2"
          />
          <span class="fw-bold brand-text">Ile Iwori-Bogbe</span>
        </a>
      </RouterLink>

      <!-- Toggler -->
      <button
        ref="navToggler"
        class="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-label="Toggle navigation menu"
        @click="toggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navMenu"
        aria-label="Main navigation"
        tabindex="-1"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to" custom v-slot="{ href, navigate, isExactActive }">
              <a
                :href="href"
                @click="(e) => { hideForMobile(); navigate(e) }"
                class="nav-link"
                :aria-current="isExactActive ? 'page' : undefined"
                :aria-label="link.label + ' link'"
              >
                {{ link.label }}
              </a>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { useNavbarA11y } from '@/composables/useNavbarA11y';
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const { isOpen, navToggler, navMenu, hideForMobile, toggle } = useNavbarA11y('navbarSupportedContent')
  
  router.afterEach(() => hideForMobile())

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/gallery', label: 'Gallery' }
  ]
</script>

<style scoped>
  .custom-navbar {
    background-color: #ffffff;
    border-bottom: 2px solid #000080;
    font-family: 'Hammersmith One', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }

  .navbar-brand .brand-text {
    color: #000080;
  }

  .nav-link {
    color: #000080 !important;
    font-weight: 500;
  }

  .nav-link:hover,
  .nav-link:focus {
    color: #4CAF50 !important;
    text-decoration: underline;
  }
</style>