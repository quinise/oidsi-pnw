<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title>Services</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gudea&family=Hammersmith+One&display=swap">
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/services.css" />
    <link rel="stylesheet" type="text/css" href="/src/stylesheets/global.css" />
  </head>
  <div class="container d-flex flex-column">
    <svg viewBox="0 0 30 2.85" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="servicesGradient" x1="0%" y1="15%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#000080;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#BCE32D;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path id="MyPath" fill="none" d="M 0 6 Q 14 -5 30 5" pathLength="2" />
      <text class="heading is-4" font-size="1.5" dominant-baseline="hanging" text-anchor="middle">
        <textPath href="#MyPath" startOffset="1" fill="url(#servicesGradient)">
          Services
        </textPath>
      </text>
    </svg>
    <div id="cards">
      <img class="offering-img" src="/src/assets/images/yemoja-offering.png" alt="An IFA offering to Yemoja presented at Alki Beach. A cornucopia of fruits including whole and cut watermelon, bunches of ripe banannas, cut pineapple rounds, strawberries, and colorful bouquets all displayed on a turquoise cloth."/>
      <div class="row justify-content-center contact-header">
        <h2>Please <RouterLink to="/contact" aria-label="Link to contact page">message</RouterLink> us with questions or to schedule</h2>
      </div><br>
      <ul class="service-list">
        <li>Ifa Readings<span class="ifa-readings" aria-label="Description for Ifa Reading services">A spiritual energy diagnostic reading facilitated and interpreted by one or more initiated and trained priests of Ifa (Iyanifa or Babalawo). To inform and guide your experiences through the consistent shifts and changes of life. Readings  can be general or specific to an opportunity, business, relationship, etc. to support, healing, growth, maturation, awareness and transformation.</span></li>
        <li>Orisha Readings<span class="orisha-readings" aria-label="Description for Orisha Reading services">A spiritual energy diagnostic reading  facilitated and interpreted by one or more initiated and trained Orisha priests ( Iyalorisha/Babalorisha)  i.e. - Obatala, Yemaya, Ogun, Osun, Sango etc. using the tool of merindilogun (16 shells). Used to guide and inform you in finding balance within areas of your life experience. To support healing, growth, maturation, awareness and transformation.</span></li>
        <li>Esentaye (<i>Naming Ceremony</i>)<span class="esentaye" aria-label="Description for Esentaye services">This is a ceremony (often private) to support parents in identifying the energy that a child comes to this life with, as well as spiritual wisdom around how to guide their development in the direction of their life’s purpose. This also includes a sacred naming ceremony. This ritual is typically done when the child is an infant but can be done at any stage from birth to adolescence.</span></li>
        <li>Spiritual Baths & Soaps <span class="baths-soaps" aria-label="Description for Spiritual Baths and Soapmaking services">This is the text that goes with the baths and soaps. It is a short paragraph long. The text is black and has a solid, blue border. HTML/CSS is fun!</span></li>
        <li>House Cleaning<span class="cleaning" aria-label="Description for House Cleanings services">This ritual is used as a way to clear your house and/or apartment spiritually and energetically. Spiritual house cleansings can be done in a space you are about to move into or one that you have been residing in for years. These help to bless and clear the space, bring in mental and spiritual clarity,  and remove or shift negative energy of the people living in the residence.</span></li>
        <li>Spiritual Rite and Initiation Rituals<span class="rites" aria-label="Description for Rites services">Rights of passage and initiatory ceremonies that support, guide, and align you with the traditional culture, lifestyle, practice and spiritual science of Ifa, ancestral veneration and Orisha acknowledgement, toward purpose driven personal, familial, communal, knowledge and healing. </span></li>
        <li>Community Classes and Workshops (<i>for youth and adults</i>)<span class="community" aria-label="Description for classes and workshops">This is the text that goes with the Community services. It is a short paragraph long. The text is black and has a solid, blue border. HTML/CSS is fun!</span></li><br>
      </ul>
    </div>
    <div class="row">
    </div>
  </div>
  </html>
</template>

<script>
export default {
   name:'ServicesView',
   components: {},
}
</script>