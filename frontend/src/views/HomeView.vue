<template>
  <main>
    <div class="parent">
      <div class="splash-screen">
        <Counter /> <!-- Use the Counter component -->
      </div>
      <div class="feed-1">
        <img :src="feeds[0].image" alt="Feed 1" />
        <p>{{ feeds[0].text }}</p>
      </div>
      <div class="feed-2">
        <img :src="feeds[1].image" alt="Feed 2" />
        <p>{{ feeds[1].text }}</p>
      </div>
      <div class="feed-3">
        <img :src="feeds[2].image" alt="Feed 3" />
        <p>{{ feeds[2].text }}</p>
      </div>
      <div class="feed-4">
        <img :src="feeds[3].image" alt="Feed 4" />
        <p>{{ feeds[3].text }}</p>
      </div>
      <div class="feed-5">
        <img :src="feeds[4].image" alt="Feed 5" />
        <p>{{ feeds[4].text }}</p>
      </div>
      <div class="footer">7</div>
      <div class="rocket-element">8</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Counter from '../components/CounterComponent.vue';
import { ref, onMounted } from 'vue';

const images = import.meta.glob('../../../src/assets/pics/*.png');
const texts = import.meta.glob('../../../src/assets/texts/*.txt');

const feeds = ref([
  {
    image: '',
    text: '',
  },
  {
    image: '',
    text: '',
  },
  {
    image: '',
    text: '',
  },
  {
    image: '',
    text: '',
  },
  {
    image: '',
    text: '',
  }
]);

const loadFeeds = async () => {
  try {
    const loadedFeeds = await Promise.all(
      feeds.value.map(async (_, index) => {
        const imagePaths = Object.keys(images);
        const textPaths = Object.keys(texts);

        const imagePath = imagePaths[index];
        const textPath = textPaths[index];

        if (!imagePath || !textPath) { 
          return { image: '', text: '' };
        }

        const imageModule = (await images[imagePath]?.()) as { default: string };
        const textModule = (await texts[textPath]?.()) as { default: string };

        return {
          image: imageModule?.default || '',
          text: textModule?.default || ''
        };
      })
    );
    feeds.value = loadedFeeds;
  } catch (error) {
    console.error("Error loading feeds:", error);
  }
};


onMounted(() => {
  loadFeeds();
  
});
</script>

<style scoped lang="css">
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
