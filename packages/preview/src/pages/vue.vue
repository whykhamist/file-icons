<script setup lang="ts">
import vueCode from "./samples/vue.ex?raw";
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-3xl font-semibold">VUE Component</div>
    <div>The package exports a vue component that you can use.</div>

    <CodeBlock :code="vueCode" />
  </div>
</template>
