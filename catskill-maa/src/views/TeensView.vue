<script setup lang="ts">
import Programsform from '../components/Programsform.vue';
import Teenprogram from '@/components/Teenprogram.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Teen Martial Arts Program | Catskill MAA',
  meta: [
    { name: 'description', content: 'Teen Tang Soo Do classes in the Catskills for middle and high school students. Build strength, discipline, and confidence at Catskill Martial Arts Academy.' }
  ]
});
</script>

<template>
    <div>
        <Programsform title="Teen Martial Arts in Sullivan County" />
        <Teenprogram />
    </div>
</template>

<style scoped>

</style>