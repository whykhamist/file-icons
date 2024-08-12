<script setup lang="ts">
import { nextTick, onMounted, ref, watch, computed } from "vue";
import { setPaths } from "../fi";
import type { IOptions } from "../types";

const props = withDefaults(
  defineProps<{
    name: string;
    tag?: string;
    options?: IOptions;
  }>(),
  {
    tag: "span",
  }
);

const el = ref<HTMLElement>();

const options = computed(() => ({
  tag: props.options?.tag,
  classPrefix: props.options?.classPrefix,
}));

const setIconPaths = () => {
  nextTick(() => {
    setPaths(el.value, options.value);
  });
};

watch([() => props.name, options], setIconPaths);
onMounted(setIconPaths);
</script>

<template>
  <component :is="tag" ref="el" :class="`fi fi-${name}`"> </component>
</template>
..
