<script setup lang="ts">
import UpcomingEvents from '@/components/Newsfeed.vue';
import Pagegallery from '@/components/Pagegallery.vue';
</script>

<template>
  <div class="media-page">
    <!-- Full-width Upcoming Events Hero -->
    <UpcomingEvents />

    <!-- Facebook Section -->
    <section class="facebook-section">
      <div class="container">
        <div class="facebook-header">
          <h2 class="title is-2">
            <span class="icon">
              <i class="fab fa-facebook"></i>
            </span>
            Follow Us on Facebook
          </h2>
          <p class="subtitle is-5">Stay connected with our latest updates and events</p>
        </div>
        
        <div class="facebook-container">
          <Pagegallery />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===========================
   MEDIA PAGE LAYOUT
=========================== */
.media-page {
  position: relative;
  min-height: 100vh;
}

/* ===========================
   FACEBOOK SECTION
=========================== */
.facebook-section {
  padding: 3rem 1.5rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  
}

.facebook-header {
  text-align: center;
  margin-bottom: 1.2rem;
  
}

.facebook-header .title {
  color: #1877f2;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.facebook-header .title .icon {
  font-size: 2.5rem;
}

.facebook-header .subtitle {
  color: #666;
}

.facebook-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

.facebook-container :deep(.box) {
  margin-top: 0;
  width: 100%;
  max-width: 500px;
}

/* ===========================
   RESPONSIVE
=========================== */
@media screen and (max-width: 768px) {
  .facebook-section {
    padding: 2rem 1rem;
  }

  .facebook-header {
    margin-bottom: 2rem;
  }

  .facebook-header .title {
    font-size: 1.5rem;
  }

  .facebook-header .title .icon {
    font-size: 2rem;
  }
}
</style>