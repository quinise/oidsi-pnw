<template>
  <head>
    <title>Contact Us</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
  </head>
  <div class="row">
    <h1 class="col intro">Contact Seattle O.I.D.S.I.</h1>
  </div>
  <dash />
  <h3 class="email-blurb">Send Us an Email</h3>    
  <ContactForm />
  <h3 class="phone-number"> Call or Text <a href="tel:3478416087" aria-label="347.841.6087"> (347) 841 - 6087</a></h3>
</template>

<script>
import dash from '/src/components/partials/dash.vue'
import ContactForm from '/src/components/partials/ContactForm.vue'

export default {
   name:'ContactView',
   components: {
    dash,
    ContactForm,
   },
}
</script>