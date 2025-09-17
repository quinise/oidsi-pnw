<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Curved title -->
      <div class="row justify-content-center my-5">
        <div class="col-12">
          <svg
            class="services-svg d-block mx-auto"
            viewBox="0 0 30 2.85"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Services"
          >
            <defs>
              <linearGradient id="servicesGradient" x1="0%" y1="15%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path id="servicesTitlePath" fill="none" d="M 0 6 Q 14 -5 30 5" pathLength="2" />
            <text font-size="2.75" dominant-baseline="hanging" text-anchor="middle">
              <textPath href="#servicesTitlePath" startOffset="1" fill="url(#servicesGradient)">
                Services
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <!-- Hero image -->
      <div class="row justify-content-center mt-4">
        <div class="col-12">
          <img
            class="img-fluid d-block mx-auto offering-img rounded-3"
            :src="offeringImg"
            alt="An Ifa offering to Yemoja at Alki Beach: melons, bananas, pineapple rounds, strawberries, and bouquets on a turquoise cloth."
          />
        </div>
      </div>

      <!-- Contact prompt -->
      <div class="row justify-content-center mt-4">
        <div class="col-auto text-center">
          <h2 id="contact-cta-heading" class="h4 fw-semibold mb-3 gradient-title">
            Questions or ready to schedule?
          </h2>

          <RouterLink
            id="contact-cta-link"
            to="/contact"
            class="btn btn-success fw-semibold btn-contrast"
            aria-labelledby="contact-cta-link contact-cta-heading"
            aria-describedby="contact-cta-help"
          >
            Message us
          </RouterLink>

          <!-- Context for screen readers -->
          <p id="contact-cta-help" class="sr-only">
            Navigates to the Contact page where you can send a message.
          </p>
        </div>
      </div>

      <!-- Services list -->
      <div class="row justify-content-center mt-5 text-start">
        <div class="col-md-10 col-lg-9">
          <ul class="list-group shadow-sm">
            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Ifa Readings</h3>
              <p class="mb-0">
                A spiritual energy diagnostic reading facilitated and interpreted by one or more initiated
                and trained priests of Ifa (Iyanifa or Babalawo). Readings can be general or focused on an
                opportunity, business, relationship, etc., to support healing, growth, maturation, awareness,
                and transformation.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Orisha Readings</h3>
              <p class="mb-0">
                A spiritual energy diagnostic reading facilitated and interpreted by initiated Orisha priests
                (Iyalorisha/Babalorisha)—e.g., Obatala, Yemaya, Ogun, Osun, Sango—using merindilogun
                (16 shells). Helps you find balance and clarity across areas of life.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Esentaye <span class="fst-italic">(Naming Ceremony)</span></h3>
              <p class="mb-0">
                A ceremony (often private) to identify the energy a child brings into this life and to provide
                spiritual wisdom for guiding their development toward life’s purpose. Typically performed in
                infancy but can be done anytime from birth through adolescence.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Spiritual Baths &amp; Soaps</h3>
              <p class="mb-0">
                Custom preparations intended to cleanse, fortify, and align your energy. Formulations and
                guidance are tailored to your needs and circumstances.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">House Cleaning</h3>
              <p class="mb-0">
                A spiritual and energetic cleansing of your home or apartment—ideal before moving in or to
                refresh a longstanding space. Blesses and clears the environment, supports clarity, and shifts
                stagnant or negative energy.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Spiritual Rites &amp; Initiation Rituals</h3>
              <p class="mb-0">
                Rites of passage and initiatory ceremonies that guide and align you with the traditional
                culture, practice, and spiritual science of Ifa, ancestral veneration, and Orisha acknowledgement—
                supporting purpose-driven personal, familial, and communal growth.
              </p>
            </li>

            <li class="list-group-item py-4">
              <h3 class="h5 mb-2">Community Classes &amp; Workshops <span class="fst-italic">(youth &amp; adults)</span></h3>
              <p class="mb-0">
                Educational offerings that share foundational knowledge, practices, and cultural context to
                support community wellness, learning, and connection.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
  import offeringImg from '@/assets/images/yemoja-offering.png'
</script>

<style scoped>
  .services-svg {
    max-width: 720px;
    height: auto;
  }

  .offering-img {
    border: none !important;
    box-shadow: none;
    max-width: 280px; /* smaller than before */
    width: 100%;
    height: auto;
  }

  .services-svg text,
  h2, h3 {
    font-family: var(--heading-font);
  }
  
  .list-group-item p {
    font-family: var(--body-font);
    line-height: 1.6;
  }

  .list-group-item {
    border-left: 4px solid rgba(0, 0, 128, 0.35); /* semi-transparent navy */
  }
</style>