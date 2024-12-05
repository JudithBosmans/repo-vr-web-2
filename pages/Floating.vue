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

  // Raycaster for detecting mouse events
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let selectedObject = null;

  // Load the GLB model
  const loader = new GLTFLoader();
  loader.load(
    "/assets/moss.glb",
    (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(80, 80, 80); // Start with scale 1
      scene.add(model);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Float effect
        model.position.y = Math.sin(Date.now() * 0.001) * 0.2;

        // Hover effect
        if (selectedObject) {
          selectedObject.scale.set(80, 80, 80);
        }

        renderer.render(scene, camera);
      };

      animate();

      // Add mousemove interaction
      const onMouseMove = (event) => {
        // Calculate normalized mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections
        const intersects = raycaster.intersectObjects(scene.children, true);
        if (intersects.length > 0) {
          selectedObject = intersects[0].object;
        } else {
          selectedObject = null;
        }
      };

      window.addEventListener("mousemove", onMouseMove);

      // Add click interaction
      const onMouseClick = () => {
        if (selectedObject) {
          router.push("/selection"); // Navigate to /selection
        }
      };

      window.addEventListener("click", onMouseClick);
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
  <div class="h-screen w-screen">
    <!-- Container for the Three.js renderer -->
    <div id="moss-container" class="absolute inset-0"></div>
  </div>
</template>

<style>
/* Ensure the container fills the screen */
#moss-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
