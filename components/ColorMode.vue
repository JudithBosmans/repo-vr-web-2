<template>
  <div>
    <client-only>
      <div class="icon-container">
        <button
          class="icon"
          :class="{ active: colorMode.preference === 'light' }"
          @click="setColorMode('light')"
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
          </svg>
        </button>
        <button
          class="icon"
          :class="{ active: colorMode.preference === 'dark' }"
          @click="setColorMode('dark')"
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <!-- <button
          class="icon"
          :class="{ active: colorMode.preference === 'system' }"
          @click="setColorMode('system')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 19v-2H4.616q-.691 0-1.153-.462T3 15.385v-9.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v9.769q0 .69-.463 1.153T19.385 17H13v2h1.5q.214 0 .357.143T15 19.5t-.143.357T14.5 20h-5q-.213 0-.357-.143T9 19.5t.143-.357T9.5 19zm-6.384-3h14.769q.23 0 .423-.192t.192-.423v-9.77q0-.23-.192-.423T19.385 5H4.615q-.23 0-.423.192T4 5.616v9.769q0 .23.192.423t.423.192M4 16V5z"
            ></path>
          </svg>
        </button>
        <button
          class="icon"
          :class="{ active: colorMode.preference === 'gray' }"
          @click="setColorMode('gray')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19zm0-1h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"
            ></path>
          </svg>
        </button> -->
      </div>

      <div class="w-full mb-5">
        <p class="description">{{ colorMode.preference }} mode</p>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
// Initialize colorMode
const colorMode = useColorMode();

// Method to set the color mode preference
const setColorMode = (mode: string) => {
  colorMode.preference = mode;
};
</script>

<style scoped>
.icon-container {
  display: flex;
  gap: 5px;
}
.icon {
  cursor: pointer;
  font-size: 2em;
  transition: color 0.3s;
}

.icon:hover {
  color: red;
  fill: red;
}

.icon.active {
  /*color: var(--color-active);  Define this variable in your global CSS */
  color: red;
}
</style>
