<style lang="scss" scoped>
.router-link-active {
  @apply text-amber-400;
}
</style>

<template>
  <div
    class="fixed left-0 top-0 z-30 h-screen w-64 min-w-64 overflow-auto px-3 pb-10 pt-3 backdrop-blur-sm"
  >
    <div class="flex w-full flex-col gap-5 pt-10">
      <div>
        <div class="flex flex-col gap-1 px-3 text-lg">
          <router-link :to="{ name: 'basic' }"> Getting started </router-link>
          <router-link :to="{ name: 'api' }"> API Reference </router-link>
          <router-link :to="{ name: 'icons' }"> Icons </router-link>
          <router-link :to="{ name: 'vue' }"> Vue Component </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
