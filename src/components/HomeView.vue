<template>
  <!-- Hero -->
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Curved title -->
      <div class="row justify-content-center my-5">
        <div class="col-12">
          <svg class="hero-svg d-block mx-auto" viewBox="0 0 30 3" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ile Iwori-Bogbe">
            <defs>
              <linearGradient id="homeGradient" x1="0%" y1="15%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path id="titlePath" fill="none" d="M 0 6 Q 14 -5 30 5" pathLength="2" />
            <text font-size="2" dominant-baseline="hanging" text-anchor="middle">
              <textPath href="#titlePath" startOffset="1" fill="url(#homeGradient)">
                Ile Iwori-Bogbe
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <!-- Curved subtitle -->
      <div class="row justify-content-center mt-1">
        <div class="col-12">
          <svg class="subtitle-svg d-block mx-auto" viewBox="0 0 30 2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seattle, Washington">
            <path id="subtitlePath" fill="none" d="M 0 5 Q 15 -5 30 5" pathLength="2" />
            <text font-size="1" dominant-baseline="hanging" text-anchor="middle" class="text-secondary">
              <textPath href="#subtitlePath" startOffset="1">
                Seattle, Washington
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <!-- Intro image -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-8 col-lg-6">
          <img
            class="img-fluid rounded"
            :src="introImg"
            alt="A group of American aborisha and IFA priest women dressed in white pose for a picture in a classroom at AfricaTown."
          />
        </div>
      </div>

      <!-- Spacer -->
      <div class="my-5"></div>

      <!-- Member + logo -->
      <div class="row justify-content-center align-items-center g-3">
        <div class="col-12">
          <p class="member-statement text-uppercase text-secondary mb-1">Proud Member of</p>
        </div>
        <div class="col-12">
          <a href="https://www.obafemi.org" target="_blank" rel="noopener noreferrer" class="d-inline-block">
            <img
              :src="oiLogo"
              class="img-fluid obafemi-logo"
              alt="The Obafemi Institute for the Divine and Universal Study of Ifa."
            />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
  import introImg from '@/assets/images/introduction.png'
  import oiLogo   from '@/assets/images/logo.png'
</script>

<style scoped>
  .hero-svg {
    max-width: 720px;
    height: auto;
  }

  .subtitle-svg {
    max-width: 560px;
    height: auto;
  }

  .intro-image {
    border: none !important;
    box-shadow: none;
  }

  .member-statement {
    letter-spacing: 0.08em;
    font-weight: 600;
  }

  .obafemi-logo {
    max-width: 260px;
    width: 60%;
  }

  .hero-svg text,
  .subtitle-svg text {
    font-family: var(--heading-font);
  }
</style>