<template>
<head>
  <title>About Us</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
</head>
    <div class="container d-flex flex-column">
      <div class="about-svg-container">
        <svg viewBox="0 0 30 4" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aboutGradient" x1="0%" y1="15%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#BCE32D;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path id="MyPath" fill="none" d="M 0 5 Q 15 -5 30 5" pathLength="2" />
        <text class="headding is-1" font-size="1.5" dominant-baseline="hanging" text-anchor="middle" >
          <textPath href="#MyPath" startOffset="1" fill="url(#aboutGradient)">
            We Are Ile Iwori-Bogbe
          </textPath>
        </text>
      </svg>
      </div>
      <div id="about-section" class="row">
        <div class="col-md-9 about-column">
          <img class="about-img" src="/src/assets/images/ile-pic-1.png" alt="A group of american aborisha are casually dressed, posing for a picture outside on a porch">
          <p class="about-paragraph"> We are a holistic healing institute that provides the necessary tools to positively enhance lives. Our mission is to assist in creating and maintaining wellness, globally and locally, within our respective communities. We strive to provide renewed vitality and optimum quality of life through traditional African-centered sciences and other alternative healing disciplines.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
   name:'AboutView',
   components: {},
}
</script>