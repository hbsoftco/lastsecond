<template>
  <div>
    <button
      class="flex items-center cursor-pointer"
      @click="open=true"
    >
      <Icon
        name="heroicons:magnifying-glass"
        size="20"
      />
      <span class="mr-1">جستجو</span>
    </button>

    <HeadlessTransitionRoot
      :show="open"
      as="template"
      appear
      @after-leave="query = ''"
    >
      <HeadlessDialog
        class="relative z-10"
        @close="open = false"
      >
        <HeadlessTransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-opacity-40 backdrop-blur-sm transition-opacity" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <HeadlessTransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
              <HeadlessCombobox @update:model-value="onSelect">
                <div class="relative">
                  <Icon
                    class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    name="heroicons:magnifying-glass"
                    size="20"
                  />
                  <HeadlessComboboxInput
                    class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="جستجو ..."
                    @change="query = $event.target.value"
                    @blur="query = ''"
                  />
                </div>

                <div
                  v-if="query === ''"
                  class="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14"
                >
                  <Icon
                    class="mx-auto h-6 w-6 text-gray-blue-400"
                    name="material-symbols-light:travel-explore"
                    size="60"
                  />
                  <p class="mt-2 text-lg font-semibold text-gray-900">
                    جستجوی تورهای داخلی، خارجی و هتل‌ها
                  </p>
                  <p class="mt-2 text-gray-blue-400">
                    جستجوی سریع برای مشاهده تورهای داخلی، خارجی و هتل‌های مورد نظر
                  </p>
                </div>

                <HeadlessComboboxOptions
                  v-if="filteredPeople.length > 0"
                  static
                  class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                >
                  <HeadlessComboboxOption
                    v-for="person in filteredPeople"
                    :key="person.id"
                    v-slot="{ active }"
                    :value="person"
                    as="template"
                  >
                    <li :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                      {{ person.name }}
                    </li>
                  </HeadlessComboboxOption>
                </HeadlessComboboxOptions>

                <div
                  v-if="query !== '' && filteredPeople.length === 0"
                  class="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14"
                >
                  <Icon
                    class="mx-auto h-6 w-6 text-gray-blue-400"
                    name="lineicons:emoji-sad"
                    size="60"
                  />
                  <p class="text-lg font-semibold mt-2 text-gray-900">
                    موردی یافت نشد!
                  </p>
                  <p class="mt-2 text-gray-500">
                    متاسفانه موردی با توجه به کلمه مورد نظر شما پیدا نشد!
                  </p>
                </div>
              </HeadlessCombobox>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script lang="ts" setup>
const people = [
  { id: 1, name: 'حسین باژن', url: '#' },
];

const open = ref(false);
const query = ref('');
const filteredPeople = computed(() =>
  query.value === ''
    ? []
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase());
      }),
);

function onSelect(person: { url: string & Location }) {
  if (person) {
    window.location = person.url;
  }
}
</script>
