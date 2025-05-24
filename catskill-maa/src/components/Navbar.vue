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
            <a class="trial-but btn btn-swipe-left btn-swipe-left--black button">
              <span> Join Now! </span>
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


.btn:hover .btn-slide-show-text1 {
  margin-left: 65px;
} 
 
.btn-swipe-left {
  display: block;
  overflow: hidden;
  text-align: center;
  max-width: 180px;
  padding: 10px;
  margin: auto;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  font-family: lato, serif;
} 
 
.btn-swipe-left::before {
  content: "";
  transform: translateX(-150%);
  position: absolute;
  left: 0px;
  top: 0px;
  height: 140%;
  width: 240%;
  transition: 0.5s ease-in-out;
} 
 
.btn-swipe-left span {
  z-index: 2;
  position: relative;
  transition: 0.5s ease-in-out;
} 
 
.btn-swipe-left:hover span {
  color: rgb(255, 255, 255);
} 
 
.btn-swipe-left:hover::before {
  transform: translateX(-50%);
} 
 
.btn-swipe-left--black {
  color: rgb(51, 51, 51);
  border: 2px solid rgb(51, 51, 51);
} 
 
.btn-swipe-left--black::before {
  background-color: $blue4;
} 
 
.trial-but {
  background-color: darkblue;
  color: $white;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
    outline: none;

     &:hover {
        background-color: $white!important;
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
        background-color: $blue2;
        color: darkblue;
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