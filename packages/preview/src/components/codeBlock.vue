<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  format: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: null,
    validator: (val: string) =>
      ["javascript", "json", "xml", "css"].indexOf(val) > -1,
  },
});

const highlightedCode = computed<string>(() =>
  props.format ? formatCode(props.code) : props.code
);

const formatCode = (code: string): string => {
  if (props.type !== null) {
    return hljs.highlight(code, {
      language: props.type,
    }).value;
  }
  return hljs.highlightAuto(code).value;
};
</script>

<template>
  <div
    class="overflow-auto rounded-lg border border-foreground/25 bg-black bg-opacity-5 p-5 font-mono text-sm dark:bg-opacity-50"
  >
    <slot :html="highlightedCode">
      <pre><code v-html="highlightedCode"></code></pre>
    </slot>
  </div>
</template>
