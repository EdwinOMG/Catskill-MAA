<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';
  import Topbar from './components/Topbar.vue';
</script>

<template>
  <div id="app">
  <v-app>
    <header>
    <Topbar />
    <Navbar />
    </header>
    <RouterView />
    
  <Footer /> 
  </v-app>
  </div>
</template>

<style>
  #app {
    background-color: white;
    }
  
</style>