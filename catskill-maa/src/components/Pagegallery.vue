<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

let fbRoot: HTMLElement | null = null;

onMounted(() => {
  // Create fb-root if it doesn't exist
  if (!document.getElementById('fb-root')) {
    fbRoot = document.createElement('div');
    fbRoot.id = 'fb-root';
    document.body.appendChild(fbRoot);
  }

  // Load Facebook SDK
  if (!window.FB) {
    window.fbAsyncInit = () => {
      window.FB.init({
        xfbml: true,
        version: 'v19.0'
      });
    };

    // Only load script if it hasn't been loaded
    if (!document.querySelector('script[src*="facebook.net/en_US/sdk.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
      script.nonce = 'facebook-sdk';
      document.body.appendChild(script);
    }
  } else {
    // SDK already loaded, just parse
    window.FB.XFBML.parse();
  }
});

onBeforeUnmount(() => {
  // Clean up fb-root when component unmounts
  if (fbRoot && fbRoot.parentNode) {
    fbRoot.parentNode.removeChild(fbRoot);
  }
});
</script>

<template>
  <div class="facebook-3d-container">
    <div class="floating-card">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/CatskillMartialArtsAcademy"
        data-tabs="timeline"
        data-width="500"
        data-height="700"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
        data-hide-cta="true"
        aria-hidden="false"
        title="Catskill Martial Arts Academy Facebook feed"
      >
        <blockquote cite="https://www.facebook.com/CatskillMartialArtsAcademy" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/CatskillMartialArtsAcademy">Catskill Martial Arts Academy</a>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped>
.facebook-3d-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  perspective: 1500px;
  min-height: 800px;
}

.floating-card {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  width: 500px;
  
  /* 3D depth without rotation */
  transform: translateZ(50px);
  transform-style: preserve-3d;
  
  /* Multi-layered shadows for depth */
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 40px 100px rgba(0, 0, 0, 0.1),
    0 60px 140px rgba(24, 119, 242, 0.08);
  
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  animation: float 6s ease-in-out infinite;
}

/* Floating animation */
@keyframes float {
  0%, 100% {
    transform: translateZ(50px) translateY(0px);
  }
  50% {
    transform: translateZ(50px) translateY(-20px);
  }
}

/* Hover effect - brings it closer */
.floating-card:hover {
  transform: translateZ(80px) scale(1.02);
  
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.2),
    0 40px 100px rgba(0, 0, 0, 0.15),
    0 60px 150px rgba(0, 0, 0, 0.12),
    0 80px 200px rgba(24, 119, 242, 0.15);
  
  animation-play-state: paused;
}

/* Glowing border effect */
.floating-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    rgba(24, 119, 242, 0.8),
    rgba(66, 133, 244, 0.6),
    rgba(24, 119, 242, 0.8),
    rgba(66, 133, 244, 0.6)
  );
  border-radius: 20px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
  background-size: 400% 400%;
  animation: gradient-shift 8s ease infinite;
}

.floating-card:hover::before {
  opacity: 1;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Light reflection effect */
.floating-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: rotate(45deg);
  pointer-events: none;
  transition: all 0.8s ease;
}

.floating-card:hover::after {
  left: 100%;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .facebook-3d-container {
    padding: 2rem 1rem;
    min-height: 750px;
    perspective: 1000px;
  }

  .floating-card {
    transform: translateZ(30px);
  }

  @keyframes float {
    0%, 100% {
      transform: translateZ(30px) translateY(0px);
    }
    50% {
      transform: translateZ(30px) translateY(-15px);
    }
  }

  .floating-card:hover {
    transform: translateZ(50px) scale(1.01);
  }
}

@media screen and (max-width: 480px) {
  .facebook-3d-container {
    padding: 1rem 0.5rem;
    perspective: 800px;
  }

  .floating-card {
    border-radius: 12px;
  }

  .floating-card::before {
    border-radius: 12px;
  }
}
</style>