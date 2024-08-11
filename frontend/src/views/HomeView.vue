<script setup lang="ts">

</script>

<template>
  <main>
    <div class="parent">
      <div class="splash-screen">1</div>
      <div class="feed-1">2</div>
      <div class="feed-2">3</div>
      <div class="feed-3">4</div>
      <div class="feed-4">5</div>
      <div class="feed-5">6</div>
      <div class="footer">7</div>
      <div class="rocket-element">8</div>
  </div>
  </main>
</template>

<style scoped lang="css">

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 8px;
}
  
.splash-screen {
  grid-column: span 3 / span 3;
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
