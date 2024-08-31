<template>
  <div :class="['feed-item', `feed-${index + 1}`]" :style="expandedStyle">
    <div class="image-container">
      <img :src="getImagePath(feed.image)" :alt="`Feed ${index + 1}`" />
    </div>
    <div
      :class="['card', cardColor, localIsExpanded ? 'expanded' : '']"
      :style="cardStyle"
      ref="cardRef"
    >
      <p>
        {{ localIsExpanded ? feed.text : feed.text.slice(0, 300) }}
        <span v-if="!localIsExpanded && feed.text.length > 300">...</span>
      </p>
      <button
        v-if="feed.text.length > 300"
        class="expand-button"
        @click="toggleExpand"
      >
        {{ localIsExpanded ? 'Zuklappen' : 'Lies mehr' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, watch, nextTick, onMounted } from 'vue';

// Definiere die Props der Komponente
const props = defineProps({
  feed: Object,
  index: Number,
  isExpanded: Boolean,
});

// Lokale Variablen für den Zustand
const localIsExpanded = ref(props.isExpanded);

// Card-Referenz für die DOM-Manipulation
const cardRef = ref(null);

// Computed Properties für Farben und Stile
const cardColor = computed(() => (props.index % 2 === 0 ? 'yellow' : 'purple'));

const expandedStyle = computed(() => ({
  marginBottom: localIsExpanded.value ? '2rem' : '1rem',
}));

const cardStyle = ref({
  height: '150px',
  transition: 'height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
});

// Funktion zur Berechnung und Aktualisierung der Höhe
const updateHeight = async () => {
  await nextTick();
  const cardElement = cardRef.value;
  if (cardElement) {
    cardStyle.value.height = localIsExpanded.value ? `${cardElement.scrollHeight}px` : '150px';
  }
};

// Methode zum Umschalten des expandierten Zustands
const toggleExpand = () => {
  localIsExpanded.value = !localIsExpanded.value;
  updateHeight();
};

// Beobachte Änderungen der props.isExpanded und aktualisiere localIsExpanded
watch(
  () => props.isExpanded,
  (newVal) => {
    localIsExpanded.value = newVal;
    updateHeight();
  }
);

// Initiale Höhe bei der Montage der Komponente setzen
onMounted(() => {
  updateHeight();
});

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
  flex-direction: column;
  align-items: flex-start;
}

.image-container {
  width: 100%;
  max-width: 80%;
  position: relative;
}

img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
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
  background-color: inherit;
  transition: height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card.expanded {
  height: auto;
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
  margin-top: 10px;
}

.card p {
  margin-bottom: 30px;
}

.yellow {
  background-color: #fddb3a;
}

.purple {
  background-color: blueviolet;
}
</style>
