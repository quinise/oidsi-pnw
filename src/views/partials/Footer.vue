<template>
  <footer id="footer" class="bg-light text-primary py-3 mt-auto border-top">
    <div class="container text-center">
      <p class="mb-0 small">
        {{ authorStatement }}
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://quinise.ercolano.com/"
          aria-label="Link to developer's website"
          class="fw-semibold text-success text-decoration-none"
        >
          {{ authorName }}<span class="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  data() {
    return {
      authorStatement: 'Created by ',
      authorName: 'Quinise'
    }
  }
}
</script>

<style scoped>
  footer {
    font-family: 'Gudea', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }

  /* Brand colors */
  .text-primary {
    color: #000080 !important; /* navy */
  }
  .text-success {
    color: #4CAF50 !important; /* highlight green */
  }

  footer a:hover {
    text-decoration: underline !important ;
    color: #000080 !important;
  }
</style>