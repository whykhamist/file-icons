import { type Component, defineAsyncComponent } from "vue";
import { VueComponent as FileIcon } from "@whykhamist/file-icons";

type IComponents = Record<string, Component>;

const components: IComponents = {
  CodeBlock: defineAsyncComponent(() => import("./codeBlock.vue")),
  FileIcon,
  FAQ: defineAsyncComponent(() => import("./faq.vue")),
  API: defineAsyncComponent(() => import("./api/index.vue")),
  Dialog: defineAsyncComponent(() => import("./dialog.vue")),
  ThemeToggle: defineAsyncComponent(() => import("./themeToggle.vue")),
  IconInfo: defineAsyncComponent(() => import("./iconInfo/index.vue")),

  Card: defineAsyncComponent(() => import("./card/index.vue")),
  CardHeader: defineAsyncComponent(() => import("./card/header.vue")),
  CardBody: defineAsyncComponent(() => import("./card/body.vue")),
};

export default components;
