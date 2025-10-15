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
        <div
          class="column is-full-mobile is-full-tablet is-half-desktop is-offset-one-quarter-desktop newsfeed-column"
        >
          <Newsfeed />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Margin bottom to add spacing between stacked columns on mobile/tablet */
.column {
  margin-bottom: 1.5rem;
}

/* Extra top margin for Newsfeed on desktop */
.newsfeed-column {
  margin-top: 2rem;
}

@media screen and (min-width: 1024px) {
  .newsfeed-column {
    margin-top: 6rem; /* Adjust for desktop vertical spacing */
  }
}
</style>
