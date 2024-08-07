<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { setPaths } from "@whykhamist/file-icons";

const props = defineProps<{
  name: string;
}>();

const el = ref<HTMLElement>();

watch(
  () => props.name,
  () => {
    nextTick(() => {
      setPaths(el.value);
    });
  }
);

onMounted(() => {
  nextTick(() => {
    setPaths(el.value);
  });
});
</script>

<template>
  <span ref="el" :class="`fi fi-${name}`"> </span>
</template>
