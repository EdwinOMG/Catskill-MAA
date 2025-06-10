<!-- TestimonialCarousel.vue -->
<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';

interface Testimonial {
  logo: string;
  name: string;
  text: string;
  date: string;
  stars: string;
}

const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: true,
};

const reviews: Testimonial[] = [
  {
    logo: '/logos/facebook.webp',
    name: 'Meep moop',
    text: 'lolabore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem lorem. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2023-10-01',
    stars: '/logos/stars.png',
  },
  {
    logo: '/logos/facebook.webp',
    name: 'Jane Smith',
    text: 'lolabore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem lorem. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2023-10-02',
    stars: '/logos/stars.png',
  },
  {
    logo: '/logos/facebook.webp',
    name: 'Alice Johnson',
    text: 'lolabore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem lorem. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2023-10-03',
    stars: '/logos/stars.png',
  },
];
</script>

<template>
<div class="title has-text-centered is-1 pt-6    pb-0">Testimonials</div>
<div class="subtitle has-text-centered is-4 mt-1">See what people say about us</div>
<div class="container">
  <Splide :options="options" aria-label="Testimonial Carousel">
    <SplideSlide v-for="(item, index) in reviews" :key="index">
      <div class="review-card">
        <img :src="item.logo" alt="Logo" class="logo" />
        <h3 class="name">{{ item.name }}</h3>
        <img :src="item.stars" alt="Stars" class="stars" />
        <p class="text">{{ item.text }}</p>
        <p class="date">{{ item.date }}</p>
      </div>
    </SplideSlide>
  </Splide>
</div>
</template>

<style scoped>

.container {
  width: 30%;
padding-top: 0px;

}

.review-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  text-align: center;
  border-color: #333;
  border-width: 3px;
  border-style: solid;
}
.logo {
  width: 100px;
  height: 100px;
  padding-bottom: 0px;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0px;
}
.text {
  font-size: 1rem;
  color: #333;
  margin-top: -55px;
  height: 200px;
  width: 90%;
    margin-left: auto;  
    margin-right: auto;
}
.stars {
  width: 150px;
  height: 150px;
  margin-top: -3.5rem;
}
.date {
  font-size: 0.8rem;
  color: gray;
  padding-bottom: 20px;
}

::v-deep(.splide__arrow) {
  background-color: transparent;
  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
    
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
</style>