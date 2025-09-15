<script setup lang="ts">
import { onMounted } from 'vue';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

onMounted(() => {
  if (!window.FB) {
    window.fbAsyncInit = () => {
      window.FB.init({ xfbml: true, version: 'v19.0' });
      // FB SDK initialized and auto-parsed because xfbml:true
    };

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    document.body.appendChild(script);
  } else {
    window.FB.XFBML.parse();
  }
});
</script>

<template>
  <div class="box" role="region" aria-label="Facebook feed">
    <div
      class="fb-page"
      data-href="https://www.facebook.com/CatskillMartialArtsAcademy"
      data-tabs="timeline"
      data-width="300"
      data-height="600"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
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
</template>

<style scoped>
.box { width: 290px; margin-top: 110px; }
</style>