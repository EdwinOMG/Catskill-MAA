
<script setup lang="ts">
import { ref } from 'vue';

interface NewsItem {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const upcomingCount = 0; //use this for upcoming events

const newsItems = ref<NewsItem[]>([
  {
    title: 'CMAA annual yard sale a huge success!',
    description: 'CMAA hosted its annual yard sale this past memorial day weekend, fundraising for their upcoming tournaments.Thank you to everyone who donated items and to all the volunteers who helped out',
    image: '/media/image14.webp',
    imagePosition: 'left',
  },
  {
    title: 'First vegetables and flowers planted at the new CMAA community garden',
    description: 'The academy is excited to announce the first plants and flowers have been planted at the new community garden!',
    image: '/media/image12.webp',
    imagePosition: 'left',
  },
    {
    title: 'Parents Night Out was a blast!',
    description: 'Parents Night Out went great! All the kids enjoyed a night of games, snacks, and the newest Sonic movie.',
    image: '/media/image13.webp',
    imagePosition: 'left',
  },
    {
    title: 'Congratulations to our beginner teenagers who tested today!',
    description: 'Our beginner teenagers did an amazing job testing today. They showed great focus and determination, and we are so proud of their progress.',
    image: '/media/image3.webp',
    imagePosition: 'left',
  },
    {
    title: 'Congratulations to our intermediate class who tested today!',
    description: 'Round of applause for all of our intermediate students who were promoted! Their dedication and hard work have truly paid off.',
    image: '/media/image2.webp',
    imagePosition: 'left',
  },
    {
    title: 'Students took home medals at the New Britain TSD Tournament!',
    description: 'Amazing job to all of our students who competed at todays tournament!',
    image: '/media/image6.webp',
    imagePosition: 'left',
  },
    {
    title: 'Congrats to our new black belts and master belts who tested today!',
    description: 'We are so proud of our students who tested for black belt(Anaiah and Maggie) and master belt(Edwin Morales, John Hill, and Craig Hazelnis) today. Thank you to the grandmasters and masters who came to support our graduates.',
    image: '/media/image1.webp',
    imagePosition: 'left',
  },
    {
    title: 'CMAA represented extremely well at the Trinity Invitational TSD Tournament!',
    description: 'Round of applause for all of our students who competed at the Trinity Invitational TSD Tournament! We are so proud of you all!',
    image: '/media/image7.webp',
    imagePosition: 'left',
  },
   {
    title: 'Marched in the 2025 Jeffersonville Parade!',
    description: 'Great job to all of our students who participated and marched in the parade!',
    image: '/media/image8.webp',
    imagePosition: 'left',
  },
  {
    title: 'Maggie and Mr.Morales proudly represents CMAA and the 2025 Cowabunga Classic',
    description: 'Maggie and Mr.Morales proudly represented CMAA at the 2025 Cowabunga Classic! They both did amazing jobs in their divisions.',
    image: '/media/image10.webp',
    imagePosition: 'left',
  },
  {
    title: 'Students particpated in the community Pokemon Club.',
    description: 'Everyone had a great time at the local Pokemon Club hosted by an academy black belt!',
    image: '/media/image11.webp',
    imagePosition: 'left',
  },
]);
</script>

<template>
  <aside class="box" aria-labelledby="newsTitle" role="complementary">
    <h2 id="newsTitle" class="section-title">Upcoming Events</h2>
    <ul class="news-list">
      <li v-for="(item, index) in newsItems" :key="index" class="news-item">
        <article class="media" role="article" aria-label="News item">
          <img class="news-image" :src="item.image" :alt="item.title" width="160" height="90" loading="lazy"/>
          <div class="media-content">
            <h3><strong>{{ item.title }}</strong></h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.news-list { list-style: none; padding: 0; margin: 0; }
.news-item { padding: 0.5rem 0; display:flex; }
.news-image { margin-right: 0.75rem; object-fit:cover; width:128px; height:72px; border-radius:6px; }
@media (max-width: 540px) {
  .news-image { width:100px; height:56px; }
}
</style>