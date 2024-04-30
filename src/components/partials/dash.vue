<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
  <link rel="stylesheet" type="text/css" href="/src/stylesheets/home.css"/>
  <link rel="stylesheet" type="text/css" href="/src/stylesheets/global.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
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
    </html>
</template>