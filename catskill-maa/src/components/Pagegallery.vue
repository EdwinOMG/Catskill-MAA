<script setup lang="ts">
import { onMounted } from 'vue';

declare global {
  interface Window {
    FB: any;
  }
}

onMounted(() => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
});
</script>

<template>
    <div class="box">
  <div class="fb-page"
       data-href="https://www.facebook.com/CatskillMartialArtsAcademy"
       data-tabs="timeline"
       data-width="300"
       data-height="600"
       data-small-header="true"
       data-adapt-container-width="true"
       data-hide-cover="true"
       data-show-facepile="true"
       data-hide-cta="true">
    <blockquote cite="https://www.facebook.com/CatskillMartialArtsAcademy"
                class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/CatskillMartialArtsAcademy">Catskill Martial Arts Academy</a>
    </blockquote>
  </div>
  </div>
</template>



<style scoped>
.box {
  
  width: 290px;
  margin-top: 110px;
}
</style>