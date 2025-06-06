<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Requestbutton from '../components/Requestmodal.vue'
const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
  
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <nav :class="['navbar is-fixed-top', { scrolled: isScrolled }]">  
      <div class="navbar-brand">
    <a class="logo-link" v-if="!isScrolled" href="/">
      <img src="/logos/logo.png" alt="Catskill MAA Logo">
    </a>
    <div class="navbar-burger js-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu menu2" :class="{ 'is-active': isOpen }">
    <div class="navbar-end w-full is-flex is-justify-content-flex-end is-align-items-center">

<div class="navbar-item has-dropdown is-hoverable is-hidden-touch">
  <a class="navbar-link">Programs</a>
  <div class="navbar-dropdown is-boxed">
    <router-link to="/Programs" class="dropitem navbar-item">All Programs</router-link>
    <hr class="navbar-divider">
    <router-link to="/founders" class="dropitem navbar-item">Our Founders</router-link>
    <router-link to="/Team" class="dropitem navbar-item">Our Team</router-link>
  </div>
</div>

<router-link to="/Programs" class="navbar-item is-hidden-desktop">All Programs</router-link>
<router-link to="/founders" class="navbar-item is-hidden-desktop">Our Founders</router-link>
<router-link to="/Team" class="navbar-item is-hidden-desktop">Our Team</router-link>

<router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/Media" class="navbar-item">Media</router-link>
      <router-link :to="{ path: '/', hash: '#contact' }" class="navbar-item">Contact</router-link>

      <div class="navbar-item">
        <Requestbutton />
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

/* -------------------------
   Navbar Base Styles
------------------------- */

.navbar {
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 1000;

  &-brand {
    flex: 1;
  }

  &-menu {
    flex: 2;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      background-color: white !important;
      flex-direction: column;
    }

  }

  &-end {
    flex-wrap: wrap;
    justify-content: flex-end;

    @media screen and (max-width: 1024px) {
      justify-content: flex-start;
    }
  }
}
.navbar.scrolled {
  background-color: whitesmoke;
  transition: background-color 0.3s ease;
  height: 20px;
}


.navbar-item {
  padding: 25px;
  text-align: center;
  color: darkblue;
  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  

  &:hover {
    color: darkblue;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    border: 0px solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.5s ease;
  }

  &::after {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  &::before {
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-color: black;
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    text-align: left;
    width: 100%;
  }
}


/* -------------------------
   Navbar Link Styles
------------------------- */

.navbar-link {
  color: darkblue;

  &::after {
    display: none !important;
  }

  &:hover {
    background-color: white;
    color: darkblue;
  }
}

/* -------------------------
   Dropdown and Divider
------------------------- */

.navbar-dropdown {
  background-color: white;
}

.navbar-divider {
  background-color: darkblue !important;
}

.dropitem {
  background-color: white !important;
  color: black !important;
}

/* -------------------------
   Logo Styling
------------------------- */

.logo-link img {
  max-height: 10rem; /* increase logo size */
  height: auto;
  width: auto;
  margin-left: 3rem;
}


/* -------------------------
   Buttons & Trial Button
------------------------- */

.trial-but {
  background-color: darkblue;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white !important;
  }
}

/* -------------------------
   Swipe Button Styles
------------------------- */

.btn-swipe-left {
  display: block;
  overflow: hidden;
  text-align: center;
  max-width: 180px;
  padding: 10px;
  margin: auto;
  text-transform: uppercase;
  text-decoration: none;
  font-family: lato, serif;
  transition: 0.5s ease-in-out;
  position: relative;

  &::before {
    content: "";
    transform: translateX(-150%);
    position: absolute;
    left: 0;
    top: 0;
    height: 140%;
    width: 240%;
    transition: 0.5s ease-in-out;
  }

  span {
    z-index: 2;
    position: relative;
    transition: 0.5s ease-in-out;
  }

  &:hover span {
    color: rgb(255, 255, 255);
  }

  &:hover::before {
    transform: translateX(-50%);
  }

  &--black {
    color: rgb(51, 51, 51);
    border: 2px solid rgb(51, 51, 51);

    &::before {
      background-color: blue4;
    }
  }
}

.btn:hover .btn-slide-show-text1 {
  margin-left: 65px;
}

</style>