<script setup lang="ts">

</script>

<template>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css"
/>
    <footer class="footer has-background-light-blue has-text-black">
  <div class="container">
    <div class="columns is-multiline">
      <!-- Logo -->
      <div class="column is-3 has-text-centered">
        <figure class="image is-inline-block">
          <img src="/logos/logo.webp" alt="Catskill Martial Arts Academy Logo" />
        </figure>
          </div>

      <!-- Hours -->
      <div class="column is-2">
        <h3 class="title is-5 has-text-black">Hours</h3>
        <p>Sunday: Closed</p>
        <p>Monday: 6PM-9PM</p>
        <p>Tuesday: 7PM-9PM</p>
        <p>Wednesday: 6PM-9PM</p>
        <p>Thursday: 7PM-9PM</p>
        <p>Friday: 6PM-9PM</p>
        <p>Saturday: 10AM-1PM</p>
      </div>

      <!-- Navigation -->
      <div class="column is-2">
        <h3 class="title is-5 has-text-black">Navigation</h3>
        <ul>
          <li><RouterLink to="/" class="has-text-blue">Home</RouterLink></li>
          <li><RouterLink to="/About" class="has-text-blue">About</RouterLink></li>
          <li><RouterLink to="/DragonProgram" class="has-text-blue">Dragon Program</RouterLink></li>
          <li><RouterLink to="/TeenProgram" class="has-text-blue">Teen Program</RouterLink></li>
          <li><RouterLink to="/AdultProgram" class="has-text-blue">Adult Program</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#contact' }" class="has-text-blue">Contact</RouterLink></li>

        </ul>
      </div>

      <!-- Contact -->
      <div class="column is-3">
        <h3 class="title is-5 has-text-black">Contact</h3>
        <p>Email: catskillmaa@yahoo.com</p>
        <p>Phone: (845) 423-9497</p>
        <p>1175 NY-52, Loch Sheldrake, NY</p>
      </div>

      <!-- Follow Us -->
      <div class="column is-2">
        <h3 class="title is-5 has-text-black">Follow Us</h3>
        <div class="buttons">
          <a class="button is-facebook" href="https://www.facebook.com/Catskillmartialartsacademy">
            <span class="icon">
              <i class="fab fa-facebook"></i>
            </span>
          </a>
          <a class="button is-link" href="https://www.instagram.com/catskillmaa/">
            <span class="icon">
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped>
.footer {
  background-color: #f0f8ff; 
  color: #000; 
  padding: 2rem 1.5rem;
}

.buttons .button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>