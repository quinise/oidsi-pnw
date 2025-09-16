<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Curved title -->
      <div class="row justify-content-center mt-5">
        <div class="col-12">
          <svg
            class="about-svg d-block mx-auto"
            viewBox="0 0 30 4"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="We Are Ile Iwori-Bogbe"
          >
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="15%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path id="aboutTitlePath" fill="none" d="M 0 5 Q 15 -5 30 5" pathLength="2" />
            <text font-size="1.5" dominant-baseline="hanging" text-anchor="middle">
              <textPath href="#aboutTitlePath" startOffset="1" fill="url(#aboutGradient)">
                We Are Ile Iwori-Bogbe
              </textPath>
            </text>
          </svg>
        </div>
      </div>

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

<script setup lang="ts">
  import aboutImg from '@/assets/images/ile-pic-1.png';
</script>

<style scoped>
  /* Keep the title SVG nicely sized */
  .about-svg {
    max-width: 720px;
    height: auto;
  }

  /* Borderless, responsive image; cap width for balance */
  .about-img {
    border: none !important;
    box-shadow: none;
    max-width: 720px; /* adjust to taste */
  }

  .about-svg text {
    font-family: var(--heading-font);
  }
  .about-paragraph {
    max-width: 720px;                /* limit width for readability */
    margin: 0 auto;                  /* center in container */
    background-color: rgba(0, 0, 128, 0.15); /* navy with transparency */
    color: #000000;                  /* light text (Bootstrap’s “light”) */
    padding: 1.5rem;
    border-radius: .5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    font-family: var(--body-font);
    line-height: 1.6;
  }
</style>