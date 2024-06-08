<template>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
</head>
  <div class="dash row">
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="gboth">
          <stop offset="0%" stop-color="black"/>
          <stop offset="10%" stop-color="white"/>
          <stop offset="90%" stop-color="white"/>
          <stop offset="100%" stop-color="black"/>
        </linearGradient>
        
        <mask id="mboth">
          <rect width="1" height="1" fill="url(#gboth)"/>
        </mask>
    
        <symbol id="both" viewBox="0 0 1 1" preserveAspectRatio="none">
          <rect width="1" height="1" fill="currentColor" mask="url(#mboth)"/>
        </symbol>
      </defs>
    </svg>
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" class="sep three">
      <use xlink:href="#both"/>
    </svg>
  </div>
</template>