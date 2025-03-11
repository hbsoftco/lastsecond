<template>
  <div class="relative h-full top-3">
    <NuxtLink
      :to="link"
      class="text-gray-blue-600 hover:text-gray-blue-700 text-base cursor-pointer font-medium py-3"
    >
      {{ text }}
    </NuxtLink>
    <span
      v-if="isNew"
      class="w-2.5 h-2.5 bg-danger-400 rounded-full absolute -left-3.5 -top-1 animate-ping"
    />
    <span
      v-if="isNew"
      class="w-2.5 h-2.5 bg-danger-400 rounded-full absolute -left-3.5 -top-1"
    />
  </div>
</template>

<script lang="ts" setup>
interface PropsDefinition {
  text: string;
  link: string;
  isNew?: boolean;
}

defineProps<PropsDefinition>();
</script>
