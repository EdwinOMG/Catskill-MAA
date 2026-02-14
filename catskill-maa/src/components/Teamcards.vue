<script setup lang="ts">
import { ref } from 'vue'

interface Post {
  id: number
  flip: boolean
  image: string
  name: string
  role: string
  description: string
}

const posts = ref<Post[]>([
  { id: 1, flip: false, image: '/people/edwin.jpg', name: 'Edwin Morales Jr', role: 'Instructor', description: '4th Dan Black Belt Instructor' },
  { id: 2, flip: false, image: '/people/belsito.jpg', name: 'Donald Belsito', role: 'Head Instructor', description: '8th Dan Black Belt Head Instructor' },
  { id: 3, flip: false, image: '/people/anaiah.jpg', name: 'Anaiah Santiago', role: 'Assistant Instructor', description: '1st Dan Black Belt Assistant Instructor' },
])

function letsFlip(item: Post) {
  posts.value.forEach(p => {
    if (p.id !== item.id) p.flip = false
  })
  item.flip = !item.flip
}
</script>

<template>
  <section aria-label="Instructors">
    <h2 class="title has-text-centered">Our Instructors</h2>
    <div class="columns is-multiline is-centered">
      <div v-for="item in posts" :key="item.id" class="column is-full-mobile is-half-tablet is-one-third-desktop">
        <button class="flipper" :class="{ flip: item.flip }" @click="letsFlip(item)" :aria-pressed="item.flip" :aria-label="`More about ${item.name}`">
          <figure class="front">
            <img :src="item.image" :alt="`Photo of ${item.name}`" class="full-image" loading="lazy" />
          </figure>
          <figure class="back" aria-hidden="true">
            <div class="card-back">
              <p class="name">{{ item.name }}</p>
              <p class="description">{{ item.description }}</p>
            </div>
          </figure>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flipper {
  width: 100%;
  background: none;
  border: none;
  perspective: 1000px;
  cursor: pointer;
  display: block;
}

.flipper figure {
  margin: 0;
  width: 100%;
  height: 500px;
  backface-visibility: hidden;
  transition: transform 0.6s;
  border-radius: 8px;
  overflow: hidden;
}

.flipper .front {
  transform: rotateY(0deg);
}

.flipper .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  padding: 1rem;
  box-sizing: border-box;
}

.flipper.flip .front {
  transform: rotateY(180deg);
}

.flipper.flip .back {
  transform: rotateY(0deg);
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Shift Edwin and Anaiah photos upward */
.column:nth-child(1) .full-image {
  object-position: center 25%;
}

.column:nth-child(3) .full-image {
  object-position: center 19%;
}

.card-back {
  text-align: center;
}

.card-back .name {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-back .description {
  font-size: 1rem;
  color: #555;
}
</style>