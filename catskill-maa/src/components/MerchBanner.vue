<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  if (!sessionStorage.getItem('merchBannerDismissed')) {
    isVisible.value = true;
  }
});

const dismiss = () => {
  isVisible.value = false;
  sessionStorage.setItem('merchBannerDismissed', '1');
};
</script>

<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="merch-banner" role="banner" aria-label="Merchandise store announcement">
      <div class="banner-inner">
        <div class="banner-logo-wrap left">
          <img src="/logos/UPDATEDPURPLELOGO.png" alt="CMAA Logo" class="banner-logo" />
        </div>

        <div class="banner-content">
          <p class="banner-headline">Our Merch Store is Live!</p>
          <p class="banner-sub">Rep the Academy in style &mdash; green &amp; purple gear available now</p>
          <a
            href="https://catskillmaa.printify.me/"
            target="_blank"
            rel="noopener noreferrer"
            class="shop-btn"
          >
            Shop Now <span class="arrow">&#8594;</span>
          </a>
        </div>

        <div class="banner-logo-wrap right">
          <img src="/logos/UPDATEDGREENLOGO.png" alt="CMAA Logo" class="banner-logo" />
        </div>
      </div>

      <button class="dismiss-btn" @click="dismiss" aria-label="Dismiss announcement">&#x2715;</button>
    </div>
  </Transition>
</template>

<style scoped>
.merch-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(90deg, #15803d 0%, #1a5c3a 35%, #4c1d95 65%, #6d28d9 100%);
  color: white;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.15);
}

.banner-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.25rem 4rem 1.25rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 130px;
}

.banner-logo-wrap {
  flex-shrink: 0;
}

.banner-logo {
  height: 90px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
}

.banner-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.banner-headline {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 0.4px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
}

.banner-sub {
  font-size: 1rem;
  opacity: 0.88;
  margin: 0;
}

.shop-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: white;
  color: #4c1d95;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.6rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

.shop-btn:hover {
  background: #4c1d95;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.35);
}

.arrow {
  font-size: 1.1rem;
}

.dismiss-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  line-height: 1;
}

.dismiss-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}

/* Slide-up animation */
.slide-up-enter-active {
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-up-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

/* Tablet */
@media screen and (max-width: 900px) {
  .banner-logo-wrap.right {
    display: none;
  }

  .banner-inner {
    gap: 1.5rem;
    min-height: 110px;
  }

  .banner-logo {
    height: 70px;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .banner-logo-wrap.left {
    display: none;
  }

  .banner-inner {
    gap: 0;
    padding: 1rem 3rem 1rem 0.75rem;
    min-height: 100px;
  }

  .banner-headline {
    font-size: 1.2rem;
  }

  .banner-sub {
    font-size: 0.88rem;
  }

  .shop-btn {
    font-size: 0.95rem;
    padding: 0.5rem 1.3rem;
  }
}
</style>
