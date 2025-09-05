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
    name: 'Melia Giuffo',
    text: 'My son has grown so much confidence and focus thanks to Master Belsito. He is great with kids from all age groups and has taught my son so much! Highly recommend.',
    date: '2024-06-11',
    stars: '/logos/stars.webp',
  },
  {
    logo: '/logos/facebook.webp',
    name: 'Margarita Morales',
    text: 'My son first joined when he began at 8 yrs old and he is almost 21 now. He is now a master at the academy. This school has taught him discipline, confidence, and determination. Master Belsito has been an excellent instructor to my son over the years. I highly recommend the Catskill Martial Arts Academy to anyone seeking quality in martial arts!',
    date: '2024-01-12',
    stars: '/logos/stars.webp',
  },
  {
    logo: '/logos/facebook.webp',
    name: '-------',
    text: 'Donald has really helped my daughter build confidence in her self. Each class is fun, engaging, and pushes the kids to be their best. I highly recommend Catskill Martial Arts Academy!',
    date: '2023-10-03',
    stars: '/logos/stars.webp',
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