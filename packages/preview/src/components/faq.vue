<script setup lang="ts">
const props = defineProps<{
  title: string;
  content?: string;
}>();
</script>

<template>
  <div class="px-3">
    <div class="text-lg font-semibold">{{ title }}</div>
    <div class="px-3">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>
