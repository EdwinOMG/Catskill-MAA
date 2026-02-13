<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';
  import Topbar from './components/Topbar.vue';

  
</script>

<template>
  <div id="app">
    <main id="maincontent">
    <header>
    <Topbar />
    <Navbar />
    </header>
    <RouterView />
    
  <Footer /> 
  </main>
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