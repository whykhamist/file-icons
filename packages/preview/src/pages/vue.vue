<script setup lang="ts">
import VueComponent from "../components/vFileIcon.vue?raw";
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-3xl font-semibold">VUE Component</div>
    <div>
      Currently, the package does not export any Vue component. You can use the
      sample code below to create your own component.
    </div>
    <CodeBlock :code="VueComponent" />
  </div>
</template>
