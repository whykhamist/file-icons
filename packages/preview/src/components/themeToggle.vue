<script setup lang="ts">
import { onMounted, ref } from "vue";

const lsAvailable = ref(false);
const isDark = ref(true);

const toggle = () => {
  isDark.value = !isDark.value;
  setTheme(isDark.value);
};

const setTheme = (dark: boolean) => {
  isDark.value = dark;
  if (lsAvailable.value) {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const isLSAvailable = () => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
};
onMounted(() => {
  lsAvailable.value = isLSAvailable();
  if (lsAvailable.value) {
    isDark.value = localStorage.getItem("theme") === "dark";
    setTheme(isDark.value);
  }
});
</script>

<template>
  <button
    @click="toggle"
    class="relative aspect-square h-8 w-8 overflow-hidden leading-none"
  >
    <div
      class="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 leading-none transition-all"
      :class="{
        'top-1': !isDark,
        '-top-6': isDark,
      }"
    >
      <span class="icon icon-wb_sunny aspect-square w-6 leading-none" />
      <span class="icon icon-nightlight_round aspect-square w-6 leading-none" />
    </div>
  </button>
</template>
