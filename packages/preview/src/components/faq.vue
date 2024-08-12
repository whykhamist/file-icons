<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps<{
  title: string;
  content?: string;
  id?: string;
}>();

const copyHashRoute = (id: string) => {
  let routeLink = router.resolve({ hash: `#${id}` }).href;
  const absoluteURL = new URL(routeLink, window.location.origin).href;
  navigator.clipboard.writeText(absoluteURL);
};
</script>

<template>
  <div :id="id" class="">
    <div class="group relative px-3 text-lg font-semibold">
      {{ title }}
      <span
        v-if="!!id"
        class="absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-accent group-hover:inline-block md:hidden"
        @click="copyHashRoute(id)"
      >
        #
      </span>
    </div>
    <div class="px-6">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>
