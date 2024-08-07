<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const IconPage = defineAsyncComponent(() => import("./icons.vue"));
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="pt-10 leading-none">
      <div class="text-3xl font-semibold leading-none">File Icons</div>
      <div class="text-sm italic leading-none">@whykhamist</div>
    </div>
    <div>
      This package uses the Vivid icons from
      <a
        href="https://github.com/dmhendricks/file-icon-vectors"
        class="rounded-lg bg-foreground/25 px-2 font-semibold leading-none text-primary hover:underline"
        target="_blank"
      >
        file-icons-vector
      </a>
    </div>
    <IconPage />
  </div>
</template>
