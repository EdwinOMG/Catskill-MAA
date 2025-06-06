<script setup lang="ts">

</script>

<template>
    <div class="columns"></div>
  <div class="box is-flex is-flex-direction-column has-text-centered columns">  
    <h1 class="title is-4 box-title">Welcome to the Catskill Martial Arts Academy</h1>
    <p class="paragraph">We are proud to teach traditional Tang Soo Do, a Korean martial art that emphasizes discipline, respect, and personal
        development. Whether you're beginning your martial arts journey or continuing years of practice, you'll find a supportive
        and challenging environment where you can grow physically and mentally. Our experienced instructors are commited to preserving 
        the values of Tang Soo Do while helping each student build confidence, focus, and strength.
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '../../catskill-maa.scss' as *;


.box {
  padding-top: 3rem;
  width: 85%;
  height: 18rem;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  padding: 2rem;
}

.box-title {
  margin-top: -2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #363636;
  padding-top: 10px;
  font-size: 3rem!important;
}

.paragraph {
    color: black;
    font-size: 1.3rem;
}

</style>