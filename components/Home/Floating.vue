<script setup>
import { onMounted, ref, watch, markRaw } from "vue";
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const props = defineProps({
  colorMode: String,
  modelPath: {
    type: String,
    required: true,
  },
});

let scene, camera, renderer;
const currentModel = ref(null);

const loadModel = (path) => {
  const loader = new GLTFLoader();
  loader.load(
    path,
    (gltf) => {
      if (currentModel.value) {
        scene.remove(currentModel.value);
      }
      currentModel.value = markRaw(gltf.scene);
      currentModel.value.position.set(0, 0, 0);
      currentModel.value.scale.set(1, 1, 1);
      scene.add(currentModel.value);
    },
    undefined,
    (error) => console.error("Error loading model:", error)
  );
};

onMounted(() => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("moss-container").appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  loadModel(props.modelPath);

  const animate = () => {
    requestAnimationFrame(animate);
    if (currentModel.value) {
      currentModel.value.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
    renderer.render(scene, camera);
  };
  animate();
});

watch(
  () => props.modelPath,
  (newPath) => {
    loadModel(newPath);
  }
);
</script>

<template>
  <div class="h-[115vh] w-[100vw]">
    <div id="moss-container"></div>
  </div>
</template>

<style></style>
