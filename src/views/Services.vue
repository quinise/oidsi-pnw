<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Title -->
      <h1 class="display-6 fw-semibold gradient-title mt-5">
        {{ title }}
      </h1>

      <!-- Offering image -->
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

      <!-- Services list (renders as accordion on mobile) -->
      <div class="row justify-content-center mt-5 text-start">
        <div class="col-md-10 col-lg-9">
          <ul class="list-group shadow-sm">
            <li
              v-for="(item, i) in services"
              :key="i"
              class="list-group-item py-4"
            >
              <div class="d-flex justify-content-between align-items-start">
                <button
                  class="accordion-toggle btn btn-link p-0 text-start"
                  :id="`service-toggle-${i}`"
                  :aria-expanded="isMobile ? (openIndex === i) : true"
                  :aria-controls="`service-${i}`"
                  @click="toggle(i)"
                  @keydown="onKeydown($event, i)"
                >
                  <h3 class="h5 mb-2" v-html="item.title"></h3>
                </button>
              </div>

              <div
                :id="`service-${i}`"
                class="accordion-content"
                role="region"
                :aria-hidden="!( !isMobile || openIndex === i )"
                :class="{ open: !isMobile || openIndex === i }"
              >
                <p class="mb-0" v-html="item.content"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import offeringImg from '@/assets/images/yemoja-offering.png';

export default {
  name: 'ServicesComponent',
  data() {
    type Service = { title: string; content: string };

    const services: Service[] = [
      {
        title: 'Ifa Readings',
        content:
          'A spiritual energy diagnostic reading facilitated and interpreted by one or more initiated and trained priests of Ifa (Iyanifa or Babalawo). Readings can be general or focused on an opportunity, business, relationship, etc., to support healing, growth, maturation, awareness, and transformation.'
      },
      {
        title: 'Orisha Readings',
        content:
          'A spiritual energy diagnostic reading facilitated and interpreted by initiated Orisha priests (Iyalorisha/Babalorisha)—e.g., Obatala, Yemaya, Ogun, Osun, Sango—using merindilogun (16 shells). Helps you find balance and clarity across areas of life.'
      },
      {
        title: 'Esentaye <span class="fst-italic">(Naming Ceremony)</span>',
        content:
          'A ceremony (often private) to identify the energy a child brings into this life and to provide spiritual wisdom for guiding their development toward life’s purpose. Typically performed in infancy but can be done anytime from birth through adolescence.'
      },
      {
        title: 'Spiritual Baths &amp; Soaps',
        content:
          'Custom preparations intended to cleanse, fortify, and align your energy. Formulations and guidance are tailored to your needs and circumstances.'
      },
      {
        title: 'House Cleaning',
        content:
          'A spiritual and energetic cleansing of your home or apartment—ideal before moving in or to refresh a longstanding space. Blesses and clears the environment, supports clarity, and shifts stagnant or negative energy.'
      },
      {
        title: 'Spiritual Rites &amp; Initiation Rituals',
        content:
          'Rites of passage and initiatory ceremonies that guide and align you with the traditional culture, practice, and spiritual science of Ifa, ancestral veneration, and Orisha acknowledgement—supporting purpose-driven personal, familial, and communal growth.'
      },
      {
        title:
          'Community Classes &amp; Workshops <span class="fst-italic">(youth &amp; adults)</span>',
        content:
          'Educational offerings that share foundational knowledge, practices, and cultural context to support community wellness, learning, and connection.'
      }
    ];

    return {
      title: 'Services',
      offeringImg,
      services,
      openIndex: null as number | null,
      isMobile: false,
      // store MediaQueryList here to add/remove listeners
      mq: null as MediaQueryList | null
    };
  },

  mounted() {
    this.mq = window.matchMedia('(max-width: 767px)');
    this.updateIsMobile();
    if (this.mq) {
      if ((this.mq as any).addEventListener) (this.mq as any).addEventListener('change', this.updateIsMobile);
      else (this.mq as any).addListener(this.updateIsMobile);
    }
  },

  beforeUnmount() {
    if (!this.mq) return;
    if ((this.mq as any).removeEventListener) (this.mq as any).removeEventListener('change', this.updateIsMobile);
    else (this.mq as any).removeListener(this.updateIsMobile);
  },

  methods: {
    updateIsMobile(this: any) {
      if (!this.mq) return;
      this.isMobile = this.mq.matches;
      if (!this.isMobile) {
        this.openIndex = null;
      }
    },

    toggle(this: any, i: number) {
      if (!this.isMobile) return;
      this.openIndex = this.openIndex === i ? null : i;
    },

    onKeydown(this: any, e: KeyboardEvent, i: number) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // space key comes as ' ' string
        this.toggle(i);
      }
    }
  }
};
</script>

<style scoped>
  .offering-img {
    border: none !important;
    box-shadow: none;
    max-width: 280px;
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

  /* Accordion-specific styles */
  .accordion-toggle {
    width: 100%;
    text-align: left;
    color: inherit;
    background: transparent;
    border: none;
    font: inherit;
  }

  .accordion-content {
    overflow: visible;
    max-height: none;
    transition: max-height 0.28s ease;
  }

  /* Mobile: collapse content by default and animate open */
  @media (max-width: 767px) {
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      padding-top: 0;
      padding-bottom: 0;
    }

    .accordion-content.open {
      max-height: 1200px; /* large enough for content */
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .accordion-toggle:focus {
      outline: 3px solid rgba(0, 123, 255, 0.25);
      outline-offset: 2px;
    }
  }
</style>