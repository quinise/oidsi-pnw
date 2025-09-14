<template>
  <head>
    <title>Contact Form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
  </head>
    <div class="container">
      <form id="contact-form" ref="form" @submit.prevent="sendEmail">
        <input type="hidden" name="contact_number" value="1">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="Send">
      </form>
    </div>    
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
  components: {
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm('OIDSIPNWemailService', 'template_9wiizu7', this.$refs.form, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            this.$refs.form.reset();
            console.log('SUCCESS!');
          },
          (error) => {
            this.$refs.form.reset();
            console.log('FAILED...', error.text);
          },
        );
    },
  },
}
</script>