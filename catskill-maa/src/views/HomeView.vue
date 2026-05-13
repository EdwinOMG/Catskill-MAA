<script setup lang="ts">
import Homebox from '@/components/Homebox.vue'
import Splideshow from '@/components/Splideshow.vue';
import Map from '@/components/Map.vue'
import Contact from '@/components/Contactform.vue'
import Reviews from '@/components/Reviews.vue';
import Popmodal from '@/components/Popmodal.vue';
import { onMounted, ref  } from 'vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Catskill Martial Arts Academy | Tang Soo Do | Loch Sheldrake, NY',
  meta: [
    { name: 'description', content: 'Kids, teen & adult Tang Soo Do classes in the Catskills since 2009. Build confidence, discipline, and fitness. Try a free class today.' }
  ]
});

const showModal = ref(false);

  onMounted(() => {
    setTimeout(() => {
      showModal.value = true;
    }, 15000);
        

  });
  
</script>

<template>
  <Popmodal :show="showModal" @close="showModal = false" />
  <section class="hero-cta">
    <h1 class="hero-title">Martial Arts for the Whole Family</h1>
    <p class="hero-sub">Kids · Teens · Adults · Loch Sheldrake, NY</p>
    <button class="hero-button" @click="showModal = true">Book a Free Trial Class</button>
  </section>
  <section>
    <Splideshow />
  </section>
  <section>
      <Homebox />
  </section>
  <section>
    <Reviews />
  </section>
  <section id="contact">
    <Contact />
  </section>
  <section>
    <Map />
  </section>
  
</template>

<style scoped>
.hero-cta {
  padding-top: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: transparent;
}

.hero-title {
  font-size: 2rem;
  font-weight: 900;
  color: black;
  text-shadow: none;
  text-align: center;
  margin: 0;
}

.hero-sub {
  font-size: 1rem;
  color: black;
  text-shadow: none;
  letter-spacing: 0.05em;
  margin: 0;
}

.hero-button {
  margin-top: 0.4rem;
  background-color: darkblue;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.65rem 1.75rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.hero-button:hover {
  background-color: white;
  color: darkblue;
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 1.3rem;
  }
  .hero-sub {
    font-size: 0.85rem;
  }
  .hero-button {
    font-size: 0.9rem;
    padding: 0.5rem 1.25rem;
  }
}
</style>
