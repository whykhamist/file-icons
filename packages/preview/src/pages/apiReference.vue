<script setup lang="ts">
import TypeDeclaration from "../../../file-icons/src/types.ts?raw";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const setPaths = [
  {
    name: "src",
    type: "string | HTMLElement",
    defaultValue: "fi",
    description:
      "The element that you want to set the number of paths for. If you pass a string, it will search for the element with that class name. You can also pass an HTMLElement.",
  },
  {
    name: "options",
    type: "IOptions",
    defaultValue: '{ tag: "span", classPrefix: "path" }',
  },
];

const appendChildPath = [
  {
    name: "el",
    type: "HTMLElement",
    description: "The element to append child paths to",
    required: true,
  },
  {
    name: "pathCtr",
    type: "number",
    description: "The number of paths to append",
    required: true,
  },
  {
    name: "tag",
    type: "string",
    defaultValue: "span",
    description: "The element tag to use for the paths (default: span)",
  },
  {
    name: "classPrefix",
    type: "string",
    defaultValue: "'path'",
    description: "The class prefix to use for the paths (default: path)",
  },
];
const clearChildPaths = [
  {
    name: "el",
    type: "HTMLElement",
    description: "The element to clear child paths from",
    required: true,
  },
];

const copyHashRoute = (id: string) => {
  let routeLink = router.resolve({ hash: `#${id}` }).href;
  const absoluteURL = new URL(routeLink, window.location.origin).href;
  navigator.clipboard.writeText(absoluteURL);
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-3xl font-semibold">API Reference</div>
    <div class="text-2xl font-semibold">Objects</div>
    <API
      api="catalog"
      id="catalog"
      type="ICatalog"
      description="Contains the list of icon names with their number of paths."
      class="px-3"
    />
    <div class="border-b border-foreground/25 text-2xl font-semibold">
      Methods
    </div>
    <API
      id="set-paths"
      api="setPaths(src, options)"
      type="void"
      description="This function adds the necessary number of paths to the icon rendering element. (Uses the <span class='rounded-lg border border-foreground/25 bg-foreground/5 px-2 py-0.5'>appendChildPath</span> & <span class='rounded-lg border border-foreground/25 bg-foreground/5 px-2 py-0.5'>clearChildPaths</span> functions)"
      :params="setPaths"
      class="px-3"
    />
    <API
      id="append-child-path"
      api="appendChildPath(el, pathCtr, tag, classPrefix)"
      type="void"
      description="This function adds the necessary number of paths to the icon rendering element."
      :params="appendChildPath"
      class="px-3"
    />
    <API
      id="clear-child-paths"
      api="clearChildPaths(el)"
      type="void"
      description="Clear child paths from the provided element."
      :params="clearChildPaths"
      class="px-3"
    />

    <div id="types" class="flex flex-col gap-2">
      <div class="group relative px-3 text-3xl">
        Type Declaration
        <span
          class="absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-accent group-hover:inline-block md:hidden"
          @click="copyHashRoute('types')"
        >
          #
        </span>
      </div>

      <CodeBlock :code="TypeDeclaration" />
    </div>
  </div>
</template>
