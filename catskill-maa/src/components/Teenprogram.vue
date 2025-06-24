<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <img src="/programs/teenkarate.jpg" alt="Little Dragons in action" class="dragon-image" />
      <div class="text">
        <h1 class="title">Where teens train hard and rise as leaders.</h1>
        <p class="subtitle">
          Our Teen Martial Arts program is designed to challenge, inspire, and empower. In every class, teens push their limits, build physical strength, and sharpen their mental focus. We go beyond kicks and punches—teens develop leadership, confidence, discipline, and resilience that they carry into school, sports, and everyday life. 
        </p>
        <p class="subtitle">
          Through high-energy drills, partner work, and goal-driven training, they learn how to stay motivated and committed. Classes are structured, yet supportive, creating a space where teens can grow at their own pace while staying active and having fun. They’ll make friends, learn to lead, and discover what they’re capable of—on and off the mat.
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