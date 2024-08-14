<template>
  <main>
    <div class="parent">
      <div class="splash-screen">
        <Counter /> <!-- Verwende die Counter-Komponente -->
      </div>
      <div v-for="(feed, index) in feeds" :key="index" :class="`feed-${index + 1}`">
        <img :src="getImagePath(feed.image)" :alt="`Feed ${index + 1}`" />
        <div :class="['card', index % 2 === 0 ? 'yellow' : 'purple', isExpanded[index] ? 'expanded' : '']">
          <p>
            {{ isExpanded[index] ? feed.text : feed.text.slice(0, 300) }}
            <span v-if="!isExpanded[index] && feed.text.length > 300">...</span>
          </p>
          <button v-if="feed.text.length > 300" class="expand-button" @click="toggleExpand(index)">
            {{ isExpanded[index] ? 'Zuklappen' : 'Lies mehr' }}
          </button>
        </div>
      </div>
      <div class="footer">7</div>
      <div class="rocket-element">8</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Counter from '../components/CounterComponent.vue';
import feedData from '../../../src/assets/json/feed.json';

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

<style scoped lang="css">
img {
  max-width: 80%; /* Bild füllt den verfügbaren Platz in der Karte */
  max-height: 80%;
  border-radius: 20px; /* Rundet alle Ecken des Bildes */
  object-fit: cover; /* Das Bild wird so angepasst, dass es den Container ausfüllt */
  z-index: 1;
  position: relative;
}

p {
  padding: 20px;
  color:black
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
  position: relative;
  grid-column: span 2 / span 2;
  grid-row-start: 2;
  margin-left: 10rem;
}

.feed-2 {
  position: relative;
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 3;
  margin-left: 10rem;
}

.feed-3 {
  position: relative;
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 4;
  margin-left: 10rem;
}

.feed-4 {
  position: relative;
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 5;
  margin-left: 10rem;
  padding-bottom: auto;
}

.feed-5 {
  position: relative;
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 6;
  margin-left: 10rem;
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

.card {
  position: absolute;
  border-radius: 20px;
  padding-right: 20px; /* Optionales Padding rechts für Symmetrie */
  margin-left: 5rem; /* Setzt den linken Rand zurück */
  width: calc(100% - 10rem); /* Breite des Bildes anpassen, um das Padding zu berücksichtigen */
  margin-top: -2.5rem;
  z-index: 999;
  overflow: hidden;
  max-height: 150px;
}

.card.expanded {
  max-height: none;
}

.truncated {
  display: block;
  max-height: 120px;
  overflow: hidden;
}

.expand-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 1000;
  color: blue;
}

.yellow {
  background-color: #fddb3a;
}

.purple {
  background-color: blueviolet;
}
</style>
