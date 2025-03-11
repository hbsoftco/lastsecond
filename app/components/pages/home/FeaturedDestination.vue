<template>
  <div class="relative p-2">
    <div class="bg-linear-to-b from-gray-blue-500 to-gray-blue-300 rounded-full p-3">
      <NuxtImg
        :src="src"
        :quality="quality"
        :height="height"
        :width="width"
        format="webp"
        class="relative rounded-full border-8 border-gray-blue-600"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PropsDefinition {
  src: string;
  height?: number;
  width?: number;
  quality?: number;
}

withDefaults(defineProps<PropsDefinition>(), {
  height: 280,
  width: 210,
  quality: 80,
});
</script>
