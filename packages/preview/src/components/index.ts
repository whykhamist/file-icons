import { type Component, defineAsyncComponent } from "vue";

type IComponents = Record<string, Component>;

const components: IComponents = {
  CodeBlock: defineAsyncComponent(() => import("./codeBlock.vue")),
  FileIcon: defineAsyncComponent(() => import("./vFileIcon.vue")),
  FAQ: defineAsyncComponent(() => import("./faq.vue")),
  API: defineAsyncComponent(() => import("./api/index.vue")),
  Dialog: defineAsyncComponent(() => import("./dialog.vue")),
};

export default components;
