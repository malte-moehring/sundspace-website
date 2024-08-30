<template>
    <div :class="['feed-item', `feed-${index + 1}`]" :style="expandedStyle">
      <div class="image-container">
        <img :src="getImagePath(feed.image)" :alt="`Feed ${index + 1}`" />
      </div>
      <div :class="['card', cardColor, isExpanded ? 'expanded' : '']">
        <p>
          {{ isExpanded ? feed.text : feed.text.slice(0, 300) }}
          <span v-if="!isExpanded && feed.text.length > 300">...</span>
        </p>
        <button
          v-if="feed.text.length > 300"
          class="expand-button"
          @click="$emit('toggle-expand')"
        >
          {{ isExpanded ? 'Zuklappen' : 'Lies mehr' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    feed: Object,
    index: Number,
    isExpanded: Boolean,
  });
  
  const cardColor = computed(() => (props.index % 2 === 0 ? 'yellow' : 'purple'));
  
  const expandedStyle = computed(() => ({
    marginBottom: props.isExpanded ? '2rem' : '1rem',
  }));
  
  // Dynamischer Import der Bilder basierend auf dem Bildnamen
  const getImagePath = (imageName) => {
    return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
  };
  </script>
  
  <style scoped>
  .feed-item {
    position: relative;
    grid-column: span 2;
    margin-left: 10rem;
    display: flex;
    flex-direction: column; /* Bilder und Text übereinander */
    align-items: flex-start; /* Text und Bild an den linken Rand ausrichten */
  }
  
  .image-container {
    width: 100%; /* Bildcontainer hat volle Breite */
    max-width: 80%; /* Bild füllt 80% der Breite des Containers */
    position: relative; /* Positionierung relativ zum Container */
  }
  
  img {
    width: 100%; /* Bild füllt die Breite des Containers */
    height: auto; /* Höhe passt sich proportional an */
    border-radius: 20px; /* Abgerundete Ecken */
    object-fit: cover; /* Bild wird zugeschnitten, um den Container zu füllen */
    z-index: 1;
  }
  
  .card {
    position: relative;
    border-radius: 20px;
    padding: 20px;
    margin-left: 5rem;
    width: calc(100% - 10rem);
    margin-top: -2.5rem;
    z-index: 999;
    overflow: hidden;
    max-height: 150px;
    transition: max-height 0.3s ease-in-out; /* Transition nur für den Text */
    background-color: inherit; /* Hintergrundfarbe des Cards */
  }
  
  .card.expanded {
    max-height: none; /* Maximale Höhe aufheben, wenn expandiert */
  }
  
  .expand-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    z-index: 1000;
    color: blue;
    margin-top: 10px; /* Abstand zum Text */
  }
  
  /* Abstand zwischen Text und Button vergrößern */
  .card p {
    margin-bottom: 30px; /* Fügt einen Abstand zum unteren Rand des Texts hinzu */
  }
  
  .yellow {
    background-color: #fddb3a;
  }
  
  .purple {
    background-color: blueviolet;
  }
  </style>
  