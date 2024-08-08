<script setup lang="ts">
import type { ApiParameterProps } from "../../types";

const props = defineProps<ApiParameterProps>();
</script>

<template>
  <div class="flex flex-col gap-2 px-3 leading-none">
    <span
      class="self-start rounded-md bg-foreground/5 px-2 text-center align-middle text-xl leading-none"
    >
      {{ name }}
    </span>
    <div class="flex flex-col gap-5 px-5">
      <div class="fllex flex-col gap-3">
        <div>
          Type:
          <div class="inline-block">
            <CodeBlock :code="type" class="px-2 py-0.5" />
          </div>
        </div>
        <div v-if="!!defaultValue">
          Default:
          <div class="inline-block">
            <CodeBlock :code="defaultValue" class="px-2 py-0.5" />
          </div>
        </div>
        <div v-if="required != undefined">
          Required:
          <div class="inline-block">
            <CodeBlock :code="`${required}`" class="px-2 py-0.5" />
          </div>
        </div>
      </div>
      <div v-if="!!description" class="flex flex-col gap-2">
        <slot>{{ description }}</slot>
      </div>
    </div>
  </div>
</template>
