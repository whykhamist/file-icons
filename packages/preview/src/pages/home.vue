<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import TypeDeclaration from "../../../file-icons/src/types.ts?raw";

const IconPage = defineAsyncComponent(() => import("./icons.vue"));
const BasicUse = defineAsyncComponent(() => import("./basic.vue"));
const ApiReference = defineAsyncComponent(() => import("./apiReference.vue"));
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="pt-10 leading-none">
      <div class="text-3xl font-semibold leading-none">File Icons</div>
      <a
        href="https://github.com/whykhamist"
        class="text-sm italic leading-none"
        target="_blank"
      >
        @whykhamist
      </a>
    </div>
    <div>
      A custom font featuring icons for several types of files. It lets you show
      easily understood file type icons.
    </div>
    <div class="border-l-4 border-foreground/25 bg-foreground/5 pl-3 italic">
      This package uses the Vivid icons from
      <a
        href="https://github.com/dmhendricks/file-icon-vectors"
        class="rounded-lg font-semibold leading-none text-blue-500 hover:underline"
        target="_blank"
      >
        file-icons-vector
      </a>
    </div>
    <div class="flex flex-col gap-2 line-through">
      <div class="text-2xl font-semibold">Installation</div>
      <div>
        <pre
          class="rounded-lg border border-foreground/25 bg-black/50 px-3 py-1"
        ><span class="select-none">$ </span>npm install @whykhamist/file-icons</pre>
      </div>
    </div>
    <BasicUse />
    <ApiReference />
    <hr class="border-foreground/25" />
    <div class="flex flex-col gap-2">
      <div class="text-3xl">Type Declaration</div>

      <CodeBlock :code="TypeDeclaration" />
    </div>
  </div>
</template>
