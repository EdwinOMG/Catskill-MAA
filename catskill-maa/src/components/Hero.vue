<script setup lang="ts">
</script>

<template>
  <section class="hero" aria-label="Hero banner">
    <div class="hero-body-wrapper">
      <div class="background-image" role="img" aria-label="Students training in dojo"></div>
      <div class="shader-overlay" aria-hidden="true"></div>
      <div class="hero-content">
        <h1 class="title is-2">Proudly Representing the Catskills since 19XX</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; height: 360px; margin-top: 120px; }

.background-image { background-image: url('/hero/image1.jpg'); background-size: cover; background-position: center; position:absolute; inset:0; z-index:1; }

.shader-overlay { position:absolute; inset:0; background: rgba(0,0,0,0.4); z-index:2; }

.hero-content { position:relative; z-index:3; display:flex; align-items:center; justify-content:center; height:100%; color:white; text-align:center; padding: 0 1rem; }

.title { font-size: clamp(1.6rem, 3.2vw, 2.6rem); }
</style>