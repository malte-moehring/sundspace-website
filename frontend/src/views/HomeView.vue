<template>
  <main>
    <div class="parent">
      <!-- Splash screen section that includes Hyperdrive and Counter components -->
      <div class="splash-screen">
        <Hyperdrive></Hyperdrive>
        <Counter />
        <!-- Render the Counter component -->
      </div>
      <!-- Feed container displaying a list of FeedItem components -->
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
      <!-- Footer section with a link to Instagram -->
      <div class="footer">
        <a
          class="insta-button"
          href="https://www.instagram.com/sund.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehr Neuigkeiten
        </a>
      </div>
      <!-- Rocket element that remains fixed on the page -->
      <div class="rocket-element">
        <Rocket />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'; // Import Vue's ref function for reactive variables
import Counter from '../components/CounterComponent.vue'; // Import Counter component
import feedData from '../../../src/assets/json/feed.json'; // Import feed data from a JSON file
import FeedItem from '../components/FeedItemComponent.vue'; // Import FeedItem component
import Rocket from '../components/RocketComponent.vue'; // Import Rocket component
import Hyperdrive from '../components/HyperdriveComponent.vue'; // Import Hyperdrive component

// Define reactive variables
const feeds = ref(feedData); // Feed items data
const isExpanded = ref(new Array(feeds.value.length).fill(false)); // Track expanded state of feed items

// Function to get the path of images dynamically
const getImagePath = (imageName: string) => {
  return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
};

// Function to toggle the expanded state of a feed item
const toggleExpand = (index: number) => {
  isExpanded.value[index] = !isExpanded.value[index];
};
</script>

<style scoped>
.parent {
  display: grid; /* Use CSS Grid for layout */
  grid-template-columns: repeat(3, 1fr); /* Create three equal columns */
  grid-auto-rows: auto; /* Automatically adjust row height */
  gap: 16px; /* Space between grid items */
}

/* Styling for the splash screen section, covering the full viewport height */
.splash-screen {
  grid-column: span 3; /* Span across all three columns */
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  background: transparent; /* Transparent background */
}

/* Styling for the container holding feed items */
.feed-container {
  grid-column: span 2; /* Span across the first two columns */
  display: flex; /* Flexbox layout for column direction */
  flex-direction: column; /* Arrange feed items in a column */
  gap: 16px; /* Space between feed items */
}

/* Styling for the footer section */
.footer {
  grid-column: span 3; /* Span across all three columns */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  height: 100px; /* Fixed height */
}

/* Styling for the rocket element that stays fixed in the viewport */
.rocket-element {
  grid-column: 3; /* Position in the third column */
  grid-row: 2 / span 5; /* Span vertically from row 2 to 5 */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: flex-start; /* Align content at the top */
  max-width: 25vw; /* Maximum width relative to viewport width */
  overflow: hidden; /* Hide overflow */
  position: sticky; /* Sticky positioning to stay in view */
  top: 20px; /* Offset from the top of the viewport */
}

/* Styling for the Instagram button */
.insta-button {
  display: inline-flex; /* Flexbox layout for alignment */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  background-color: blueviolet; /* Background color */
  border: none; /* Remove border */
  border-radius: 20px; /* Rounded corners */
  width: 150px; /* Fixed width */
  height: 50px; /* Fixed height */
  color: black; /* Text color */
  font-size: 16px; /* Font size */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease; /* Smooth transition for background color change */
}

/* Hover effect for the Instagram button */
.insta-button:hover {
  background-color: #fddb3a; /* Change background color on hover */
}
</style>
