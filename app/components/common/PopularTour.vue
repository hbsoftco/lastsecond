<template>
  <NuxtLink
    dir="rtl"
    :to="link"
    class="relative rounded-xl w-60 h-60 shadow text-right"
  >
    <div class="w-60 h-60">
      <NuxtImg
        provider="ipx"
        :src="src"
        :quality="quality"
        :height="height"
        :width="width"
        format="webp"
        loading="lazy"
        :modifiers="{ w: width, h: height }"
        class="w-full h-full object-cover rounded-xl"
        :alt="imageAlt"
      />
    </div>
    <div
      class="absolute rounded-b-xl bottom-0 p-3 flex items-end w-full h-40 bg-linear-to-t from-gray-blue-1000 from-10% to-transparent to-90%"
    >
      <div>
        <h5 class="font-black text-2xl text-gray-blue-100 mb-2">
          {{ departure }}
        </h5>
        <p class="text-gray-blue-50 text-xs space-x-2">
          <span>{{ $t('common.priceStartsFrom') }}:</span>
          <strong class="text-white text-base font-black">{{ price }}</strong>
          <span>{{ $t('currencies.irt') }}</span>
        </p>
      </div>
    </div>
    <div class="absolute top-0.5 right-1">
      <span class="bg-gray-blue-50 opacity-80 text-xs font-medium rounded text-gray-blue-1000 pr-1.5 pl-2.5 py-0.5 shadow rounded-tr-xl rounded-bl-xl">
        {{ tourCount }} {{ $t('common.tour') }}
      </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface PropsDefinition {
  src: string;
  link: string;
  tourCount: string;
  imageAlt?: string;
  departure: string;
  price: string;
  height?: number;
  width?: number;
  quality?: number;
}

withDefaults(defineProps<PropsDefinition>(), {
  height: 372,
  width: 372,
  quality: 100,
  imageAlt: 'tour',
});
</script>
