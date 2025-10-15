<script setup lang="ts">
</script>

<template>
  <section class="hero" aria-label="Hero banner">
    <div class="hero-body-wrapper">
      <div class="background-image" role="img" aria-label="Students training in dojo"></div>
      <div class="shader-overlay" aria-hidden="true"></div>
      <div class="hero-content">
        <h1 class="title is-2">Proudly Representing the Catskills since 2009</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; height: 400px; margin-top: 150px; }

.hero-body-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}


.background-image {
  position: absolute;
  inset: 0;
  background-image: url('/hero/image1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.shader-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* dark shader */
  z-index: 2;
}
.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  color: white;
}</style>