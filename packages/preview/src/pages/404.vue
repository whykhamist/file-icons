<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="relative flex flex-col items-center gap-2 text-center">
      <div class="text-9xl font-black">404</div>
      <div class="rounded-lg bg-amber-700 px-2 font-semibold text-white">
        Page Not Found
      </div>
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'home' }"
          class="rounded-lg border border-foreground px-5 py-3 font-bold uppercase"
          >Home</router-link
        >
      </div>
    </div>
  </div>
</template>
