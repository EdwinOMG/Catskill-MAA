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
      <img
        :src="`/rotation/image${n}.webp?nf_resize=fit&w=800`"
        :srcset="`
          /rotation/image${n}.webp?nf_resize=fit&w=400 400w,
          /rotation/image${n}.webp?nf_resize=fit&w=800 800w,
          /rotation/image${n}.webp?nf_resize=fit&w=1200 1200w
        `"
        sizes="(max-width: 600px) 400px,
               (max-width: 1200px) 800px,
               1200px"
        :alt="`Image ${n}`"
        loading="lazy"
      />
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