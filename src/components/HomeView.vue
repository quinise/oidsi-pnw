<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/home.css"/>
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/global.css"/>
  </head>
    <div class="container col">
      <div class="headers row">
        <div class="main-title row">
          <svg viewBox="0 0 30 2.85" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="homeGradient" x1="0%" y1="15%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#BCE32D;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path id="MyPath" fill="none" d="M 0 6 Q 14 -5 30 5" pathLength="2" />
            <text class="headding is-4" font-size="2" dominant-baseline="hanging" text-anchor="middle">
              <textPath href="#MyPath" startOffset="1" fill="url(#homeGradient)">
                Ile Iwori-Bogbe
              </textPath>
            </text>
          </svg>
        </div>
        <div class="subtitle row">
          <svg viewBox="0 0 30 2" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M 0 5 Q 15 -5 30 5" pathLength="2" />
            <text class="title is-4" font-size="1" dominant-baseline="hanging" text-anchor="middle">
              <textPath href="#MyPath" startOffset="1">
                Seattle, Washington
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 intro-image-container">
          <img class="img-fluid" src="/src/assets/images/introduction.png" alt="A group of american aborisha and IFA priest women all dressed in white pose for a picture in a classroom at AfricaTown">
        </div>
      </div>
      <div class="spacer"></div>
      <div class="row">
        <p class="member-statement">Proud Member of</p>
        <a href="https://www.obafemi.org"><img id="obafemi-institute-logo-img" src="/src/assets/images/logo.png" alt="The Obafemi Institute For The Divine and Universal Study Of IFA." aria-label="Link to O.I.D.S.I. website"></a>
      </div>
    </div>
    </html>
  </template>

<script>
export default {
   name:'HomeView',
   components: {},
}
</script>