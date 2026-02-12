<template>
  <!-- Hero -->
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Curved title - hero -->
      <div class="row justify-content-center">
        <div class="col-12">
          <svg
            class="hero-svg d-block mx-auto"
            viewBox="0 0 600 125"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Ile Iwori-Bogbe"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient id="homeGradient" x1="0%" y1="15%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
              </linearGradient>
            </defs>

            <path id="homeArc" d="M 40 155 Q 300 35 560 155" fill="none" />

            <text text-anchor="middle" font-weight="800" font-size="48">
              <textPath href="#homeArc" xlink:href="#homeArc" startOffset="50%" fill="url(#homeGradient)">
                {{ title }}
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <!-- Curved - subtitle -->
      <div class="row justify-content-center">
        <div class="col-12">
          <svg
            class="subtitle-svg d-block mx-auto"
            viewBox="0 50 600 75"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Seattle, Washington"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path id="subtitleArc" d="M 50 120 Q 300 60 550 120" fill="none" />
            <text class="text-secondary" text-anchor="middle" font-weight="700" font-size="32">
              <textPath href="#subtitleArc" xlink:href="#subtitleArc" startOffset="50%">
                {{ subtitle }}
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

<script lang="ts">
import introImg from '@/assets/images/introduction.png';
import oiLogo from '@/assets/images/logo.png';

export default {
  name: 'HomeComponent',
  data() {
    return {
      title: 'Ile Iwori-Bogbe',
      subtitle: 'Seattle, Washington',
      introImg,
      oiLogo
    };
  }
};
</script>

<style scoped>
  /* Ensure ancestors don't clip */
  .row, .col-12 { overflow: visible; }

  .hero-svg {
    display: block;
    width: min(70vw, 640px);   /* was 92vw / 900px */
    height: clamp(100px, 16vw, 180px); /* smaller height clamp */
    overflow: visible;
  }

  .hero-svg text { 
    font-family: var(--heading-font, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto);
    font-weight: 500;
    line-height: 1;
    font-size: clamp(4rem, 3.2vw, 2.25rem);
  }

  /* DDG/WebKit dup-glyph guards */
  .hero-svg .svg-heading {
    font-family: var(--heading-font);
    font-weight: 400;
    line-height: 1;
    font-size: clamp(3rem, 6vw, 5rem);
    letter-spacing: 0;
    font-kerning: none;
    font-variant-ligatures: none;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* WebKit nudge to prevent overlap */
  @supports (-webkit-touch-callout: none) {
    .hero-svg .svg-heading { letter-spacing: 0.01px; }
  }

  .subtitle-svg {
    display: block;
    width: min(86vw, 720px);
    height: clamp(90px, 8vw, 140px);
    overflow: visible;
  }

  .subtitle-svg text {
    font-family: var(--heading-font, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto);
    font-weight: 300;
    line-height: 1;
    font-size: clamp(1.4rem, 2.75vw, 2.25rem);
  }

  .intro-image { border: none !important; box-shadow: none; }
  .member-statement { letter-spacing: 0.08em; font-weight: 600; }
  .obafemi-logo { max-width: 260px; width: 60%; }
</style>
