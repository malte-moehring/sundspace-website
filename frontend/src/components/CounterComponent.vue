<template>
  <div class="counter">{{ formattedValue }}</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const value = ref(0);
const endValue = 3000;
const duration = 2000; // Duration of the counter in milliseconds
const delay = 1000; // Delay before the counter starts
const suffix = 'M';

const increment = () => {
  const startTime = Date.now();
  const endTime = startTime + duration;

  const step = () => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);
    value.value = Math.floor(progress * endValue);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  step();
};

const startCounter = () => {
  setTimeout(() => {
    increment();
  }, delay);
};

onMounted(() => {
  startCounter();
});

const formattedValue = computed(() => `${value.value}${suffix}`);
</script>

<style scoped>
.counter {
  font-size: 25vh; /* Customize font size */
  font-weight: bold; /* Customize font weight */
  color: #fddb3a !important; /* Customize text color */
}
</style>
