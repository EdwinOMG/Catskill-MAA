<script setup lang="ts">
import Pagegallery from '@/components/Pagegallery.vue';
import Newsfeed from '@/components/Newsfeed.vue';
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <!-- Pagegallery -->
        <div class="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
          <Pagegallery />
        </div>

        <!-- Newsfeed -->
        <div class="column is-full-mobile is-two-thirds-tablet is-three-quarters-desktop newsfeed-column">
          <Newsfeed />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bottom spacing for all columns */
.column {
  margin-bottom: 1rem;
}

/* Add extra spacing on top of the Newsfeed column */
.newsfeed-column {
  margin-top: 2rem; /* adjust as needed */
  padding-left: 50px;
}

/* Optional: smaller top margin on desktop if you want */
@media screen and (min-width: 1024px) {
  .newsfeed-column {
    margin-top: 110px; /* adjust as needed */
    
  }
}
</style>