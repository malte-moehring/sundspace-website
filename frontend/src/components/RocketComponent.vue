<template>
  <div ref="rocketContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// Importiere die .obj-Datei
import rocketObjUrl from '../../../src/assets/models/rocket.obj';

const rocketContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(
    rocketContainer.value!.clientWidth,
    rocketContainer.value!.clientHeight
  );
  rocketContainer.value!.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  const loader = new OBJLoader();

  loader.load(
    rocketObjUrl,
    (object) => {
      object.scale.set(0.5, 0.5, 0.5); // Falls nötig skalieren
      scene.add(object);

      const animate = function () {
        requestAnimationFrame(animate);
        object.rotation.z += 0.01; // Rotation gegen den Uhrzeigersinn
        renderer.render(scene, camera);
      };

      animate();
    },
    (xhr) => {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error('An error happened:', error);
    }
  );

  camera.position.z = 200;
  camera.position.y = -50;
  camera.lookAt(0, 50, -200);

  window.addEventListener('resize', () => {
    camera.aspect =
      rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      rocketContainer.value!.clientWidth,
      rocketContainer.value!.clientHeight
    );
  });
});
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
