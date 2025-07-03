<script setup lang="ts">
import Teamcards from '@/components/Teamcards.vue';
import Hero from '@/components/Hero.vue';
import Aboutbox from '@/components/Aboutbox.vue';
</script>

<template>
  <section>
    <Hero />
  </section>

  <section class="about-section">
    <img src="/logos/logo.png" alt="Logo" class="side-img left-img" />
    
    <Aboutbox />

    <img src="/logos/bisang.png" alt="Bisang" class="side-img right-img" />
  </section>

  <section>
    <Teamcards />
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1rem;
}

.side-img {
  width: 200px;
  height: auto;
}

.left-img {
  margin-right: 1rem;
}

.right-img {
  margin-left: 0.5rem;
}

/* Hide on small screens */
@media (max-width: 768px) {
  .side-img {
    display: none;
  }
}
</style>