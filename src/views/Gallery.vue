<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Intro -->
      <h1 data-testid="gallery-title" class="display-6 fw-semibold gradient-title mt-5 mb-3">
        A nifẹ lati pin àwọn àkókò tí ó dára
      </h1>
      <h2 class="h5 text-black mb-4">We love to share good times</h2>

      <!-- Responsive Carousel -->
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div
            id="galleryCarousel"
            class="carousel slide"
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <!-- Slides -->
            <div class="carousel-inner gallery-frame">
              <div
                v-for="(slide, i) in slides"
                :key="i"
                :class="['carousel-item', { active: i === 0 }]"
              >
                <img
                  class="gallery-img"
                  :src="slide.src"
                  :alt="slide.alt"
                  loading="lazy"
                  :tabindex="i === activeIndex ? 0 : -1"
                  :aria-hidden="i !== activeIndex"
                />
              </div>
            </div>

            <!-- Prev / Next -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

            <!-- Indicators -->
            <div class="carousel-indicators">
              <button
                v-for="(slide, i) in slides"
                :key="'ind-' + i"
                type="button"
                data-bs-target="#galleryCarousel"
                :data-bs-slide-to="i"
                :class="{ active: i === 0 }"
                :aria-label="`Slide ${i + 1}`"
                :aria-current="i === activeIndex ? 'true' : undefined"
              ></button>
            </div>
          </div>

          <!-- Slide count -->
          <div class="row justify-content-center my-3">
            <div class="col-auto">
              <span class="text-muted small">
                Slide {{ activeIndex + 1 }} / {{ slides.length }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useCarouselFocus } from '@/composables/useCarouselFocus'; // keep your focus util

import img10 from '@/assets/images/ancestor-offering.jpeg';
import img9 from '@/assets/images/cookout-crowd4.jpeg';
import img1 from '@/assets/images/gallery/3-women.png';
import img2 from '@/assets/images/gallery/cookout5.png';
import img3 from '@/assets/images/gallery/kim-omi-posing-white.png';
import img7 from '@/assets/images/gallery/making-omieros.png';
import img5 from '@/assets/images/gallery/omi-and-khepra-green.png';
import img4 from '@/assets/images/gallery/omi-fasanmi-green.png';
import img6 from '@/assets/images/gallery/omiero-base.png';
import img8 from '@/assets/images/ile-at-conference.png';

const slides = [
  { src: img1,  alt: 'Three IFA priestesses smiling at sunset.' },
  { src: img2,  alt: 'Aborisha gathered with three IFA priests seated on a mat.' },
  { src: img3,  alt: 'Two priestesses in white posing playfully at an IFA conference.' },
  { src: img4,  alt: 'Priest of Ogun and priestess of Yemoja in green/orange/white attire.' },
  { src: img5,  alt: 'Priest of Shango and priestess of Yemoja at 2022 OIDSI conference.' },
  { src: img6,  alt: 'Omiero ingredients arranged on a mat.' },
  { src: img7,  alt: 'Small group making omieros outdoors, singing and chatting.' },
  { src: img8,  alt: 'Ile Iwori-Bogbe group photo with Chief Obafemi at conference.' },
  { src: img9,  alt: 'Community circle listening to an IFA priest speak.' },
  { src: img10, alt: 'Ancestor offering table with fruit, flowers, candles, and water.' },
]

// Tracks which slide is active so only that slide is focusable
const { activeIndex } = useCarouselFocus('galleryCarousel')
</script>

<style scoped>
:root {
  --gallery-max-h: 320px;
  --gallery-max-w: 600px;
}

h2, .card, .btn {
  font-family: var(--body-font);
}

.gallery-frame {
  border: 2px solid #000080;
  border-radius: .75rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
  background: #fff;
  padding: .5rem;
}

.carousel-item {
  min-height: calc(var(--gallery-max-h) + 1rem);
}

.carousel-item.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-img {
  max-height: var(--gallery-max-h);
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
}

@media (max-width: 576px) {
  :root { --gallery-max-h: 300px; }
}

.carousel-indicators [data-bs-target] {
  background-color: rgba(0, 0, 128, 0.85);
}
</style>