<template>
  <div v-if="showConfirmation" class="overlay">
    <div class="dialog">
      <p>
        Wollen Sie auf die Seite des Euroc weitergeleitet werden? Sie verlassen
        diese Webseite.
      </p>
      <div class="button-container">
        <button id="confirm" @click="handleConfirm">Seite verlassen</button>
        <button id="deny" @click="handleCancel">Bleib auf der Seite</button>
      </div>
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

<style scoped>
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
  z-index: 1000; /* Ensure the overlay is above all other content */
}

.dialog {
  background: #272727;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dialog p {
  padding-bottom: 20px;
  color: #dadada;
}

.dialog button {
  margin: 0 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: black;
}

#deny {
  background-color: blueviolet;
}

#confirm {
  background-color: #fddb3a;
}

.dialog button:hover {
  background-color: #0056b3;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
