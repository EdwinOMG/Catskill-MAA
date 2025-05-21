<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
  <v-app>
    <header>
    <Navbar />
    </header>
    <RouterView />
  </v-app>
  </div>s
</template>

<style>
  #app {
    background-color: white;
    }
  
</style>