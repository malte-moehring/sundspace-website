<template>
    <div>
      <div class="counter">Counter Component</div>
      <div class="stars">
        <div
          v-for="(star, index) in stars"
          :key="index"
          class="star"
          :style="{
            left: star.x + 'px',
            top: star.y + 'px',
            animation: `hyperdrive ${star.duration}s linear ${star.delay}s infinite`
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const starCount = 100;
  const stars = ref([]);
  
  onMounted(() => {
    generateStars();
    console.log(stars.value);
  });
  
  function generateStars() {
    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * window.innerWidth / 2;
      const star = {
        x: Math.cos(angle) * radius + window.innerWidth / 2,
        y: Math.sin(angle) * radius + window.innerHeight / 2,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 1,
      };
      stars.value.push(star);
    }
  }
  </script>
  
  <style scoped>
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  
  .star {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    opacity: 1;
    animation: testAnimation 2s linear infinite;
  }
  
  @keyframes testAnimation {
    0% { transform: scale(1); }
    100% { transform: scale(1.5); }
  }
  
  .counter {
    position: relative;
    z-index: 10;
    background-color: yellow;
    padding: 10px;
  }
  </style>
  