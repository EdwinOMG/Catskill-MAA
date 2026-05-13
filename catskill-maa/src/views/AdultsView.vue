<script setup lang="ts">
import Programsform from '../components/Programsform.vue';
import Adultprogram from '@/components/Adultprogram.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Adult Martial Arts Program | Catskill MAA',
  meta: [
    { name: 'description', content: 'Adult Tang Soo Do classes in Sullivan County, NY. Improve fitness, focus, and self-defense skills at Catskill Martial Arts Academy. All experience levels welcome.' }
  ]
});
</script>

<template>
    <div>
        <Programsform title="Adult Martial Arts in Sullivan County" />
        <Adultprogram />
    </div>
</template>

<style scoped>

</style>