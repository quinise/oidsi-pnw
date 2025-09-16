
import { RouterLink } from 'vue-router';

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  
  <!-- SR-only polite live region for route-change announcements -->
  <div id="route-change-live-region" class="sr-only" aria-live="polite" aria-atomic="true"></div>

  <header>
    <NavBar />
  </header>

  <main id="main" tabindex="-1">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<script>
  import NavBar from './components/partials/NavBar.vue';
  import Footer from './components/partials/footer.vue';

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
  /* Visually hidden until focused */
  .skip-link {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-200%);
    background: #fff;
    color: #000;
    padding: .5rem .75rem;
    border: 2px solid #000;
    z-index: 1000;
  }
  .skip-link:focus {
    transform: translateY(0);
  }

  main:focus {
    outline: none; /* removes default ring when skip-link jumps focus */
  }

  /* Show only on focus, standard Bootstrap-esque helper */
  .visually-hidden-focusable:not(:focus):not(:active) {
    position: absolute !important;
    width: 1px; height: 1px; margin: -1px; padding: 0;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
  }
  /* SR-only region */
  .sr-only {
    position: absolute !important;
    width: 1px; height: 1px; margin: -1px; padding: 0;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
  }
</style>