<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const SideBar = defineAsyncComponent(() => import("./sidebar.vue"));

const transitioning = ref(false);
</script>

<template>
  <div class="flex min-h-screen flex-col pt-10">
    <div
      class="fixed top-0 z-40 flex h-10 w-full items-center bg-background px-3 py-1"
    >
      <router-link :to="{ name: 'home' }" class="text-2xl font-semibold">
        File Icons
      </router-link>
      <div class="flex-auto"></div>
      <div class="flex items-center gap-2">
        <a href="https://github.com/whykhamist/file-icons" target="_blank">
          <span class="icon icon-github text-2xl" />
        </a>
      </div>
    </div>
    <div class="flex flex-auto">
      <SideBar />
      <div class="flex-auto">
        <router-view v-slot="{ Component }">
          <transition
            enter-from-class="opacity-0 blur-md"
            leave-to-class="opacity-0 blur-md"
            enter-active-class="transition duration-300 delay-300"
            leave-active-class="transition duration-300"
            @before-leave="transitioning = true"
            @after-enter="transitioning = false"
          >
            <component :is="Component" class="mx-auto max-w-3xl px-3">
            </component>
          </transition>
        </router-view>
        <div class="h-16" />
      </div>
    </div>
  </div>
</template>
