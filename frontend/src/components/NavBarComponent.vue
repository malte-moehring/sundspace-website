<template>
    <div class="navDiv">
      <nav class="navMenu">
        <RouterLink to="/" exact>Start</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/rakete">Rakete</RouterLink>
        <RouterLink to="/wettbewerb">Wettbewerb</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        <RouterLink to="/sponsoring">Sponsoring</RouterLink>
        <div class="dot"></div>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      onMounted(() => {
        const menu = document.querySelector('.navMenu') as HTMLElement;
        const dot = document.querySelector('.dot') as HTMLDivElement;
        const items = menu ? Array.from(menu.querySelectorAll('a')) as HTMLAnchorElement[] : [];
  
        const updateDotPosition = () => {
          const hoveredItem = items.find(item => item.matches(':hover'));
          if (hoveredItem && dot) {
            const itemWidth = hoveredItem.offsetWidth;
            const itemPosition = hoveredItem.offsetLeft;
            dot.style.transform = `translateX(${itemPosition + itemWidth / 2 - dot.offsetWidth / 2}px)`;
            dot.style.opacity = '1';
          }
        };
  
        items.forEach(item => {
          item.addEventListener('mouseover', updateDotPosition);
          item.addEventListener('mouseleave', () => {
            if (dot) {
              dot.style.opacity = '0';
            }
          });
        });
  
        if (dot) {
          dot.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
        }
      });
    }
  };
  </script>
  
  <style scoped lang="css">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
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
  
  .navMenu {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 800px;
    justify-content: space-between;
    align-items: center;
  }
  
  .navMenu a {
    color: #dadada;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 15px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  
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
  