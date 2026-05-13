<script setup lang="ts">
import Programsform from '../components/Programsform.vue';
import Dragonsprogram from '../components/Dragonsprogram.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Kids Martial Arts (Ages 5–9) | Catskill MAA',
  meta: [
    { name: 'description', content: 'Little Dragons program for kids ages 5–9 in Sullivan County. Build confidence, focus, and discipline through Tang Soo Do at Catskill Martial Arts Academy.' }
  ]
});
</script>

<template>
    <div>
        <Programsform title="Kids Martial Arts in Sullivan County" />
        <Dragonsprogram />
    </div>
</template>

<style scoped>

</style>