<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
  type: 'loop',
  perPage: 3,
  gap: '1rem',
  autoplay: true,
  pauseOnHover: true,
};
</script>

<template>
  <Splide :options="options" aria-label="Vue Splide Carousel">
    <SplideSlide v-for="n in 4" :key="n">
      <img :src="`/image${n}.jpg`" :alt="`Image ${n}`" />
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss">
@use '../../catskill-maa.scss' as *;
.splide {
  padding-top: 120px;
  width: auto;
}
img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>