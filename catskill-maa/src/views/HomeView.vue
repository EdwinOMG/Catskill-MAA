<script setup lang="ts">
import Homebox from '@/components/Homebox.vue'
import Splideshow from '@/components/Splideshow.vue';
import Map from '@/components/Map.vue'
import Contact from '@/components/Contactform.vue'
import Reviews from '@/components/Reviews.vue';
import Popmodal from '@/components/Popmodal.vue';
import { onMounted, ref  } from 'vue';

const showModal = ref(false);

  onMounted(() => {
    setTimeout(() => {
      showModal.value = true;
    }, 1500); 
        

  });
  
</script>

<template>
  <Popmodal :show="showModal" @close="showModal = false" />
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

</style>
