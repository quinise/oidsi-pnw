<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Title -->
      <h1 class="display-6 fw-semibold gradient-title mt-5 h-100">
        {{ title }}
      </h1>

      <!-- Content -->
      <div id="about-section" class="row justify-content-center mt-1 text-start">
        <div class="col-md-10 col-lg-8">
          <img
            class="img-fluid d-block mx-auto"
            :src="aboutImg"
            alt="A group of American aborisha casually dressed, posing for a picture outside on a porch."
            style="max-width: 380px;"
          />
          <p class="about-paragraph mt-5">
          We are a holistic healing institute that provides the necessary tools to positively enhance lives. 
          Our mission is to assist in creating and maintaining wellness, globally and locally, within our 
          respective communities. We strive to provide renewed vitality and optimum quality of life through 
          traditional African-centered sciences and other alternative healing disciplines.
        </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import aboutImg from '@/assets/images/ile-pic-1.png';

export default {
  name: 'AboutComponent',
  data() {
    return {
      title: 'We Are Ile Iwori-Bogbe',
      aboutImg
    }
  }
}
</script>

<style scoped>
  .about-img {
    border: none !important;
    box-shadow: none;
    max-width: 720px;
  }

  .about-paragraph {
    max-width: 720px;
    margin: 0 auto;
    background-color: rgba(0, 0, 128, 0.15);
    color: #000000;
    padding: 1.5rem;
    border-radius: .5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    font-family: var(--body-font);
    line-height: 1.6;
  }
</style>