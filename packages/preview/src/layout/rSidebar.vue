<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

type INav = Record<
  string,
  Array<{
    label: string;
    hash?: string;
    children?: Array<{
      label: string;
      hash: string;
    }>;
  }>
>;

const navigations = ref<INav>({
  api: [
    {
      label: "Objects",
      children: [
        {
          label: "Catalog",
          hash: "#catalog",
        },
      ],
    },
    {
      label: "Methods",
      children: [
        {
          label: "setPaths",
          hash: "#set-paths",
        },
        {
          label: "appendChildPath",
          hash: "#append-child-path",
        },
        {
          label: "clearChildPaths",
          hash: "#clear-child-paths",
        },
      ],
    },
    {
      label: "Type Declarations",
      hash: "#types",
    },
  ],
  basic: [
    {
      label: "Basic Use",
      children: [
        {
          label: "Child Elements",
          hash: "#children",
        },
        {
          label: "Path count",
          hash: "#path-ctr",
        },
        {
          label: "A Quicker way",
          hash: "#quick",
        },
      ],
    },
  ],
});

const nav = computed(() => {
  const n = navigations.value[route.name as keyof typeof navigations.value];
  return n ?? [];
});
</script>

<template>
  <div
    class="z-30 h-screen w-64 min-w-64 overflow-auto px-3 pb-12 pt-3 backdrop-blur-lg"
  >
    <div class="flex w-full flex-col gap-5 pt-12">
      <div class="flex flex-col gap-1 px-3">
        <template v-for="n in nav" :key="n.label">
          <router-link
            v-if="!!n.hash"
            :to="{ hash: n.hash }"
            class="text-xl text-primary hover:underline"
          >
            {{ n.label }}
          </router-link>
          <div v-else class="text-xl">
            {{ n.label }}
          </div>
          <div
            v-if="!!n.children && n.children.length > 0"
            class="flex flex-col gap-2 pl-3"
          >
            <template v-for="c in n.children" :key="c.label">
              <router-link
                :to="{ hash: c.hash }"
                class="text-lg text-primary hover:underline"
              >
                {{ c.label }}
              </router-link>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
