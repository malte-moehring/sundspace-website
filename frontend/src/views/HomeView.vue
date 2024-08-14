<template>
  <main>
    <div class="parent">
      <div class="splash-screen">
        <Counter /> <!-- Verwende die Counter-Komponente -->
      </div>
      <div class="feed-1">
        <img :src="getImagePath(feeds[0].image)" alt="Feed 1" />
        <p>{{ feeds[0].text }}</p>
      </div>
      <div class="feed-2">
        <img :src="getImagePath(feeds[1].image)" alt="Feed 2" />
        <p>{{ feeds[1].text }}</p>
      </div>
      <div class="feed-3">
        <img :src="getImagePath(feeds[2].image)" alt="Feed 3" />
        <p>{{ feeds[2].text }}</p>
      </div>
      <div class="feed-4">
        <img :src="getImagePath(feeds[3].image)" alt="Feed 4" />
        <p>{{ feeds[3].text }}</p>
      </div>
      <div class="feed-5">
        <img :src="getImagePath(feeds[4].image)" alt="Feed 5" />
        <p>{{ feeds[4].text }}</p>
      </div>
      <div class="footer">7</div>
      <div class="rocket-element">8</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Counter from '../components/CounterComponent.vue';
import { ref } from 'vue';
import feedData from '../../../src/assets/json/feed.json';

const feeds = ref(feedData);

// Dynamischer Import der Bilder basierend auf dem Bildnamen
const getImagePath = (imageName: string) => {
  return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
};
</script>

<style scoped lang="css">
img {
  max-width: 80%;
  max-height: 80%;
  padding-left: 10rem;
}

p {
  padding-left: 15rem;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, auto);
  gap: 8px;
}

.parent div {
  color: #dadada;
}

.splash-screen {
  grid-column: span 3 / span 3;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feed-1 {
  grid-column: span 2 / span 2;
  grid-row-start: 2;
}

.feed-2 {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 3;
}

.feed-3 {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 4;
}

.feed-4 {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 5;
}

.feed-5 {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 6;
}

.footer {
  grid-column: span 3 / span 3;
  grid-column-start: 1;
  grid-row-start: 7;
}

.rocket-element {
  grid-row: span 5 / span 5;
  grid-column-start: 3;
  grid-row-start: 2;
}
</style>
