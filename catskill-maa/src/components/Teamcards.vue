<script setup lang="ts">
import { ref } from 'vue'

interface Post {
  id: number
  flip: boolean
  avatar: string
  image: string
  name: string
  ssn: string
  role: string
}

const posts = ref<Post[]>([
  {
    id: 1,
    flip: false,
    avatar: '/people/Edwin.png',
    image: '/people/Edwin.png',
    name: 'Edwin Morales Jr',
    ssn: '4th Dan Master Belt',
    role: 'Instructor',
  },
  {
    id: 2,
    flip: false,
    avatar: '/people/Donald.png',
    image: '/people/Donald.png',
    name: 'Donald Belsito',
    ssn: '8th Dan Grand Master',
    role: 'Head Instructor',
  },
  {
    id: 3,
    flip: false,
    avatar: '/people/Anaiah.png',
    image: '/people/Anaiah.png',
    name: 'Anaiah Santiago',
    ssn: '1st Dan Black Belt',
    role: 'Assistant Instructor',
  },
])

function letsFlip(item: Post) {
  posts.value.forEach((post) => {
    if (post.id !== item.id) {
      post.flip = false
    }
  })
  setTimeout(() => {
    item.flip = !item.flip
  }, 100)
}

function viewCard() {
  alert('View card!')
}
</script>

<template>
  <div class="box">
 <div class="cardbox">
 <div class="title has-text-centered">Our Instructors</div>
  <h2 class="subtitle">(Click to learn more)</h2>
  <div class="columns is-multiline is-centered">
    <div
      v-for="item in posts"
      :key="item.id"
      class="column is-one-third"
    >
      <div
        class="flipper"
        :class="{ flip: item.flip }"
        @click="letsFlip(item)"
      >
        <figure class="front">
          <img :src="item.image" alt="Profile Image" class="full-image" />
        </figure>

        <figure class="back">
  <div class="card-back">
    <div class="card-back-top">
      <div class="top-column left">
        <img :src="item.avatar" alt="Avatar" class="small-avatar" />
      </div>
      <div class="top-column center"></div>
      <div class="top-column right"></div>
    </div>

    <div class="card-back-bottom">
      <p class="name">{{ item.name }}</p>
      <p class="role">{{ item.role }}</p>
    </div>
  </div>
</figure>
      </div>
    </div>
  </div>
</div>  
</div>
</template>

<style scoped>

.box {
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding-top: 0px;
    margin-bottom: 30px;
    background-color: aliceblue;  
}

.title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    padding-bottom: 20px;
    color: black;
    
}
.subtitle{ 
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    padding-bottom: 0px;
    margin-top: 50px;
    color: black;
}
.cardbox {
  padding-top: 20px;
    margin-top: 50px;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  margin: 0;
  gap: 0;
  height: 50vh;
}

.column {
  flex: 1 0 33.33%;
  max-width: 33.33%;
  padding: 0;
  box-sizing: border-box;
  padding: 5px;
  
}

.flipper {
  height: 100%;
  width: 100%;
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flipper.flip {
  transform: rotateY(180deg);
}

.front,
.back {
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 0;
}

.is-centered-ver-hor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px #9e9e9e;
}

@media (max-width: 768px) {
  .column {
    flex: 1 0 50%;
    max-width: 50%;
  }
}
@media (max-width: 480px) {
  .column {
    flex: 1 0 100%;
    max-width: 100%;
  }
}

.card-back {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.card-back-top {
  flex: 1;
  display: flex;
  background: url('/your-collage.jpg') center/cover no-repeat;
}

.top-column {
  flex: 1;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-column:last-child {
  border-right: none;
}

.small-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.card-back-bottom {
  flex: 2;
  background-color: #333333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
}

.role {
  font-size: 1.2rem;
  color: #cccccc;
}
</style>