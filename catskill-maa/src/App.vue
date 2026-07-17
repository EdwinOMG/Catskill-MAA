<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';
  import Topbar from './components/Topbar.vue';
  import MerchBanner from './components/MerchBanner.vue';
  import KidstockBubble from '@/components/KidstockBubble.vue'


</script>

<template>
  <div id="app">
    <main id="maincontent">
    <header>
    <Topbar />
    <Navbar />
    </header>
    <RouterView />
    <KidstockBubble />
  <Footer />
  </main>
  <MerchBanner />
  </div>
</template>

<style>
  #app {
    background-color: white;
    }


    html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  max-width: 100%;
}
  
</style>