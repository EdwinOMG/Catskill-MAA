<!-- ImageCarousel.vue -->
<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
  type: 'loop',
  autoplay: true,
  pauseOnHover: true,
  gap: '1rem',
  perPage: 3,
  autoHeight: true,
  breakpoints: {
    1024: { perPage: 2 },
    640: { perPage: 1 },
  },
};
</script>

<template>
  <Splide :options="options" aria-label="Image Carousel">
    <SplideSlide v-for="n in 8" :key="n">
      <img :src="`/rotation/image${n}.webp`" :alt="`Image ${n}`" />
    </SplideSlide>
  </Splide>
  
</template>

<style scoped>

::v-deep(.splide__arrow) {
  background-color: white;
  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 75px;
    
}

::v-deep(.splide__arrow:hover) {
  color: white;
  fill: white;
}

::v-deep(.splide__arrow svg) {
  width: 30px;
  height: 30px;
  fill: black;
}

.splide {
  padding-top: 180px;
  width: auto;
}
img {
  width: 100%;
  height: 350px; 
  object-fit: cover;
  border-radius: 25px;
  border: 3px solid black;
}


</style>