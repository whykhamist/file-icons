<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const SideBar = defineAsyncComponent(() => import("./sidebar.vue"));

const transitioning = ref(false);
</script>

<template>
  <div class="flex min-h-screen flex-col pt-10">
    <div class="fixed top-0 z-40 h-10 w-full px-5 py-2 backdrop-blur-sm">
      <div class="flex w-full items-center gap-2">
        <router-link :to="{ name: 'home' }" class="text-2xl font-semibold">
          File Icons
        </router-link>
        <div class="flex-auto"></div>
        <div class="flex items-stretch gap-3">
          <a
            href="https://github.com/whykhamist/file-icons"
            target="_blank"
            class="group flex items-center gap-2"
          >
            <span
              class="icon icon-github text-2xl text-foreground text-opacity-75 transition-colors group-hover:text-opacity-100"
            />
            <span
              class="border-b-2 border-transparent leading-none text-foreground/75 transition-colors group-hover:border-foreground/50"
            >
              Github
              <span class="icon icon-call_made text-xs" />
            </span>
          </a>
          <ThemeToggle
            class="text-2xl text-foreground text-opacity-75 hover:text-opacity-100"
          />
        </div>
      </div>
    </div>
    <div class="relative mx-auto flex max-w-5xl flex-auto">
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
