<template>
    <header class="header">
      <h1 class="title">Sponsor:in werden</h1>
      <blockquote class="quote">
        "Mut steht am Anfang des Handelns, Glück am Ende." - Demokrit
      </blockquote>
      <p class="description">
        Mit der Gründung von SUNSPACE konnten wir vielen jungen Menschen die Möglichkeit zu einem ersten Schritt in die Raumfahrt ermöglichen...
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
    text-align: center;
    padding: 20px;
    background: linear-gradient(135deg, #1f1f1f, #292929);
    color: white;
  }
  
  .title {
    font-size: 2.5em;
    margin-bottom: 10px;
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
  