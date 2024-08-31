<template>
  <main>
    <div class="parent">
      <div class="splash-screen">
        <Hyperdrive></Hyperdrive>
        <Counter />
        <!-- Verwende die Counter-Komponente -->
      </div>
      <div class="feed-container">
        <FeedItem
          v-for="(feed, index) in feeds"
          :key="index"
          :feed="feed"
          :index="index"
          :is-expanded="isExpanded[index]"
          @toggle-expand="toggleExpand(index)"
        />
      </div>
      <div class="footer">
        <a
          class="insta-button"
          href="https://www.instagram.com/sund.space/"
          target="_blank"
          rel="noopener noreferrer"
          >Mehr Neuigkeiten</a
        >
      </div>
      <div class="rocket-element">
        <Rocket />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Counter from '../components/CounterComponent.vue';
import feedData from '../../../src/assets/json/feed.json';
import FeedItem from '../components/FeedItemComponent.vue'; // Neue Komponente für die Feed-Elemente
import Rocket from '../components/RocketComponent.vue';
import Hyperdrive from '../components/HyperdriveComponent.vue';

const feeds = ref(feedData);
const isExpanded = ref(new Array(feeds.value.length).fill(false));

// Dynamischer Import der Bilder basierend auf dem Bildnamen
const getImagePath = (imageName: string) => {
  return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
};

const toggleExpand = (index: number) => {
  isExpanded.value[index] = !isExpanded.value[index];
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto; /* Automatische Anpassung der Zeilenhöhe */
  gap: 16px; /* Abstand zwischen den Elementen */
}

.splash-screen {
  grid-column: span 3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}

.feed-container {
  grid-column: span 2; /* Die Feed-Elemente sollen auf 2 Spalten bleiben */
  display: flex;
  flex-direction: column;
  gap: 16px; /* Abstand zwischen den Feed-Items */
}

.footer {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.rocket-element {
  grid-column: 3; /* Die Rakete bleibt in der dritten Spalte */
  grid-row: 2 / span 5; /* Die Rakete erstreckt sich vertikal über den Feed */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 25vw;
  overflow: hidden;
  position: sticky; /* Die Rakete bleibt fixiert */
  top: 20px; /* Die Rakete bleibt mit einem kleinen Abstand vom oberen Rand */
}

.insta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: blueviolet;
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.insta-button:hover {
  background-color: #fddb3a;
}
</style>
