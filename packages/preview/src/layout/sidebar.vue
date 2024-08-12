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
          <router-link :to="{ name: 'basic' }" class="hover:underline">
            Getting started
          </router-link>
          <router-link :to="{ name: 'vue' }" class="hover:underline">
            Vue component
          </router-link>
          <router-link :to="{ name: 'api' }" class="hover:underline">
            API reference
          </router-link>
          <router-link :to="{ name: 'icons' }" class="hover:underline">
            Icons
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
