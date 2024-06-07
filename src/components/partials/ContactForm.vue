<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/contact.css">
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/contactForm.css">
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/global.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
  </html>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
   name:'ContactForm',
   components: {
   },
   methods: {
    sendEmail() {
      emailjs
        .sendForm('OIDSIPNWemailService', 'template_9wiizu7', this.$refs.form, {
          publicKey: 'jGmLOWnQABZ-z6y33',
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