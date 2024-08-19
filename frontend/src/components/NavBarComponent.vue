<template>
  <!-- The navigation container with dynamic classes based on the component's state -->
  <div ref="navDiv" class="navDiv" :class="{ expanded: isExpanded, fixed: isFixed }">
    <nav class="navMenu">
      <!-- RouterLinks define navigation links to different routes within the application -->
      <RouterLink to="/" exact-active-class="router-link-active" exact>Start</RouterLink>
      <RouterLink to="/team" active-class="router-link-active">Team</RouterLink>
      <RouterLink to="/rakete" active-class="router-link-active">Rakete</RouterLink>
      <RouterLink to="/wettbewerb" active-class="router-link-active">Wettbewerb</RouterLink>
      <RouterLink to="/kontakt" active-class="router-link-active">Kontakt</RouterLink>
      <RouterLink to="/sponsoring" active-class="router-link-active">Sponsoring</RouterLink>
      <!-- A div element with the class 'dot', used for highlighting navigation items -->
      <div ref="dot" class="dot"></div>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    // Reactive references to DOM elements and state variables
    const navDiv = ref<HTMLElement | null>(null);
    const dot = ref<HTMLElement | null>(null);
    const isExpanded = ref(false);
    const isFixed = ref(false);

    // Method to update the dot's position based on the hovered navigation item
    const updateDotPosition = () => {
      const menu = navDiv.value?.querySelector('.navMenu') as HTMLElement;
      const items = menu ? Array.from(menu.querySelectorAll('a')) : [];
      const hoveredItem = items.find((item) => item.matches(':hover'));

      if (hoveredItem && dot.value) {
        const itemWidth = hoveredItem.offsetWidth;
        const itemPosition = hoveredItem.offsetLeft;
        dot.value.style.transform = `translateX(${itemPosition + itemWidth / 2}px)`;
        dot.value.style.opacity = '1';
      }
    };

    // Method to handle the scroll event and adjust navigation state
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        isExpanded.value = true;
      } else {
        isExpanded.value = false;
      }

      if (navDiv.value) {
        if (isExpanded.value && scrollTop >= navDiv.value.offsetTop) {
          isFixed.value = true;
        } else {
          isFixed.value = false;
        }
      }
    };

    // Setup event listeners when the component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);

      const menu = navDiv.value?.querySelector('.navMenu') as HTMLElement;
      const items = menu ? Array.from(menu.querySelectorAll('a')) : [];

      items.forEach((item) => {
        item.addEventListener('mouseover', updateDotPosition);
        item.addEventListener('mouseleave', () => {
          if (dot.value) {
            dot.value.style.opacity = '0'; // Hide the dot when mouse leaves
          }
        });
      });

      if (dot.value) {
        dot.value.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
      }
    });

    // Remove the event listener before the component is unmounted
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    // Return the reactive references to be used in the template
    return {
      navDiv,
      dot,
      isExpanded,
      isFixed,
    };
  },
};
</script>

<style scoped>
/* Imports the Montserrat font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

/* General CSS resets for box model adjustments */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Defines the styling for the navigation container element */
.navDiv {
  position: fixed; /* Fixes the navigation at the top of the screen */
  width: 50vw;
  height: 8vh;
  padding: 10px 20px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%); /* Horizontally centers the element */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; /* Rounded corners */
  background-color: #272727; /* Background color */
  transition: all 1s ease-in-out; /* Transition effect */
  z-index: 9999; /* Ensures the navigation is displayed on top */
}

/* Defines the styling for the navigation element (menu bar) */
.navMenu {
  display: flex;
  width: 100%;
  justify-content: space-between; /* Distributes links evenly */
  align-items: center;
  position: relative; /* Allows positioning of the 'dot' element */
}

/* Styling for the navigation links */
.navMenu a {
  color: #dadada;
  text-decoration: none; /* Removes default underline */
  font-size: 1.2em;
  text-transform: uppercase; /* Converts text to uppercase */
  font-weight: 500;
  padding: 0 15px;
  transition: color 0.3s ease-in-out; /* Smooth transition for color changes */
}

/* Styling for the active link (currently selected link) */
.navMenu a.router-link-active {
  color: #fddb3a; /* Yellow color for the active link */
}

/* Styling for the 'dot' element displayed under navigation items */
.navMenu .dot {
  position: absolute;
  bottom: -1rem;
  width: 6px;
  height: 6px;
  background: #fddb3a; /* Same color as the active link */
  border-radius: 50%; /* Makes the element circular */
  opacity: 0; /* Starts invisible */
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out; /* Smooth transitions for movement and visibility */
}

/* Styling for when the navigation is expanded */
.expanded {
  width: 100vw;
  border-radius: 0;
  top: 0;
}

/* Styling for when the navigation is fixed */
.fixed {
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  z-index: 1000;
}
</style>
