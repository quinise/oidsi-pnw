<template>
  <head>
    <title>Events</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
  </head>
  <div class="container d-flex flex-column">
    <h1 class="intro">Seattle O.I.D.S.I. Events Calendar</h1>
    <dash />
    <div class="calendar row"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=M2Q0NTBkZjc1ZmJlNDk5Y2ZlZTJiMWFkYWRhMWM5YTNjZTdlZTc2MmUwZTliMTZlYWZmMmQ0OGE0MDYyODJhYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
  </div>
</template>

<script>
import dash from '/src/components/partials/dash.vue'

export default {
   name:'EventsView',
   components: {
    dash,
   },
}
</script>