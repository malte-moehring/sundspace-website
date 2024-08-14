<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '../components/NavBarComponent.vue';
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <RouterView />
</template>

<style scoped lang="css">
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
