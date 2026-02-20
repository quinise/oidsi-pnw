<template>
  <section class="bg-light py-5">
    <div class="container text-center">

      <!-- Title -->
      <h1 class="display-6 fw-semibold gradient-title my-5">
        {{ title }}
      </h1>

      <!-- Responsive calendar embed -->
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="ratio" style="--bs-aspect-ratio: 75%;">
            <iframe
              class="rounded-3 border border-2 border-primary shadow-sm"
              title="OIDSI-PNW Google Calendar (Seattle)"
              aria-label="OIDSI-PNW Google Calendar (Seattle)"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :src="iframeSrc"
              :data-calendar-src="calendarSrc"
            ></iframe>
          </div>
          <!--  Caption for screen readers / context -->
          <p class="text-secondary mt-2 mb-0">
            {{ timeZoneInfo }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'EventsComponent',
  data() {
    const calendarSrc = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=M2Q0NTBkZjc1ZmJlNDk5Y2ZlZTJiMWFkYWRhMWM5YTNjZTdlZTc2MmUwZTliMTZlYWZmMmQ0OGE0MDYyODJhYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33'
    const isTestEnv = import.meta.env.MODE === 'test' || import.meta.env.VITEST

    return {
      title: 'Seattle O.I.D.S.I. Events Calendar',
      timeZoneInfo: 'Times shown in Pacific Time (America/Los_Angeles)',
      calendarSrc,
      iframeSrc: isTestEnv ? null : calendarSrc,
    };
  }
};
</script>

<style scoped>
  /* Slightly taller on larger screens while staying responsive */
  @media (min-width: 992px) {
    .ratio {
      --bs-aspect-ratio: 66%; /* closer to 3:2 for more vertical space on desktop */
    }
  }

  h1 {
    font-family: var(--heading-font);
  }
</style>