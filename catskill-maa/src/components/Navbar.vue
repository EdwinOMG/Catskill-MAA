<script setup lang="ts">
import { ref } from 'vue'

const isOpen= ref(false)
const isDropdownOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}


</script>

<template>
   <nav class="navbar is-transparent is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
        
    </a>
    <div class="navbar-burger js-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen} ">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu"  v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <a class="navbar-item"> Home </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item navbar-link" > About </a>

        
        <div class="navbar-dropdown is-boxed">
          <a class="dropitem navbar-item" > Our Founders </a>
          <a class="dropitem navbar-item"> Our Team </a>
          <hr class="navbar-divider">
          <a class="dropitem navbar-item"> Classes </a>
          <a class="dropitem navbar-item is-selected"> Media </a>
          <a class="dropitem navbar-item"> Quiz(maybe) </a>
        </div>
      </div>
        <a class="navbar-item"> Events </a>
        <a class="navbar-item"> Contact </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="trial-but button">
              <span> Schedule a FREE trial class </span>
            </a>
          </p>
    
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">
@use '../../catskill-maa.scss' as *;

.trial-but {
  background-color: darkblue;
  color: $white;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
    outline: none;

  &:hover {
    background-color: $blue5;
    color: $white;
  }
}
.navbar {
    background-color: $white;
}

.navbar-menu {
    justify-content: center;
}
 .navbar-item {
   padding: 25px;
   text-align: center;
   color: darkblue;
   font-weight: bold;
   font-size: 1.2rem;


   &:hover {
     background-color: $blue7;
     color: black;
   }
   
 }

 .navbar-dropdown{ 
    background-color: $white;
 }

 .navbar-divider {
    background-color: darkblue!important;
 }

 .dropitem {
    background-color: $white!important;
    color: black!important;

 }

</style>