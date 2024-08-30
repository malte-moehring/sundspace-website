<template>
    <div v-if="showConfirmation" class="overlay">
      <div class="dialog">
        <p>Wollen Sie auf die Seite des Euroc weitergeleitet werden? Sie verlassen diese Webseite.</p>
        <button @click="handleConfirm">Seite verlassen</button>
        <button @click="handleCancel">Bleib auf der Seite</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const showConfirmation = computed(() => store.getters.showConfirmation);
  
  const handleConfirm = () => {
    const confirmCallback = store.state.confirmCallback;
    store.dispatch('hideConfirmation');
    if (confirmCallback) confirmCallback();
  };
  
  const handleCancel = () => {
    const cancelCallback = store.state.cancelCallback;
    store.dispatch('hideConfirmation');
    if (cancelCallback) cancelCallback();
  };
  </script>
  
  <style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center; /* Text zentrieren, einschließlich Buttons */
    max-width: 400px; /* Setzt eine maximale Breite für die Dialogbox */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: Hinzufügen eines Schattens für einen besseren Kontrast */
  }
  
  .dialog p {
    padding-bottom: 20px;
  }
  
  .dialog button {
    margin: 0 10px; /* Abstand zwischen den Buttons */
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .dialog button:hover {
    background-color: #0056b3;
  }
  
  .button-container {
    display: flex;
    justify-content: center; /* Zentriert die Buttons */
    gap: 10px; /* Abstand zwischen den Buttons */
  }
  
  </style>
  