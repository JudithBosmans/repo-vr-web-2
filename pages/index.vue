<script setup>
import { ref, onMounted } from "vue";
import Rellax from "rellax";
import Floating from "./Floating.vue";
import Flower from "./Flower.vue";
import About from "./About.vue";

const router = useRouter();
const homepageSettings = ref(null); // For homepage.json data
const generalSettings = ref(null); // For settings.json data

const isLoading = ref(true); // Loading state
const hasError = ref(false); // Error state

// For typewriter effect
const displayedTitle = ref(""); // Title animation
const displayedSubtitle = ref(""); // Subtitle animation
const displayedCopyright = ref(""); // Copyright animation
const typingSpeed = 20; // Speed of typewriter effect

onMounted(async () => {
  const rellax = new Rellax(".rellax");
  try {
    // Fetch homepage.json
    const homepageResponse = await fetch("/_data/homepage.json");
    if (!homepageResponse.ok) {
      throw new Error(
        `Homepage settings error! status: ${homepageResponse.status}`
      );
    }
    const homepageData = await homepageResponse.json();
    homepageSettings.value = homepageData;

    // Fetch settings.json
    const settingsResponse = await fetch("/_data/settings.json");
    if (!settingsResponse.ok) {
      throw new Error(
        `General settings error! status: ${settingsResponse.status}`
      );
    }
    generalSettings.value = await settingsResponse.json();

    if (homepageSettings.value.homepageredirect == "") {
    } else {
      if (homepageSettings.value.homepageredirect) {
        const redirectPath = homepageSettings.value.homepageredirect
          ? `/page/${homepageSettings.value.homepageredirect}`
          : null;

        if (redirectPath) {
          router.push(redirectPath);
        }
      }
    }

    isLoading.value = false; // Stop loading when both files are fetched
  } catch (error) {
    hasError.value = true; // Show error message if fetching fails
    console.error("Error loading settings:", error);
  }
});
</script>

<template>
  <div>
    <!-- Loading state -->
    <div v-if="isLoading" class="flex items-center justify-center h-screen">
      <p>Loading...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="hasError" class="flex items-center justify-center h-screen">
      <p>Error loading settings. Please try again later.</p>
    </div>

    <!-- Main content -->
    <div v-else class="h-screen relative">
      <!-- Background container -->
      <div class="relative h-full">
        <!-- Background image -->
        <!-- <div
          class="absolute inset-0 bg-cover bg-center titleText"
          :style="{
            backgroundImage: `url('https://i.postimg.cc/xT3K8XBQ/0e7b977432d607551bacf2ef112afa45.jpg')`,
          }"
        ></div> -->

        <!-- Content above the background -->
        <div class="relative z-10 pr-5 bg-transparent">
          <Drawer />
        </div>

        <!-- Info section -->
        <div
          class="info flex flex-col items-center justify-center h-screen relative"
        >
          <div class="text-center p-1 lg:p-20 titleText">
            <!-- <div
              id="titleHome"
              class="text-white text-[15vw] text-right leading-[20vh]"
            >
              <h2 class="absolute bottom-10 right-10 z-10000">
                Judith <br />
                Bosmans
              </h2>
            </div> -->
            <Floating />
            <!-- <Flower class="z-100000" /> -->
            <About class="w-[100vw] h-[100vh] absolute top-[100vh] left-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#titleHome {
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 1000; */
  width: 100vw;
  height: 100vh;
}
</style>
