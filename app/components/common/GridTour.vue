<template>
  <NuxtLink
    dir="rtl"
    :to="link"
    class="relative rounded-xl overflow-hidden max-h-80 max-w-72 text-right"
  >
    <div :class="['max-w-72 h-44', minWidth ? 'min-w-72' : '']">
      <NuxtImg
        provider="ipx"
        :src="src"
        :quality="quality"
        :height="height"
        :width="width"
        format="webp"
        loading="lazy"
        :modifiers="{ w: width, h: height }"
        class="w-full h-full object-cover rounded-xl shadow"
      />
    </div>

    <div :class="['max-w-72 max-h-44', minWidth ? 'min-w-72' : '']">
      <div class="relative mx-2 -top-8 bg-white rounded-xl px-4 py-3 shadow border-b border-gray-blue-300">
        <h5 class="font-bold mb-3 text-gray-blue-1000 text-base">{{ title }}</h5>
        <div
          v-if="agency && agency"
          class="flex justify-between text-gray-blue-700 text-sm border-b border-gray-blue-50 pb-2.5 mb-2"
        >
          <div class="flex items-center">
            <Icon
              name="fluent:person-support-20-regular"
              size="20"
            />
            <span class="mr-1">{{ agency }}</span>
          </div>
          <div class="flex items-center">
            <Icon
              name="fluent:airplane-take-off-20-regular"
              size="22"
            />
            <span class="mr-1">{{ airline }}</span>
          </div>
        </div>
        <div class="h-12 text-gray-blue-700 text-xs space-x-2 flex justify-between items-center">
          <div>
            <span>{{ $t('common.priceStartsFrom') }}:</span>
          </div>
          <div class="text-left">
            <div>
              <strong class="text-blue-accent-400 text-base font-black">{{ price }}</strong>
              <span class="mr-1.5 w-5 inline-block">{{ $t('currencies.irt') }}</span>
            </div>
            <div v-if="dollarPrice">
              <span class="ml-1">+</span>
              <strong class="text-blue-accent-400 text-base font-black">{{ dollarPrice }}</strong>
              <span class="mr-1.5 w-5 inline-block text-right">{{ $t('currencies.usd') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="nightCount"
      class="absolute top-1 right-1"
    >
      <span class="bg-gray-blue-50 opacity-80 text-sm flex items-center font-medium rounded text-gray-blue-1000 pr-1.5 pl-2.5 py-0.5 shadow rounded-tr-xl rounded-bl-xl">
        <Icon
          name="mynaui:moon"
          size="14"
        />
        <span class="mr-1">{{ nightCount }} {{ $t('common.night') }}</span>
      </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface PropsDefinition {
  src: string;
  link: string;
  title: string;
  agency?: string;
  nightCount?: string;
  airline?: string;
  price?: string;
  dollarPrice?: string;
  height?: number;
  width?: number;
  quality?: number;
  minWidth?: boolean;
}

withDefaults(defineProps<PropsDefinition>(), {
  quality: 100,
  minWidth: false,
});
</script>
