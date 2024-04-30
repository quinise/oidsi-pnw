
import { RouterLink } from 'vue-router';

<template>
  <main>
    <NavBar />
    <RouterView />
    <Footer />
  </main>
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