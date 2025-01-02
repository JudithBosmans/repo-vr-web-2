<template>
  <main
    class="flex items-center justify-center min-h-screen bg-gray-900 text-white"
  >
    <section class="w-[85vw] px-6">
      <div
        class="flex items-center justify-between flex-wrap gap-6 md:flex-nowrap lg:gap-12"
      >
        <!-- Image Section -->
        <div
          class="flex items-center flex-col space-x-6 w-full md:w-1/3 lg:w-1/4"
        >
          <img
            src="/img/profile.png"
            alt="Profile Picture"
            class="rounded-full w-[15vw] h-full object-cover"
          />
          <div class="bodyText text-left">
            <p>Developer / Designer</p>
          </div>
        </div>

        <!-- Description Section -->
        <div
          class="flex flex-col space-y-4 w-full md:flex-grow min-w-[45vw] max-w-[55vw]"
        >
          <p class="text-left text-base md:text-lg leading-relaxed mb-[2vh]">
            Passionate about creating beautiful and interactive web experiences.
            I love turning complex problems into simple and intuitive designs.
            My goal is to build products that provide value and delight to the
            users.
          </p>

          <!-- Skills List -->
          <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 text-sm">
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              HTML
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              CSS
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              JavaScript
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              React & Vue
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              Adobe Suite
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              UX/UI
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-6 h-6 text-prettyRed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              Growth Mindset
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
