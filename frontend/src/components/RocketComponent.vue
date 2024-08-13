<template>
    <div ref="rocketContainer"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import * as THREE from 'three';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
  
  const rocketContainer = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    // Szene, Kamera und Renderer einrichten
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(rocketContainer.value!.clientWidth, rocketContainer.value!.clientHeight);
    rocketContainer.value!.appendChild(renderer.domElement);
  
    // Beleuchtung hinzufügen
    const ambientLight = new THREE.AmbientLight(0x404040); // Weiches Umgebungslicht
    scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
  
    // OBJLoader verwenden, um die .obj-Datei zu laden
    const loader = new OBJLoader();
  
    // Pfad zur .obj-Datei (dieser Pfad muss angepasst werden)
    const objPath = '../../../source-mat/rocket_v1_L1.123cd2c0a4e1-4c91-4403-b771-7c1ece7ac0c4/rocket_v1_L1.123cd2c0a4e1-4c91-4403-b771-7c1ece7ac0c4/12217_rocket_v1_l1.obj';
  
    loader.load(
      objPath,
      (object) => {
        // Modell zur Szene hinzufügen
        object.scale.set(0.5, 0.5, 0.5); // Skalieren, falls nötig
        scene.add(object);
  
        // Animation: Rotation gegen den Uhrzeigersinn
        const animate = function () {
          requestAnimationFrame(animate);
  
          object.rotation.y += 0.01;
  
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
  
    camera.position.z = 5;
  
    // Fenstergrößenänderung handhaben
    window.addEventListener('resize', () => {
      camera.aspect = rocketContainer.value!.clientWidth / rocketContainer.value!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(rocketContainer.value!.clientWidth, rocketContainer.value!.clientHeight);
    });
  });
  </script>
  
  <style scoped>
  div {
    width: 100%;
    height: 100%;
  }
  </style>
  