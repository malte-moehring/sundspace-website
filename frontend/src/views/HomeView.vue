<template>
  <main>
    <div class="parent">
      <div class="splash-screen">
        <Counter /> <!-- Verwende die Counter-Komponente -->
      </div>
      <div class="feed-1">
        <img :src="getImagePath(feeds[0].image)" alt="Feed 1" />
        <div class="card yellow">
          <p>{{ feeds[0].text }}</p>
        </div>
      </div>
      <div class="feed-2">
        <img :src="getImagePath(feeds[1].image)" alt="Feed 2" />
        <div class="card purple">
          <p>{{ feeds[1].text }}</p>
        </div>
      </div>
      <div class="feed-3">
        <img :src="getImagePath(feeds[2].image)" alt="Feed 3" />
        <div class="card yellow">
          <p>{{ feeds[2].text }}</p>
        </div>
      </div>
      <div class="feed-4">
        <img :src="getImagePath(feeds[3].image)" alt="Feed 4" />
        <div class="card purple">
          <p>{{ feeds[3].text }}</p>
        </div>
      </div>
      <div class="feed-5">
        <img :src="getImagePath(feeds[4].image)" alt="Feed 5" />
        <div class="card yellow">
          <p>{{ feeds[4].text }}</p>
        </div>
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
  margin-top: -5rem;
  z-index: 999;
}

.yellow {
  background-color: #fddb3a;
}

.purple {
  background-color: blueviolet;
}
</style>
