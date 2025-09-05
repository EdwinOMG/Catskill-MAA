
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
  <div class="box">
    <aside class="menu newsfeed">
      <h3 class="section-title">Upcoming Events</h3>

      <div v-for="(item, index) in newsItems" :key="index">
        <div v-if="index === upcomingCount" class="section-divider">
          <h3 class="section-title">Past Events</h3>
        </div>

        <div class="media mb-4">
          <figure :class="['media-' + item.imagePosition, 'news-image-container']">
            <img
              :src="item.image"
              :srcset="`
                ${item.image} 300w,
                ${item.image} 600w,
                ${item.image} 900w
              `"
              sizes="(max-width: 480px) 300px,
                     (max-width: 768px) 600px,
                     900px"
              alt="News image"
              class="news-image"
              loading="lazy"
            />
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ item.title }}</strong><br />
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.news-image-container {
  width: 128px;
  height: 128px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.news-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.menu {
  width: 100%;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.box {
  margin-top: 130px;
  width: 100%;
  margin-right: 20px;
}

.section-divider {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #ccc;
}

.section-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>