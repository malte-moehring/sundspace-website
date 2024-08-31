<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ConfirmationComponent from '../components/ConfirmationComponent.vue';
import Navbar from '../components/NavBarComponent.vue';
import Footer from '../components/FooterComponent.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const showConfirmation = computed(() => store.getters.showConfirmation);
</script>

<template>
  <ConfirmationComponent />
  <div :class="{ 'app-content-blur': showConfirmation }" id="app-content">
    <header>
      <Navbar></Navbar>
    </header>
    <RouterView />
    <div class="breaker"></div>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="css">
.app-content-blur {
  filter: blur(5px);
  transition: filter 0.5s ease-in-out;
}

#app-content {
  min-height: 100vh;
}

.breaker {
  height: 10rem;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    padding: 0 2rem;
    margin: 0 auto;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 1rem;
    margin-top: 1rem;
  }
}
</style>
