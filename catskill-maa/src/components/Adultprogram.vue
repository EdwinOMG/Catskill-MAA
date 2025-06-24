<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <img src="/programs/adultkarate.jpg" alt="Little Dragons in action" class="dragon-image" />
      <div class="text">
        <h1 class="title">Strength. Confidence. Real-World Self-Defense.
</h1>
        <p class="subtitle">
          Our Adult Martial Arts program is the perfect balance of fitness, practical self-defense, and personal development. Whether you’re just starting out or getting back into training, our classes meet you where you are. You’ll build real strength, improve endurance, and learn effective techniques that work in real-world situations. Each class offers a full-body workout that sharpens your mind as much as your body—all in a supportive, motivating environment.
        </p>
        <p class="subtitle">
          But it’s not just about the physical. As you train, you’ll build confidence, discipline, and resilience that carry over into your daily life. Many adults find martial arts helps reduce stress, improve focus, and boost their overall well-being. Plus, you’ll become part of a welcoming community of like-minded people who support and encourage each other every step of the way. This isn’t just a class—it’s a path to a stronger, more confident you.
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