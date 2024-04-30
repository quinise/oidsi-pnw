<template>
<!DOCTYPE html>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="/src/assets/images/ib-logo.png" width="30" height="30" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about" aria-label="About link">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/events" aria-label="Events link">Events</RouterLink>
        </li>
        <li class="nav-item"> 
          <RouterLink class="nav-link" to="/services" aria-label="Services link">Services</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact" aria-label="Contact link">Contact Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/gallery" aria-label="Gallery link">Gallery</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>