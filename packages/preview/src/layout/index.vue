<script setup lang="ts">
import { ref } from "vue";

const transitioning = ref(false);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div
      class="flex h-10 w-full items-center border-b border-foreground/25 bg-background px-3 py-1"
    >
      <router-link :to="{ name: 'home' }" class="text-2xl font-semibold">
        File Icons
      </router-link>
      <div class="flex-auto"></div>
      <div class="flex items-center gap-2"></div>
    </div>
    <div class="flex flex-auto">
      <div
        class="sticky top-0 max-h-screen overflow-auto border-r border-foreground/25 px-3 pb-10 pt-3 backdrop-blur-sm"
      >
        <div class="w-64">
          <div class="text-xl font-semibold">Getting Started</div>
          <div class="flex flex-col gap-1 px-3">
            <router-link :to="{ name: 'installation' }">
              Installation
            </router-link>
          </div>
        </div>
      </div>
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
            <component :is="Component" class="mx-auto max-w-3xl"> </component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
