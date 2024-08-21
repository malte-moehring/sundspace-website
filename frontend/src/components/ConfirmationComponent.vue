<template>
    <div v-if="showConfirmation" class="overlay">
      <div class="dialog">
        <p>Are you sure you want to leave this page?</p>
        <button @click="handleConfirm">Yes</button>
        <button @click="handleCancel">No</button>
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
  }
  </style>
  