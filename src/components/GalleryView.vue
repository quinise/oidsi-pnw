<template>
  <head>
    <title>Gallery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
  </head>
  <div class="wrapper col">
    <div class="intro row">
      <h1 class="justify-content-center">A nifẹ lati pin awọn akoko ti o dara</h1>
      <h2>We love to share good times</h2>
    </div>
    <dash />
    <div class="slideshow row">
      <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/src/assets/images/gallery/3-women.png" class="d-block w-100" alt="Three female IFA priestesses smiling and posing for a picture in the setting sun">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/cookout5.png" class="d-block w-100" alt="A large group of Aborisha sit with three IFA priests who sit on a mat in attention and prayer">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/kim-omi-posing-white.png" class="d-block w-100" alt="Two Ile Iwore-Bogbe priestesses strike poses and make cheeky faces, wearing long all-white traditionally African clothing at the an IFA conference">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/omi-fasanmi-green.png" class="d-block w-100" alt="An IFA priest of Ogun and and an IFA priestess of Yemoja, wearing matching green, orange, and white traditionally African clothing, pose in-front of a step-and-repeat backdrop of the O.I.D.S.I. logo at the 2022 Biennial O.I.D.S.I. Conference">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/omi-and-khepra-green.png" class="d-block w-100" alt="An IFA priest of Shango and an IFA priestess of Yemoja, wearing matching green, orange, and white traditionally African clothing, pose in-front of a step-and-repeat backdrop of the O.I.D.S.I. logo at the 2022 Biennial O.I.D.S.I. Conference">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/omiero-base.png" class="d-block w-100" alt="The ingredients for an omiero, red and white flowers, herbs, and powders, are layed out in a row on a tan mat laid atop a larger green IFA priest's mat">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/gallery/making-omieros.png" class="d-block w-100" alt="A small group of Aborisha sit on over-turned buckets, singing and chatting while making omieros in the late afternoon sun">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/ile-at-conference.png" class="d-block w-100" alt="Ile Iwore-Bogbe aborisha and priests, in matching green, orange, and white traditional African clothes, all smiling and posing for a photo at the anual 2022 biennial IFA conference with Chief Olowo Obafemi Feyemi against a step-and-repeat backdrop of the O.I.D.S.I. logo">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/cookout-crowd4.jpeg" class="d-block w-100" alt="Aborisha, priests and and guests from other Iles sit and stand gathered to celebrate their ancestors in a circle listening to an IFA priest speak">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/images/ancestor-offering.jpeg" class="d-block w-100" alt="A table covered in a white cloth with a blue and orange strip down the middle; and in an IFA offering of bananas, oranges, flowers, kola nuts, plantains, durian, candles, boquets of daisies, roses, and other flowers, a money tree, money, smooth stones and water to the ancestors">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import dash from '/src/components/partials/dash.vue'

export default {
   name:'GalleryView',
   components: {
    dash,
   },
}
</script>