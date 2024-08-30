<template>
    <header class="header">
      <h1 class="title">Sponsor:in werden</h1>
      <blockquote class="quote">
        "Mut steht am Anfang des Handelns, Glück am Ende." - Demokrit
      </blockquote>
      <p class="description">
        Mit der Gründung von SUNSPACE möchten wir vielen jungen Menschen die Möglichkeit zu einem ersten Schritt in die Raumfahrt ermöglichen ...
      </p>
    </header>
  </template>
  
  <script>
  export default {
    name: "SponsorHeadComponent",
  };
  </script>
  
  <style scoped>
  .header {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  
  .title {
    font-weight: bold;
    font-size: 5em;
    margin-bottom: 10px;
    color: #fddb3a;
  }
  
  .quote {
    font-style: italic;
    margin-bottom: 20px;
    color: #999;
  }
  
  .description {
    font-size: 1.1em;
    line-height: 1.6;
  }
  </style>
  