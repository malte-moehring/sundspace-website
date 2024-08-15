<template>
  <div class="navDiv" :class="{ expanded: isExpanded, fixed: isFixed }">
    <nav class="navMenu">
      <!-- Navigation Links -->
      <RouterLink to="/" exact-active-class="router-link-active" exact>Start</RouterLink>
      <RouterLink to="/team" active-class="router-link-active">Team</RouterLink>
      <RouterLink to="/rakete" active-class="router-link-active">Rakete</RouterLink>
      <RouterLink to="/wettbewerb" active-class="router-link-active">Wettbewerb</RouterLink>
      <RouterLink to="/kontakt" active-class="router-link-active">Kontakt</RouterLink>
      <RouterLink to="/sponsoring" active-class="router-link-active">Sponsoring</RouterLink>
      <div class="dot"></div>
    </nav>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  data() {
    return {
      isExpanded: false,
      isFixed: false,
    };
  },
  setup() {
    onMounted(() => {
      const menu = document.querySelector('.navMenu');
      const dot = document.querySelector('.dot');
      const items = menu ? Array.from(menu.querySelectorAll('a')) : [];

      const updateDotPosition = () => {
        const hoveredItem = items.find((item) => item.matches(':hover'));

        if (hoveredItem && dot) {
          const itemWidth = hoveredItem.offsetWidth;
          const itemPosition = hoveredItem.offsetLeft;
          dot.style.transform = `translateX(${itemPosition + itemWidth / 2}px)`;
          dot.style.opacity = '1';
        }
      };

      items.forEach((item) => {
        item.addEventListener('mouseover', updateDotPosition);
        item.addEventListener('mouseleave', () => {
          if (dot) {
            dot.style.opacity = '0'; // Make the dot invisible
          }
        });
      });

      if (dot) {
        dot.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
      }
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        this.isExpanded = true;
      } else {
        this.isExpanded = false;
      }

      const navbar = this.$el.querySelector('.navDiv');
      if (this.isExpanded && scrollTop >= navbar.offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navDiv {
    position: fixed;
    width: 50vw;
    height: 8vh;
    padding: 10px 20px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #272727;
    transition: all 1s ease-in-out;
    z-index: 9999;
}

.navMenu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative; /* Added to position the dot correctly */
}

.navMenu a {
    color: #dadada;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 15px;
    transition: color 0.3s ease-in-out;
}

.navMenu a.router-link-active {
    color: #fddb3a; /* Die Farbe des aktiven Links */
}

.navMenu .dot {
    position: absolute;
    bottom: -1rem;
    width: 6px;
    height: 6px;
    background: #fddb3a;
    border-radius: 50%;
    opacity: 0;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.expanded {
    width: 100vw;
    border-radius: 0;
    top: 0;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
</style>
