<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <img src="/programs/dragonskarate.jpg" alt="Little Dragons in action" class="dragon-image" />
      <div class="text">
        <h1 class="title">Discipline, respect, and big kicks from our Little Dragons!</h1>
        <p class="subtitle">
          Our Little Dragons martial arts program helps kids ages 5–9 grow stronger, more focused, and more confident—both on and off the mat. Through fun, structured classes, children build key life skills like respect, discipline, and goal setting. Each class includes drills
          and games that improve coordination, listening, and focus—all while keeping kids active and engaged.
        </p>
        <p class="subtitle">
          We also help kids develop social skills by working together, encouraging each other, and forming lasting friendships. Parents love the energy,
          structure, and positive messages built into every class. Little Dragons isn’t just a class—it’s a foundation for success in school, at home,
          and beyond.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.dragon-image {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  object-fit: cover;
}

.text {
  max-width: 600px;
  text-align: left;
  width: 70%;
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
  
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
  }

  .dragon-image {
    width: 50%;
  }

  .text {
    width: 50%;
  }
}
</style>