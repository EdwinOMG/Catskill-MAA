<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Homebox from '../components/Homebox.vue'
import Splideshow from '../components/Splideshow.vue';
import Map from '../components/Map.vue'
import Cards from '../components/Cards.vue'
import Contact from '../components/Contactform.vue'
</script>

<template>
  <section>
      <Splideshow />
  </section>
  <section>
      <Homebox />
  </section>
  <section>
    <Cards />
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
