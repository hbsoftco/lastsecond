<template>
  <div>
    <div class="inline-block">
      <ul class="flex rounded-t-xl bg-white/70 border-t border-gray-blue-50">
        <li
          class="pt-4 pb-3.5 cursor-pointer pl-4 pr-6 flex items-center border-b-2"
          :class="tabActive === 'tours' ? 'text-blue-accent-400 border-blue-accent-400' : 'border-transparent text-gray-blue-800'"
          @click="tabActive = 'tours'"
        >
          <Icon
            name="material-symbols:globe-uk"
            size="24"
          />
          <span class="mr-2 text-base font-normal">{{ $t('common.tours') }}</span>
        </li>
        <li
          class="pt-4 pb-3.5 cursor-pointer pr-4 pl-7 flex items-center border-b-2"
          :class="tabActive === 'trips' ? 'text-blue-accent-400 border-blue-accent-400' : 'border-transparent text-gray-blue-800'"
          @click="tabActive = 'trips'"
        >
          <Icon
            name="material-symbols:globe-location-pin-sharp"
            size="24"
          />
          <span class="mr-1 text-base font-normal">{{ $t('common.trips') }}</span>
        </li>
      </ul>
    </div>
    <!-- tab titles -->

    <div class="bg-white/60 rounded-xl rounded-tr-none pt-10 pb-12 px-6 shadow-md border-t border-gray-blue-50">
      <div class="flex space-x-3">
        <div class="flex">
          <HeadlessCombobox
            v-slot="{ open }"
            v-model="selectedCity"
            as="div"
            @update:model-value="query = ''"
          >
            <div class="relative mt-2">
              <HeadlessComboboxInput
                class="w-full rounded-r-md max-w-44 border-0 bg-white py-2.5 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
                :placeholder="$t('common.departureCity')"
                :display-value="(item: any) => item?.name"
                @change="query = $event.target.value"
                @blur="query = ''"
              />
              <HeadlessComboboxButton
                v-if="!selectedCity"
                class="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none"
              >
                <Icon
                  :name="`material-symbols:keyboard-arrow-${open ? 'up' : 'down'}-rounded`"
                  class="h-5 w-5 text-gray-400"
                  size="24"
                />
              </HeadlessComboboxButton>

              <div
                v-else
                class="absolute h-5 w-5 left-3 top-3 group cursor-pointer bg-gray-blue-100 hover:bg-gray-blue-200 duration-200 transition-all rounded-full flex justify-center items-center"
              >
                <Icon
                  name="material-symbols:close"
                  class="text-gray-400 group-hover:text-gray-blue-500"
                  size="16"
                  @click="clear"
                />
              </div>

              <HeadlessComboboxOptions
                v-if="filteredCity.length > 0"
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-blue-100 ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin"
              >
                <HeadlessComboboxOption
                  v-for="item in filteredCity"
                  :key="item.id"
                  v-slot="{ active, selected }"
                  :value="item"
                  as="template"
                >
                  <li :class="['relative cursor-default select-none py-2.5 pr-1 pl-6', active ? 'bg-blue-accent-400 text-white' : 'text-gray-blue-700']">
                    <div class="flex items-center">
                      <Icon
                        name="material-symbols:location-on-outline"
                        size="16"
                        class="ml-0.5"
                      />
                      <span :class="['ml-3 truncate text-xs', selected && 'font-semibold']">
                        <span>{{ item.name }}</span>
                        <span class="mr-1">({{ item.count }})</span>
                      </span>
                    </div>

                    <span
                      v-if="selected"
                      :class="['absolute inset-y-0 left-0 flex items-center pl-2', active ? 'text-white' : 'text-gray-blue-900']"
                    >
                      <Icon
                        name="material-symbols:check"
                        size="22"
                        class="h-5 w-5"
                      />
                    </span>
                  </li>
                </HeadlessComboboxOption>
              </HeadlessComboboxOptions>
            </div>
          </HeadlessCombobox>
          <!-- departure -->

          <HeadlessCombobox
            v-slot="{ open }"
            v-model="selectedCity"
            as="div"
            @update:model-value="query = ''"
          >
            <div class="relative mt-2">
              <HeadlessComboboxInput
                class="w-full rounded-l-md max-w-44 border-0 bg-white py-2.5 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
                :placeholder="$t('common.destinationCity')"
                :display-value="(item: any) => item?.name"
                @change="query = $event.target.value"
                @blur="query = ''"
              />
              <HeadlessComboboxButton
                v-if="!selectedCity"
                class="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none"
              >
                <Icon
                  :name="`material-symbols:keyboard-arrow-${open ? 'up' : 'down'}-rounded`"
                  class="h-5 w-5 text-gray-400"
                  size="24"
                />
              </HeadlessComboboxButton>

              <div
                v-else
                class="absolute h-5 w-5 left-3 top-3 group cursor-pointer bg-gray-blue-100 hover:bg-gray-blue-200 duration-200 transition-all rounded-full flex justify-center items-center"
              >
                <Icon
                  name="material-symbols:close"
                  class="text-gray-400 group-hover:text-gray-blue-500"
                  size="16"
                  @click="clear"
                />
              </div>

              <HeadlessComboboxOptions
                v-if="filteredCity.length > 0"
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-blue-100 ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin"
              >
                <HeadlessComboboxOption
                  v-for="item in filteredCity"
                  :key="item.id"
                  v-slot="{ active, selected }"
                  :value="item"
                  as="template"
                >
                  <li :class="['relative cursor-default select-none py-2.5 pr-1 pl-6', active ? 'bg-blue-accent-400 text-white' : 'text-gray-blue-700']">
                    <div class="flex items-center">
                      <Icon
                        name="material-symbols:location-on-outline"
                        size="16"
                        class="ml-0.5"
                      />
                      <span :class="['ml-3 truncate text-xs', selected && 'font-semibold']">
                        <span>{{ item.name }}</span>
                        <span class="mr-1">({{ item.count }})</span>
                      </span>
                    </div>

                    <span
                      v-if="selected"
                      :class="['absolute inset-y-0 left-0 flex items-center pl-2', active ? 'text-white' : 'text-gray-blue-900']"
                    >
                      <Icon
                        name="material-symbols:check"
                        size="22"
                        class="h-5 w-5"
                      />
                    </span>
                  </li>
                </HeadlessComboboxOption>
              </HeadlessComboboxOptions>
            </div>
          </HeadlessCombobox>
          <!-- destination -->
        </div>
        <!-- departure and destination -->

        <div class="flex items-end">
          <input
            class="w-full h-11 rounded-r-md max-w-36 cursor-pointer border-0 bg-white py-2 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
            :placeholder="$t('common.departureDate')"
            readonly
            @click="open=true"
          >
          <!-- departure date -->

          <input
            class="w-full h-11 rounded-l-md max-w-36 cursor-pointer border-0 bg-white py-2 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
            :placeholder="$t('common.returnDate')"
            readonly
            @click="open=true"
          >
          <!-- return date -->
        </div>
        <!-- departure date and return date -->

        <div>
          <HeadlessCombobox
            v-slot="{ open }"
            v-model="selectedCity"
            as="div"
            @update:model-value="query = ''"
          >
            <div class="relative mt-2">
              <HeadlessComboboxInput
                class="w-full rounded-md max-w-44 border-0 bg-white py-2.5 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
                :placeholder="$t('common.stayDuration')"
                :display-value="(item: any) => item?.name"
                @change="query = $event.target.value"
                @blur="query = ''"
              />
              <HeadlessComboboxButton
                v-if="!selectedCity"
                class="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none"
              >
                <Icon
                  :name="`material-symbols:keyboard-arrow-${open ? 'up' : 'down'}-rounded`"
                  class="h-5 w-5 text-gray-400"
                  size="24"
                />
              </HeadlessComboboxButton>

              <div
                v-else
                class="absolute h-5 w-5 left-3 top-3 group cursor-pointer bg-gray-blue-100 hover:bg-gray-blue-200 duration-200 transition-all rounded-full flex justify-center items-center"
              >
                <Icon
                  name="material-symbols:close"
                  class="text-gray-400 group-hover:text-gray-blue-500"
                  size="16"
                  @click="clear"
                />
              </div>

              <HeadlessComboboxOptions
                v-if="filteredCity.length > 0"
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-blue-100 ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin"
              >
                <HeadlessComboboxOption
                  v-for="item in filteredCity"
                  :key="item.id"
                  v-slot="{ active, selected }"
                  :value="item"
                  as="template"
                >
                  <li :class="['relative cursor-default select-none py-2.5 pr-1 pl-6', active ? 'bg-blue-accent-400 text-white' : 'text-gray-blue-700']">
                    <div class="flex items-center">
                      <Icon
                        name="material-symbols:location-on-outline"
                        size="16"
                        class="ml-0.5"
                      />
                      <span :class="['ml-3 truncate text-xs', selected && 'font-semibold']">
                        <span>{{ item.name }}</span>
                        <span class="mr-1">({{ item.count }})</span>
                      </span>
                    </div>

                    <span
                      v-if="selected"
                      :class="['absolute inset-y-0 left-0 flex items-center pl-2', active ? 'text-white' : 'text-gray-blue-900']"
                    >
                      <Icon
                        name="material-symbols:check"
                        size="22"
                        class="h-5 w-5"
                      />
                    </span>
                  </li>
                </HeadlessComboboxOption>
              </HeadlessComboboxOptions>
            </div>
          </HeadlessCombobox>
        </div>
        <!-- stayDuration -->

        <div>
          <HeadlessCombobox
            v-slot="{ open }"
            v-model="selectedCity"
            as="div"
            @update:model-value="query = ''"
          >
            <div class="relative mt-2">
              <HeadlessComboboxInput
                class="w-full rounded-md max-w-56 border-0 bg-white py-2.5 pr-3 pl-12 text-gray-blue-900 shadow-sm sm:text-sm sm:leading-6"
                :placeholder="$t('common.hotel')"
                :display-value="(item: any) => item?.name"
                @change="query = $event.target.value"
                @blur="query = ''"
              />
              <HeadlessComboboxButton
                v-if="!selectedCity"
                class="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none"
              >
                <Icon
                  :name="`material-symbols:keyboard-arrow-${open ? 'up' : 'down'}-rounded`"
                  class="h-5 w-5 text-gray-400"
                  size="24"
                />
              </HeadlessComboboxButton>

              <div
                v-else
                class="absolute h-5 w-5 left-3 top-3 group cursor-pointer bg-gray-blue-100 hover:bg-gray-blue-200 duration-200 transition-all rounded-full flex justify-center items-center"
              >
                <Icon
                  name="material-symbols:close"
                  class="text-gray-400 group-hover:text-gray-blue-500"
                  size="16"
                  @click="clear"
                />
              </div>

              <HeadlessComboboxOptions
                v-if="filteredCity.length > 0"
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-blue-100 ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin"
              >
                <HeadlessComboboxOption
                  v-for="item in filteredCity"
                  :key="item.id"
                  v-slot="{ active, selected }"
                  :value="item"
                  as="template"
                >
                  <li :class="['relative cursor-default select-none py-2.5 pr-1 pl-6', active ? 'bg-blue-accent-400 text-white' : 'text-gray-blue-700']">
                    <div class="flex items-center">
                      <Icon
                        name="material-symbols:location-on-outline"
                        size="16"
                        class="ml-0.5"
                      />
                      <span :class="['ml-3 truncate text-xs', selected && 'font-semibold']">
                        <span>{{ item.name }}</span>
                        <span class="mr-1">({{ item.count }})</span>
                      </span>
                    </div>

                    <span
                      v-if="selected"
                      :class="['absolute inset-y-0 left-0 flex items-center pl-2', active ? 'text-white' : 'text-gray-blue-900']"
                    >
                      <Icon
                        name="material-symbols:check"
                        size="22"
                        class="h-5 w-5"
                      />
                    </span>
                  </li>
                </HeadlessComboboxOption>
              </HeadlessComboboxOptions>
            </div>
          </HeadlessCombobox>
          <!-- destination -->
        </div>
        <!-- hotel -->

        <div class="flex items-end flex-1">
          <button class="bg-blue-accent-400 w-full hover:bg-blue-accent-500 transition-all duration-200 text-white py-3 rounded-md text-sm cursor-pointer shadow items-center text-center">
            {{ $t('common.search') }}
          </button>
        </div>
      </div>
    </div>

    <HeadlessTransitionRoot
      as="template"
      :show="open"
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

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <HeadlessTransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <HeadlessDialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Icon
                      name="material-symbols:calendar-month"
                      class="h-6 w-6 text-primary-500"
                      size="24"
                    />
                  </div>
                  <div class="mt-3 text-center sm:mt-5 py-18">
                    <HeadlessDialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-gray-900"
                    >
                      تقویم
                    </HeadlessDialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        اینجا تقویم قرار می‌گیرد
                      </p>
                    </div>
                  </div>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script lang="ts" setup>
const tabActive = ref<'tours' | 'trips'>('tours');

const city = [
  { id: 1, name: 'تهران', count: '۳۲۳۲۳۲' },
  { id: 2, name: 'خراسان رضوی', count: '۳۲۲' },
  { id: 3, name: 'خراسان شمالی', count: '۲۲' },
  { id: 4, name: 'اصفهان', count: '۱۱۰' },
  { id: 5, name: 'شیراز', count: '۲۲۱' },
  { id: 6, name: 'یزد', count: '۴۳' },
  { id: 7, name: 'اهواز', count: '۵۵' },
];

const query = ref('');
interface City {
  id: number;
  name: string;
  count: string;
}

const selectedCity = ref<City | null>(null);
const filteredCity = computed(() =>
  query.value === ''
    ? city
    : city.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase());
      }),
);

const clear = () => {
  selectedCity.value = null;
};

const open = ref(false);
</script>
