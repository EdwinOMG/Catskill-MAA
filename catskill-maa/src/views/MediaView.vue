<script setup lang="ts">
import Pagegallery from '@/components/Pagegallery.vue';
import Newsfeed from '@/components/Newsfeed.vue';
</script>

<template>
  <section class="section">
    <div class="container">
     <div class="columns is-multiline">
        <!-- Facebook Page Plugin -->
        <div class="column is-full-mobile is-half-tablet is-3  ">
          <Pagegallery />
        </div>

        <!-- Newsfeed -->
        <div class="column is-full-mobile is-half-tablet is-9">
          <Newsfeed />
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.feed {
    
}
.gallery {
    margin-top: 80px;
    
}
</style>