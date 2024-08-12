<script setup lang="ts">
import BasicSample from "./samples/basic.ex?raw";
import CatalogImport from "./samples/catalog.ex?raw";
import SetPathsImport from "./samples/setPath.ex?raw";
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-3xl font-semibold">Basic Use</div>
    <div class="">
      <CodeBlock :code="BasicSample" />
    </div>
    <FAQ id="children" title="Why the child elements?">
      The SVG files have more than one color, since font glyphs can only have
      one color, it is necessary to use multiple paths for multicolor icons.
    </FAQ>
    <FAQ id="path-ctr" title="How do I know how many paths the icon need?">
      The package exports a "catalog" object that contains the number of paths
      for each icon.
    </FAQ>
    <CodeBlock :code="CatalogImport" class="mx-3" />
    <FAQ id="quick" title="Is there a quicker way to use the icons?">
      Yes, the package also exports a "setPaths" function. You can use it to set
      the number of paths for each icon. By default it will search elements with
      the class
      <span
        class="rounded-lg bg-foreground/5 px-2 font-semibold leading-none text-primary"
        >fi</span
      >
      and automatically set the number of paths based on the icon name.
    </FAQ>
    <CodeBlock :code="SetPathsImport" />
  </div>
</template>
