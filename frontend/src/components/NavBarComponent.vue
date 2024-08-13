<template>
      <RouterLink to="/rakete">Rakete</RouterLink>
    <!-- The main div that wraps the navigation menu -->
    <div class="navDiv">
      <!-- Navigation element containing links to different pages -->
      <nav class="navMenu">
        <!-- RouterLink components for navigating between pages -->
        <RouterLink to="/" exact>Start</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/rakete">Rakete</RouterLink>
        <RouterLink to="/wettbewerb">Wettbewerb</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        <RouterLink to="/sponsoring">Sponsoring</RouterLink>
        <!-- Small dot that indicates the current position in the menu -->
        <div class="dot"></div>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      // onMounted ensures the following code is executed once the component is mounted to the DOM.
      onMounted(() => {
        // References to the navigation menu and the movable dot
        const menu = document.querySelector('.navMenu') as HTMLElement;
        const dot = document.querySelector('.dot') as HTMLDivElement;
        // Convert all links within the navigation menu to an array
        const items = menu ? Array.from(menu.querySelectorAll('a')) as HTMLAnchorElement[] : [];
  
        // Function to update the dot's position based on the currently hovered menu item
        const updateDotPosition = () => {
          // Find the link that is currently being hovered over
          const hoveredItem = items.find(item => item.matches(':hover'));
          if (hoveredItem && dot) {
            // Calculate the position and width of the hovered link, and position the dot accordingly
            const itemWidth = hoveredItem.offsetWidth;
            const itemPosition = hoveredItem.offsetLeft;
            dot.style.transform = `translateX(${itemPosition + itemWidth / 2 - dot.offsetWidth / 2}px)`;
            dot.style.opacity = '1'; // Make the dot visible
          }
        };
  
        // Add event listeners to each menu item
        items.forEach(item => {
          // Update the dot position when hovering over the link
          item.addEventListener('mouseover', updateDotPosition);
          // Reset the dot's visibility when the mouse leaves the link
          item.addEventListener('mouseleave', () => {
            if (dot) {
              dot.style.opacity = '0'; // Make the dot invisible
            }
          });
        });
  
        // Set transition effects for the dot to make movements smooth
        if (dot) {
          dot.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
        }
      });
    }
  };
  </script>
  
  <style scoped lang="css">
  /* Importing the Montserrat font */
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
  
  /* General reset styles for the browser */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Styles for the main div that wraps the navigation menu */
  .navDiv {
    margin-top: 2.5%;
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    background-color: #272727;
    border-radius: 20px;
  }
  
  /* Styles for the navigation menu */
  .navMenu {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 800px;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Styles for the links inside the navigation menu */
  .navMenu a {
    color: #dadada;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 15px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  
  /* Styles for the small dot indicating the hovering link */
  .navMenu .dot {
    position: absolute;
    bottom: -10px;
    width: 6px;
    height: 6px;
    background: #fddb3a;
    border-radius: 50%;
    opacity: 0;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  
  /* Style for the active link */
  .navMenu .router-link-active {
    color: #fddb3a;
  }
  </style>
  