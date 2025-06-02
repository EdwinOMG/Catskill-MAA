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
        <img src="/logo.png" alt="Catskill MAA Logo">
    </a>
    <div class="navbar-burger js-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen} ">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu menu2"  v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start menu2">
      <router-link to="/" class="navbar-item">Home</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" >About</a>

        
        <div class="navbar-dropdown is-boxed">
        <router-link to="/founders" class="dropitem navbar-item">Our Founders</router-link>
        <hr class="navbar-divider">
         <router-link to="/Team" class="dropitem navbar-item">Our Team</router-link>
        </div>
      </div>
        <router-link to="/Media" class="navbar-item">Media</router-link>
        <router-link to="/Programs" class="navbar-item">Programs</router-link>

        <router-link :to="{ path: '/', hash: '#contact' }" class="navbar-item">Contact</router-link>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            
            <router-link :to="{ path: '/', hash: '#contact' }" class="trial-but btn btn-swipe-left btn-swipe-left--black button">
              <span> Join Now! </span>
            </router-link>
          </p>
    
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">

@use '../../catskill-maa.scss' as *;

.navbar-item img {
  height: 100%;
  max-height: 3.25rem;
  width: auto;
}
.navbar {
    position: sticky;
}
.navbar-item::before,
.navbar-item::after {
  content: "";
  position: absolute;
  display: block;
  border: 0px solid transparent;
  width: 0%;
  height: 0%;
  transition: all 0.5s ease;
}

.navbar-item::after {
  top: 0;
  left: 0;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
}

.navbar-item::before {
  right: 0;
  bottom: 0;
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
}

.navbar-item:hover::before,
.navbar-item:hover::after {
  width: 100%;
  height: 100%;
  border-color: #fff; /* Adjust the color as needed */
}


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

.navbar-link {
    color: darkblue;

    &:hover {
        background-color: $blue2;
        color: darkblue;
    }
}
</style>