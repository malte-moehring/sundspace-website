<template>
  <!-- Container for the 3D rocket model -->
  <div ref="rocketContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// Import the .obj file for the rocket model
import rocketObjUrl from '../../../src/assets/models/brand_new_rocket.obj';

const rocketContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // Create a new Three.js scene
  const scene = new THREE.Scene();
  
  // Set up the perspective camera
  const camera = new THREE.PerspectiveCamera(
    75, // Field of view (in degrees)
    rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
  );

  // Set up the WebGL renderer with a transparent background
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(
    rocketContainer.value!.clientWidth,
    rocketContainer.value!.clientHeight
  );
  rocketContainer.value!.appendChild(renderer.domElement);

  // Add ambient light to the scene
  const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
  scene.add(ambientLight);

  // Add directional light to the scene
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // White light with intensity of 0.5
  scene.add(directionalLight);

  // Initialize the OBJ loader
  const loader = new OBJLoader();

  // Load the rocket model
  loader.load(
    rocketObjUrl,
    (object) => {
      object.scale.set(1, 1, 1); // Set scale of the loaded object
      scene.add(object); // Add the rocket model to the scene

      // Animation function to rotate the model
      const animate = function () {
        requestAnimationFrame(animate); // Schedule the next frame
        object.rotation.y += 0.01; // Rotate the model around the y-axis
        renderer.render(scene, camera); // Render the scene from the camera's perspective
      };

      animate(); // Start the animation loop
    },
    (xhr) => {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`); // Log loading progress
    },
    (error) => {
      console.error('An error happened:', error); // Log errors if loading fails
    }
  );

  // Set the initial camera position
  camera.position.z = 200; // Move the camera away from the model
  camera.position.y = 0; // Center the camera vertically
  camera.position.x = 0; // Center the camera horizontally

  // Ensure the camera is looking at the center of the model
  camera.lookAt(0, 0, 0);

  // Handle window resizing to adjust camera and renderer
  window.addEventListener('resize', () => {
    camera.aspect = rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight; // Update aspect ratio
    camera.updateProjectionMatrix(); // Update the camera's projection matrix
    renderer.setSize(
      rocketContainer.value!.clientWidth,
      rocketContainer.value!.clientHeight
    ); // Adjust renderer size
  });
});
</script>

<style scoped>
/* Ensure the container takes up the full size */
div {
  width: 100%;
  height: 100%;
}
</style>
