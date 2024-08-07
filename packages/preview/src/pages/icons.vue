<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { catalog } from "@whykhamist/file-icons";
import Fuse from "fuse.js";

const Icon = defineAsyncComponent(() => import("@/components/vFileIcon.vue"));

const name = ref("");
const search = ref("");
const fuseSearch = new Fuse(Object.keys(catalog), {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
});
const searched = computed(() => {
  return !search.value.trim()
    ? Object.keys(catalog)
    : fuseSearch.search(search.value.trim()).map((val) => val.item);
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-5">
      <label
        for="__ICON_NAME__"
        class="flex cursor-text select-none items-center rounded-lg border border-foreground/50 px-3 py-1"
      >
        <input
          id="__ICON_NAME__"
          class="min-w-full bg-transparent outline-none"
          placeholder="Enter file extension"
          v-model="name"
        />
      </label>
      <Icon :name="name" class="text-8xl text-green-700" />
    </div>
    <div
      class="sticky top-0 rounded-lg border border-foreground/25 px-3 py-1 backdrop-blur-md"
    >
      <label
        for="__ICON_SEARCH__"
        class="flex cursor-text select-none items-center rounded-lg border border-foreground/50 px-3 py-1"
      >
        <input
          id="__ICON_SEARCH__"
          class="min-w-full bg-transparent outline-none"
          placeholder="Search"
          v-model="search"
        />
      </label>

      <div class="w-full text-sm font-semibold italic">
        Found {{ searched.length }} icons
      </div>
    </div>
    <div class="flex flex-auto flex-wrap justify-center gap-5">
      <template v-if="searched.length <= 0">
        <div class="text-center text-lg font-semibold italic text-gray-400">
          No Result
        </div>
      </template>
      <template v-for="cat in searched" :key="`${cat}_${catalog[cat]}`">
        <div
          class="flex w-40 cursor-pointer flex-col items-center gap-2 rounded-lg border border-foreground/25 px-3 pt-2 hover:bg-foreground/25"
          @click="name = cat"
        >
          <Icon :name="cat" class="text-8xl" />
          <div class="text-start text-sm font-semibold">
            {{ `${cat}` }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
