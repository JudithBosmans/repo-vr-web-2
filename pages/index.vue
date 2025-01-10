<script setup>
import { ref, onMounted } from "vue";
import Rellax from "rellax";
import Floating from "../components/Home/Floating.vue";
import Flower from "../components/Home/Flower.vue";
import About from "../components/Home/About.vue";
import ColorMode from "~/components/ColorMode.vue";

const router = useRouter();
const homepageSettings = ref(null); // For homepage.json data
const generalSettings = ref(null); // For settings.json data

const isLoading = ref(true); // Loading state
const hasError = ref(false); // Error stateconst
const colorMode = useColorMode();

const modelPath = computed(() =>
  colorMode.preference === "dark"
    ? "/assets/strawberry.glb"
    : "/assets/magnolia.glb"
);

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

    // Handle redirection
    // if (homepageSettings.value.homepageredirect) {
    //   const redirectPath = `/page/${homepageSettings.value.homepageredirect}`;
    //   router.push(redirectPath);
    // }

    // Scroll to section if hash is present
    if (window.location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
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

        <div class="relative z-10 pr-5 bg-transparent">
          <Drawer />
        </div>

        <!-- Info section -->
        <div
          class="info flex flex-col items-center justify-center h-screen relative"
        >
          <div class="text-left p-1 titleText">
            <div id="titleHome" class="titleText">
              <h2
                class="absolute top-[65%] left-[50%] translate-Y-[-30%] translate-x-[-50%] z-10000"
              >
                <span class="text-[32vw]">Judith</span> <br />
                <span class="text-[10vw]">Bosmans</span>
              </h2>
            </div>

            <Floating
              :ColorMode="ColorMode.preference"
              :modelPath="modelPath"
            />
            <!-- <Flower class="z-100000" /> -->
            <About id="about" class="w-[100vw] absolute top-[100vh] left-0" />
          </div>
        </div>
        <div class="w-[50%]">
          <p class="bodyText ml-[2vw] mt-[4vh]">
            Lorem ipsum dolor sit amet. Qui modi illum ab quod optio est
            exercitationem aliquid et consequatur quibusdam sed sint ipsa. Sed
            consequuntur repellendus vel perferendis rerum ad officia architecto
            aut quos nostrum sed accusantium repellat. Sit facilis fuga qui
            officiis laborum non fuga quasi? Aut officia illum aut voluptas
            doloribus eos voluptatum fugiat aut facilis sint et modi vitae.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
