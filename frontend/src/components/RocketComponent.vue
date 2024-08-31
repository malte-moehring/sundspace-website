<template>
  <div ref="rocketContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// Importiere die .obj-Datei
import rocketObjUrl from '../../../src/assets/models/brand_new_rocket.obj';

const rocketContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const scene = new THREE.Scene();
  
  // Define the perspective camera
  const camera = new THREE.PerspectiveCamera(
    75, // Field of view (in degrees)
    rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
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
      object.scale.set(1, 1, 1); // Adjust scaling as needed
      scene.add(object);

      // Animation function to rotate the model around the z-axis
      const animate = function () {
        requestAnimationFrame(animate);
        object.rotation.y += 0.01; // Rotate around the z-axis
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

  // Set the camera position and view
  camera.position.z = 200; // Move camera back to see the model
  camera.position.y = 0; // Adjust the vertical position to get a better view
  camera.position.x = 0;   // Center camera horizontally

  // Adjust the camera to look at the center of the model
  camera.lookAt(0, 0, 0);

  // Handle window resizing
  window.addEventListener('resize', () => {
    camera.aspect = rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight;
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
