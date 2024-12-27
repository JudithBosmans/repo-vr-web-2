<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

onMounted(() => {
  const router = useRouter();

  // Create the Three.js scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create the WebGL renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("moss-container").appendChild(renderer.domElement);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Load the GLB model
  const loader = new GLTFLoader();
  loader.load(
    "/assets/flower4.glb",
    (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(0.1, 0.1, 0.1);
      scene.add(model);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Float effect
        model.position.y = Math.sin(Date.now() * 0.001) * 0.2;

        renderer.render(scene, camera);
      };

      animate();
    },
    undefined,
    (error) => {
      console.error("Error loading GLB model:", error);
    }
  );

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<template>
  <div class="h-[150vh] w-[100vw] absolute top-0 left-0 z-0">
    <div id="moss-container"></div>
  </div>
</template>

<style></style>
