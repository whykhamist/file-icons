<script setup lang="ts">
import { catalog } from "@whykhamist/file-icons";
const props = defineProps<{
  name: string;
}>();

const VCode = (name: string): string => {
  let result =
    'import { VueComponent as FileIcon } from "@whykhamist/file-icons";\n\n';
  result += `<FileIcon name="${name}" class="..."></FileIcon>`;
  return result;
};

const basicCode = (name: string): string => {
  let result = `<span class="fi fi-${name}">\n`;
  for (let i = 0; i < catalog[name]; i++) {
    result += `\t<span class="path${i + 1}"></span>\n`;
  }
  result += "</span>";
  return result;
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <FileIcon :name="name" class="text-8xl" />
      <table class="flex-auto">
        <tbody class="[&>tr>td] [&>tr>td]:px-2 [&>tr>td]:py-1">
          <tr>
            <td class="text-foreground/50">Name</td>
            <td>
              <div
                class="flex-auto rounded-lg border border-foreground/25 bg-foreground/5 px-3 text-foreground"
              >
                {{ name }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-foreground/50">Path Count</td>
            <td>
              <div
                class="flex-auto rounded-lg border border-foreground/25 bg-foreground/5 px-3 text-foreground"
              >
                {{ catalog[name] }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-foreground/50">Class name</td>
            <td>
              <div
                class="flex-auto rounded-lg border border-foreground/25 bg-foreground/5 px-3 text-foreground"
              >
                {{ `fi fi-${name}` }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="">
      <div class="text-foreground/50">Basic</div>
      <CodeBlock :code="basicCode(name)" class="overflow-auto px-3 py-1" />
    </div>
    <div class="">
      <div class="text-foreground/50">Vue</div>
      <CodeBlock :code="VCode(name)" class="overflow-auto px-3 py-1" />
    </div>
  </div>
</template>
