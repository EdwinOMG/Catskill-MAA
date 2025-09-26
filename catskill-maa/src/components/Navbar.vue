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
      <img src="/logos/logo.webp" alt="Catskill MAA Logo">
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
  <a class="navbar-link is-block">Programs</a>
  <div class="navbar-dropdown">
    <router-link to="/DragonProgram" class="navbar-item">Kids Martial Arts</router-link>
    <router-link to="/TeenProgram" class="navbar-item">Teen Martial Arts</router-link>
    <router-link to="/AdultProgram" class="navbar-item">Adult Martial Arts</router-link>
  </div>
</div>

<!-- Mobile: individual links, hidden on desktop -->
<div class="is-hidden-desktop">
  <router-link to="/DragonProgram" class="navbar-item" @click="isOpen = false">Kids Martial Arts</router-link>
  <router-link to="/TeenProgram" class="navbar-item" @click="isOpen = false">Teen Martial Arts</router-link>
  <router-link to="/AdultProgram" class="navbar-item" @click="isOpen = false">Adult Martial Arts</router-link>
</div>

<!-- Mobile: Just a single "Programs" link, NEED TO FIX ROUTES FOR MOBILE -->
<router-link to="/About" class="navbar-item" @click="isOpen = false">About</router-link>
<router-link to="/Media" class="navbar-item" @click="isOpen = false">Media</router-link>
<router-link :to="{ path: '/', hash: '#contact' }" class="navbar-item" @click="isOpen = false">Contact</router-link>

      <div class="navbar-item">
        <Requestbutton />
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

/* -------------------------
   Navbar Dropdown Styles
------------------------- */
.navbar-dropdown .navbar-item {
  background-color: white!important; 
  color: black!important; 
}

.navbar-dropdown .navbar-item:hover {
  background-color: deepskyblue;
  color: white; 
}

/* -------------------------
   Navbar Base Styles
------------------------- */
.navbar {
  position: relative;
  z-index: 1001;  top: 0;
  background-color: transparent;
  transition: background-color 0.3s ease, height 0.3s ease;
}

.navbar.scrolled {
  background-color: whitesmoke;
  height: auto;
  transition: background-color 0.3s ease;

}

/* Navbar Brand */
.navbar-brand {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Burger */
.navbar-burger {
  cursor: pointer;
}

.navbar-burger span {
  background-color: #000;
}

/* Navbar Menu */
.navbar-menu {
  flex: 2;
  justify-content: center;
  transition: max-height 0.3s ease;
}

.navbar-end {
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
}

@media screen and (max-width: 1024px) {
  
.navbar-menu.is-active {
    position: fixed;
    top: 0;          /* start from very top */
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;    /* full width */
    height: 100vh;   /* full height */
    background-color: white;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 4rem; /* push content down so it doesn’t overlap the brand/burger */
  }

  .navbar-item {
    font-size: 1.5rem;
    width: 100%;
    padding: 1.5rem 2rem;
    justify-content: flex-start;
  }
  .navbar-end {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  
}

/* -------------------------
   Navbar Items
------------------------- */
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
}

.navbar-link {
  display: flex;
  align-items: center;
  width: 100%;
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
  background-color: white !important;
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
  max-height: 10rem;
  aspect-ratio: 16/9;
  width: auto;
  margin-left: 3rem;
  margin-top: 30px;
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
    color: darkblue;
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
      background-color: #000;
    }
  }
}

.btn:hover .btn-slide-show-text1 {
  margin-left: 65px;
}

/* -------------------------
   Mobile Navbar Bigger Text
------------------------- */
@media screen and (max-width: 1024px) {
  nav.navbar.is-fixed-top.is-active,
  nav.navbar.is-fixed-top.scrolled.is-active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;             /* full height */
    width: 100vw;          /* full width */
    height: 100vh;         /* viewport height */
    background-color: white;
    z-index: 1002;         /* above everything */
    display: flex;
    flex-direction: column;
  }

  .navbar-menu.is-active {
    flex: 1;               /* take remaining space */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    overflow-y: auto;      /* allow scrolling if content is long */
  }

  .navbar-end {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .navbar-item {
    width: 100%;
    font-size: 1.5rem;     /* bigger text */
    padding: 1.5rem 2rem;
    justify-content: flex-start;
  }
}
</style>