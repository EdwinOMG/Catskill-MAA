<script setup lang="ts">
const images = [
  { src: '/media/image1.webp', alt: 'Image 1' },
  { src: '/media/image2.webp', alt: 'Image 2' },
  { src: '/media/image3.webp', alt: 'Image 3' },
  { src: '/media/image4.webp', alt: 'Image 4' },
];
</script>

<template>
  <div class="mainbox">
    <div v-for="(image, index) in images" :key="index" class="floating box hover-underline">
      <img
        :src="`${image.src}?nf_resize=fit&w=800`"
        :srcset="`
          ${image.src}?nf_resize=fit&w=400 400w,
          ${image.src}?nf_resize=fit&w=800 800w,
          ${image.src}?nf_resize=fit&w=1200 1200w
        `"
        sizes="(max-width: 600px) 400px,
               (max-width: 1200px) 800px,
               1200px"
        :alt="image.alt"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.hover-underline {
  font-size: 2rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
}

.hover-underline::after,
.hover-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff0000, #00ffff);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}

.mainbox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 0;
}

.floating {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.floating:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.box {
  width: 280px;
  max-width: 90vw;
  padding: 0;
  background-color: transparent;
}

img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .mainbox {
    flex-direction: column;
    align-items: center;
    margin-top: 25rem; 
    padding: 2rem;
  }

  .box {
    width: 350px; 
    max-width: 85vw;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .mainbox {
    flex-direction: column;
    align-items: center;
    margin-top: 7rem; 
    padding: 2rem;
  }

  .box {
    width: 350px; 
    max-width: 85vw;
  }
}

@media (min-width: 1000px) and (max-width: 1280px) {
  .mainbox {
    align-items: center;
    margin-top: 2rem; 
    padding-bottom: 1rem;
  }

  .box {
    width: 280px; 
    max-width: 85vw;
  }
}
</style>