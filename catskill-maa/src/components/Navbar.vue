<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Requestbutton from '../components/Requestmodal.vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const isProgramsOpen = ref(false) // <-- ADD THIS: For mobile programs accordion
// Test to see if work
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

// Close the mobile sub-menu when the main menu is closed
watch(isOpen, (newVal) => {
  if (!newVal) {
    isProgramsOpen.value = false
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav :class="['navbar is-fixed-top', { scrolled: isScrolled, 'menu-open': isOpen }]">  
      <div class="navbar-brand">
    <a class="logo-link" v-if="!isScrolled && !isOpen" href="/">
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
    <div class="mobile-close-btn-container is-hidden-desktop">
    <button class="button is-white is-large" @click="isOpen = false" aria-label="Close menu">
      ← Close
    </button>
  </div>
    <div class="navbar-end w-full is-flex is-justify-content-flex-end is-align-items-center">


<div class="navbar-item has-dropdown is-hoverable is-hidden-touch">
  <a class="navbar-link is-block">Programs</a>
  <div class="navbar-dropdown">
    <router-link to="/DragonProgram" class="navbar-item">Kids Program</router-link>
    <router-link to="/TeenProgram" class="navbar-item">Teens Program</router-link>
    <router-link to="/AdultProgram" class="navbar-item">Adults Program</router-link>
  </div>
</div>

<div class="mobile-programs-list">
  <router-link to="/DragonProgram" class="navbar-item" @click="isOpen = false">Kids Program</router-link>
  <router-link to="/TeenProgram" class="navbar-item" @click="isOpen = false">Teens Program</router-link>
  <router-link to="/AdultProgram" class="navbar-item" @click="isOpen = false">Adults Program</router-link>
</div>

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
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: background-color 0.3s ease, height 0.3s ease;
}

.navbar.scrolled {
  background-color: whitesmoke;
  height: auto;
  transition: background-color 0.3s ease;
}

/* Mobile menu open - make navbar have white background */
@media screen and (max-width: 1024px) {
  .navbar.menu-open {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: white !important;
    z-index: 1002;
  }
}

/* Navbar Brand */
.navbar-brand {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  position: relative;
  z-index: 1003;
}

/* Burger */
.navbar-burger {
  cursor: pointer;
  z-index: 1003;
}

.navbar-burger span {
  background-color: #000;
}

/* Navbar Menu */
.navbar-menu {
  flex: 2;
  justify-content: flex-end;
  transition: max-height 0.3s ease;
}

.navbar-end {
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  
  .navbar-menu.is-active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    overflow-y: auto;
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
  
  /* Force burger to show */
  .navbar-burger {
    display: flex !important;
  }
  
  /* Hide desktop menu, show mobile */
  .navbar-menu {
    display: none;
  }
  
  .navbar-menu.is-active {
    display: flex !important;
  }
  
  /* Smaller logo for tablets */
  .logo-link img {
    height: 100px !important;
    max-width: 150px !important;
    margin-top: 4rem !important;
    margin-left: 1rem !important;
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
  min-width: 250px;
  padding: 0.5rem 0;
}

.navbar-dropdown .navbar-item {
  padding: 0.75rem 1.5rem;
  white-space: nowrap;
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
  height: 150px;  /* Bigger - was 80px */
  width: auto;
  max-width: 300px;  /* Bigger max width */
  object-fit: contain;
  margin-left: 2rem;
  margin-top: 3rem;  /* Pushed down more */
  display: block;
}

/* Responsive logo sizing */
@media screen and (max-width: 1024px) {
  .logo-link img {
    height: 100px;
    max-width: 150px;
    margin-left: 0.5rem;
    margin-top: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .logo-link img {
    height: 80px;
    max-width: 120px;
    margin-left: 0.5rem;
    margin-top: 3rem;
  }
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
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 1002;
    display: flex;
    flex-direction: column;
  }

  .navbar-menu.is-active {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    overflow-y: auto;
  }

  .navbar-end {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .navbar-item {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    justify-content: flex-start;
  }
}





.mobile-close-btn-container {
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
}

/* Make sure the button looks clean and easy to tap on mobile */
.mobile-close-btn-container .button {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-left: 0;
  box-shadow: none;
}

.mobile-close-btn-container .button:hover {
  color: #007aff; 
  background: transparent;
}

/* Desktop and tablet - 1025px and up */
@media screen and (min-width: 1025px) {
  .navbar-menu {
    display: flex !important;
  }
  
  .navbar-burger {
    display: none !important;
  }
  
  .navbar-end {
    justify-content: flex-end;
    gap: 0;
    flex-wrap: nowrap;
  }
  
  .navbar-item {
    padding: 1rem 0.75rem;
    white-space: nowrap;
  }
  
  /* Show dropdown, hide flat list on desktop/tablet */
  .navbar-item.has-dropdown {
    display: flex !important;
  }
  
  .mobile-programs-list {
    display: none !important;
  }
}

/* Mobile only - hide dropdown, show flat list */
@media screen and (max-width: 1024px) {
  .navbar-item.has-dropdown {
    display: none !important;
  }
  
  .mobile-programs-list {
    display: block !important;
    width: 100%;
  }
  
  .is-hidden-touch {
    display: none !important;
  }
}

/* Larger screens - more spacing */
@media screen and (min-width: 1200px) {
  .navbar-item {
    padding: 1rem 1.25rem;
  }
}

/* Ultra-wide screens - bigger text and spacing */
@media screen and (min-width: 2560px) {
  .navbar-item {
    padding: 1.5rem 2rem;
    font-size: 1.25rem;
  }
  
  .navbar-link {
    font-size: 1.25rem;
  }
}



</style>
