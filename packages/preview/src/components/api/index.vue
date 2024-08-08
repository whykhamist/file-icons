<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type { ApiParameterProps } from "../../types";

const APIParameter = defineAsyncComponent(() => import("./parameter.vue"));
const props = defineProps<{
  api: string;
  type?: string;
  description: string;
  params?: Array<ApiParameterProps>;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <span class="rounded-lg bg-foreground/15 px-2 text-xl font-semibold">
        {{ api }}
      </span>
      <template v-if="!!type">
        :<span class="rounded-md bg-foreground/5 px-2 text-[#4EC9B0]">
          {{ type }}
        </span>
      </template>
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
