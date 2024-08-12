<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ApiParameterProps } from "../../types";

const route = useRoute();
const router = useRouter();

const APIParameter = defineAsyncComponent(() => import("./parameter.vue"));
const props = defineProps<{
  api: string;
  type?: string;
  description: string;
  params?: Array<ApiParameterProps>;
  id?: string;
}>();

const copyHashRoute = (id: string) => {
  let routeLink = router.resolve({ hash: `#${id}` }).href;
  const absoluteURL = new URL(routeLink, window.location.origin).href;
  navigator.clipboard.writeText(absoluteURL);
};
</script>

<template>
  <div :id="id" class="flex flex-col gap-2">
    <div class="group relative -mx-5 flex gap-2 px-5">
      <span class="rounded-lg bg-foreground/15 px-2 text-xl font-semibold">
        {{ api }}
      </span>
      <template v-if="!!type">
        :<span
          class="flex items-center justify-center rounded-md bg-foreground/5 px-2 leading-none text-[#4EC9B0]"
        >
          {{ type }}
        </span>
      </template>
      <span
        v-if="!!id"
        class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer select-none text-accent group-hover:inline-block md:hidden"
        @click="copyHashRoute(id)"
      >
        #
      </span>
    </div>
    <div class="px-3" v-html="description"></div>
    <div
      v-if="!!params && Object.keys(params).length > 0"
      class="flex flex-col divide-y divide-foreground/15 px-3"
    >
      <div class="text-lg font-semibold">Parameters</div>
      <template v-for="param in params" :key="`${param.name}`">
        <APIParameter
          :name="param.name"
          :type="param.type"
          :defaultValue="param.defaultValue"
          :description="param.description"
          :required="param.required"
          class="py-3"
        />
      </template>
    </div>
  </div>
</template>
