<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import { catalog, setPaths } from "@whykhamist/file-icons";

onMounted(() => {
  nextTick(() => {
    setPaths();
  });
});
</script>

<template>
  <router-view />
</template>
