<script setup lang="ts">
import Pagegallery from '@/components/Pagegallery.vue';
import Newsfeed from '@/components/Newsfeed.vue';
</script>

<template>
  <section class="section">
    <div class="container">
     <div class="columns is-multiline">
        <!-- Facebook Page Plugin -->
        <div class="column is-3">
          <Pagegallery />
        </div>

        <!-- Newsfeed -->
        <div class="column is-9 ">
          <Newsfeed />
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>


</style>