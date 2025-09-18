<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Title -->
      <h1 class="display-6 fw-semibold gradient-title mt-5 mb-3">
        Contact Seattle O.I.D.S.I.
      </h1>

      <!-- Email blurb -->
      <h2 class="h5 text-black mb-3">Send Us an Email</h2>

      <!-- Contact form holder -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <div class="card shadow-sm text-start">
            <div class="card-body p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <!-- Phone CTA -->
      <div class="row justify-content-center mt-4">
        <div class="col-auto">
          <a
            class="btn btn-outline-primary fw-semibold"
            href="tel:+13478416087"
            aria-label="Call or text, phone number 3 4 7, 8 4 1, 6 0 8 7"
          >
            Call or Text (347) 841-6087
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
  import ContactForm from '@/views/partials/ContactForm.vue';
</script>

<style scoped>
  h1 {
    font-family: var(--heading-font);
  }
  h2, .card, .btn {
    font-family: var(--body-font);
  }

  .card {
    border: none;
    border-left: 4px solid rgba(0, 0, 128, 0.35); /* subtle semi-transparent navy accent */
    border-radius: .75rem;
  }
</style>