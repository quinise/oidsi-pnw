<template>
  <main class="d-flex align-items-center justify-content-center text-center flex-grow-1 notfound">
    <div class="container py-5">
      <div class="mx-auto" style="max-width: 720px;">
        <div class="display-1 fw-bold text-primary">404</div>
        <h1 class="h2 fw-semibold mt-3">{{ title }}</h1>
        <p class="text-muted mt-2">
          {{ pageNotFoundMessage }}
        </p>

        <div class="d-flex gap-3 justify-content-center mt-4">
          <RouterLink to="/" class="btn btn-primary px-4">Go home</RouterLink>
          <RouterLink to="/contact" class="btn btn-outline-primary px-4">Contact us</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

export default {
  name: 'NotFoundComponent',
  data() {
    return {
      title: 'Page Not Found',
      pageNotFoundMessage: 'The page you’re looking for doesn’t exist or may have moved.'
    }
  }
}
</script>

<style scoped>
  .notfound { min-height: 100dvh; }
</style>
