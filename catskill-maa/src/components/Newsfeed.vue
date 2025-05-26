
<script setup lang="ts">
import { ref } from 'vue';

interface NewsItem {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const newsItems = ref<NewsItem[]>([
  {
    title: 'CMAA Team competes at',
    description: 'CMAA competed at blah blah blah. Everyone came home with medals, Rankings:',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
  {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
    {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
   {
    title: 'Beginner Testing a HUGE Success',
    description: 'Round of applause for everyone who tested today!',
    image: 'https://via.placeholder.com/64',
    imagePosition: 'left',
  },
]);
</script>

<template>
<div class="box">
  <aside class="menu newsfeed">
    <div v-for="(item, index) in newsItems" :key="index" class="media mb-4">
      <figure
        :class="['media-' + (item.imagePosition === 'left' ? 'left' : 'right')]"
      >
        <p class="image is-64x64">
          <img :src="item.image" alt="News image" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.title }}</strong>
            <br />
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </aside>
</div>
</template>

<style scoped>
.menu {
  width: 100%;
  max-width: 100%; 
  max-height: 90vh;
  overflow-y: auto;
  
} 
.box {
    margin-top: 130px;
    width: 80%;
    padding-right: 0px;
}



</style>