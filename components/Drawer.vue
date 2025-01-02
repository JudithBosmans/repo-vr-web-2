<template>
  <div class="flex animate-fade animate-once animate-delay-[500ms]">
    <div class="flex-auto w-1 pt-3"></div>
    <!-- Parent container with relative positioning -->
    <div class="flex-row pt-5 justify-end relative">
      <!-- Sticky button -->
      <button
        @click="drawer = true"
        class="bg-opacity-20 hover:bg-opacity-90 dark:bg-opacity-10 sticky top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          class="m-4"
        >
          <path
            class="iconNav"
            d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <el-drawer
    v-model="drawer"
    class="drawer min-w-[100vw] p-10"
    :direction="direction"
    :custom-class="'fixed-drawer'"
  >
    <!-- Drawer content goes here -->
    <div class="flex flex-col h-full">
      <div class="flex justify-center items-center h-full w-full">
        <div class="text-center">
          <button
            @click="navigateToAbout"
            class="text-2xl lg:text-5xl navText cursor-pointer"
          >
            About
          </button>
          <Navigations />
        </div>
      </div>
      <div class="mt-auto footer">
        <Footer />
        <UtilNav />
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { DrawerProps } from "element-plus";
import Navigations from "./Navigations.vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const direction = ref<DrawerProps["direction"]>("rtl");

const router = useRouter();

const navigateToAbout = () => {
  router.push({ path: "/", hash: "#about" }).then(() => {
    drawer.value = false;
  });
};
</script>

<style>
.flex-row button {
  align-self: flex-end;
}

.mt-auto {
  margin-top: auto;
}
</style>
