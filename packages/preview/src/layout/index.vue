<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const SideBar = defineAsyncComponent(() => import("./sidebar.vue"));
const RSideBar = defineAsyncComponent(() => import("./rSidebar.vue"));

const route = useRoute();
const transitioning = ref(false);
const sbar = ref(false);

const scrollTo = (el: HTMLElement) => {
  let y = el.getBoundingClientRect().top + window.scrollY - 50;
  window.scrollTo({ top: y });
};

const scrollToHash = (hash: string) => {
  let el = document.querySelector(hash);
  !!el && scrollTo(el as HTMLElement);
};

watch(route, (val) => {
  sbar.value = false;
});

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      scrollToHash(route.hash);
    }, 250);
  }
});
</script>

<template>
  <div class="flex min-h-screen flex-col pt-12">
    <div
      class="fixed top-0 z-40 h-12 w-full border-b border-foreground/25 px-5 py-2 backdrop-blur-lg md:border-transparent"
    >
      <div class="mx-auto flex w-full max-w-7xl items-center gap-2">
        <button
          class="aspect-square rounded-full p-1 leading-none md:hidden"
          @click="sbar = !sbar"
        >
          <span class="icon icon-menu text-xl"></span>
        </button>
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
    <div class="relative mx-auto flex w-screen max-w-7xl flex-auto">
      <transition
        enter-from-class="-translate-x-full"
        leave-to-class="-translate-x-full"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
      >
        <SideBar
          v-show="sbar"
          class="fixed left-0 top-0 border-r border-foreground/25 transition-all md:sticky md:-mt-12 md:!block md:!translate-x-0 md:border-transparent"
        />
      </transition>
      <div
        v-if="sbar"
        class="fixed block h-screen w-screen bg-foreground/10 md:hidden"
        @click="sbar = false"
      />
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
      <RSideBar
        class="fixed right-0 top-0 hidden lg:sticky lg:-mt-12 lg:block"
      />
    </div>
  </div>
</template>
