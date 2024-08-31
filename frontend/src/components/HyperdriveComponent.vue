<template>
  <div class="stars">
    <div v-for="(star, index) in stars" :key="index"
         class="star"
         :style="{
           '--x': `${star.x}px`,
           '--y': `${star.y}px`,
           '--delay': `${star.delay}s`,
           '--duration': `${star.duration}s`,
         }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const starCount = 100;
const stars = ref([]);

const generateStars = () => {
  for (let i = 0; i < starCount; i++) {
    const star = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: 0,
      duration: Math.random() * 1 + 0.25,
    };
    stars.value.push(star);
  }
};

onMounted(() => {
  generateStars();
});
</script>

<style scoped>
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  overflow: hidden;
  z-index: 5;
}

.star {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: white;
  opacity: 1;
  transform-origin: center center;
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  animation: hyperdrive var(--duration) linear var(--delay) infinite;
}

@keyframes hyperdrive {
  0% {
    transform: translateZ(0) scale(2);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1000px) scale(1);
    opacity: 0;
  }
}
</style>
