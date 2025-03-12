<template>
  <header class="shadow-sm h-16 relative bg-white">
    <nav class="flex justify-between items-center max-w-[91rem] mx-auto h-full">
      <div class="flex items-center">
        <div class="ml-8">
          <NuxtLink to="/">
            <NuxtImg
              src="img/logo.png"
              quality="80"
              height="42"
            />
          </NuxtLink>
        </div>
        <!-- logo -->

        <div class="text-gray-blue-600">
          <HeadlessPopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-6">
              <HeadlessPopover
                v-for="category in navigation.categories"
                :key="category.name"
                v-slot="{ open }"
                class="flex"
              >
                <div class="relative flex">
                  <HeadlessPopoverButton
                    :class="[open ? 'border-primary-400 text-primary-400' : 'border-transparent text-gray-blue-600 hover:text-gray-blue-700']"
                    class="py-3 flex relative z-10 -mb-px items-center border-b-2 text-base cursor-pointer font-medium transition-colors duration-200 ease-out outline-0"
                  >
                    {{ category.name }}

                    <Icon
                      :class="[open? 'rotate-180' : '']"
                      name="heroicons:chevron-down-16-solid"
                      size="24"
                    />
                  </HeadlessPopoverButton>
                </div>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <HeadlessPopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500 z-10">
                    <div
                      class="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div class="relative bg-white">
                      <div class="mx-auto px-8">
                        <div class="grid grid-cols-12 gap-x-8 gap-y-10 py-8">
                          <div class="col-span-8 gap-x-8">
                            <div class="border-b border-gray-blue-100 flex justify-between">
                              <div class="flex items-center">
                                <ul class="flex text-base space-x-3 relative -bottom-1">
                                  <li
                                    v-for="tab in tourTabs"
                                    :key="tab.key"
                                    class="py-2 cursor-pointer"
                                    :class="{ 'active-bb': activeTab === tab.key }"
                                    @click="setActiveTab(tab.key)"
                                  >
                                    {{ tab.title }}
                                  </li>
                                </ul>
                                <!-- tabs -->

                                <NuxtLink
                                  to="/"
                                  class="mr-8 link flex items-center pt-1"
                                >
                                  <Icon
                                    name="solar:link-circle-linear"
                                    size="17"
                                  />
                                  <span class="mr-1">{{ $t('common.seeAllTours') }}</span>
                                </NuxtLink>
                              </div>

                              <div>
                                <div class="relative bg-gray-blue-50 rounded-full mb-1">
                                  <Icon
                                    class="pointer-events-none absolute left-4 top-3 h-5 w-5 text-gray-400"
                                    name="heroicons:magnifying-glass"
                                    size="20"
                                  />
                                  <input
                                    class="h-11 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    :placeholder="$t('common.searchDots')"
                                  >
                                </div>
                                <!-- search -->
                              </div>
                            </div>
                            <!-- filters -->

                            <div class="grid grid-cols-12 pt-3 text-gray-blue-500 gap-2">
                              <div class="col-span-3 border-l border-gray-blue-100">
                                <div>
                                  <ul class="ml-1">
                                    <li
                                      v-for="i in [1, 2, 3, 4, 1, 1, 1]"
                                      :key="i"
                                      class="flex justify-between px-2 items-center cursor-pointer py-2 hover:bg-gray-blue-50 rounded transition-all duration-200"
                                    >
                                      <div class="flex items-center">
                                        <NuxtImg
                                          provider="ipx"
                                          src="https://last-cdn.com/flags/1x1/442.svg"
                                          quality="100"
                                          height="32"
                                          width="32"
                                          format="webp"
                                          loading="lazy"
                                          :modifiers="{ w: 32, h: 32 }"
                                          class="w-8 h-8 object-cover rounded shadow"
                                        />

                                        <span class="mr-2 font-medium">تور ترکیه</span>
                                      </div>

                                      <Icon
                                        name="ic:sharp-keyboard-arrow-left"
                                        size="20"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-span-3 border-l border-gray-blue-100">
                                <div>
                                  <!-- 2 -->
                                </div>
                              </div>
                              <div class="col-span-3 border-l border-gray-blue-100">
                                <div>
                                  <!-- 3 -->
                                </div>
                              </div>
                              <div class="col-span-3">
                                <div>
                                  <!-- 4 -->
                                </div>
                              </div>
                            </div>
                            <!-- content -->
                          </div>
                          <!-- link items -->
                          <div class="col-span-4">
                            <div class="flex items-center w-full justify-around space-x-2">
                              <GridTour
                                src="https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg"
                                :width="288"
                                :height="176"
                                price="۳۲۱,۶۰۰,۰۰۰"
                                dollar-price="۴۵۰"
                                night-count="۵"
                                link="/"
                                title="تور کوالالامپور"
                              />
                              <GridTour
                                src="https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg"
                                :width="288"
                                :height="176"
                                price="۳۲۱,۶۰۰,۰۰۰"
                                link="/"
                                title="تور کوالالامپور"
                              />
                            </div>
                            <div class="flex items-center w-full justify-around space-x-2">
                              <GridTour
                                src="https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg"
                                :width="288"
                                :height="176"
                                price="۳۲۱,۶۰۰,۰۰۰"
                                dollar-price="۴۵۰"
                                night-count="۵"
                                link="/"
                                title="تور کوالالامپور"
                              />
                              <GridTour
                                src="https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg"
                                :width="288"
                                :height="176"
                                price="۳۲۱,۶۰۰,۰۰۰"
                                link="/"
                                title="تور کوالالامپور"
                              />
                            </div>
                          </div>
                          <!-- featured -->
                        </div>
                      </div>
                    </div>
                  </HeadlessPopoverPanel>
                </transition>
              </HeadlessPopover>

              <MenuLink
                v-for="link in links"
                :key="link.id"
                :text="link.text"
                :link="link.link"
                :is-new="link.isNew"
              />
            </div>
          </HeadlessPopoverGroup>
        </div>
        <!-- menu -->
      </div>

      <div class="flex items-center space-x-4 text-gray-blue-600 hover:text-gray-blue-700">
        <div>
          <SearchPalette />
        </div>
        <div class="border-r border-gray-blue-200 h-6" />
        <div>
          <button class="flex items-center cursor-pointer">
            <Icon
              name="heroicons:user"
              size="20"
            />
            <span class="mr-1">ورود یا عضویت</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import SearchPalette from '~/components/layouts/SearchPalette.vue';
import MenuLink from '~/components/layouts/MenuLink.vue';
import GridTour from '~/components/common/GridTour.vue';

const navigation = {
  categories: [
    {
      id: 'tour',
      name: 'تور خارجی',
      featured: [
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'tour2',
      name: 'تور داخلی',
      featured: [
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'hotel',
      name: 'هتل',
      featured: [
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
        {
          name: 'تور آنتالیا',
          href: '#',
          imageSrc: 'https://last-cdn.com/2024/02/07/gdeTHpO79qpkuroG9TT5xapmEss2wbBjn4bva1eJ--300x.jpg',
          imageAlt: 'test.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
  ],
};

const tourTabs = [
  {
    title: useT('common.allTours'),
    key: 'allTours',
  },
  {
    title: useT('common.nowruz', { year: '۱۴۰۴' }),
    key: 'nowruz1404',
  },
];

const activeTab = ref(tourTabs[0]?.key);

const setActiveTab = (key: string) => {
  activeTab.value = key;
};

const links = [
  {
    id: '01',
    text: 'سفر به ناکجا',
    link: '/',
    isNew: true,
  },
  {
    id: '02',
    text: 'سفرساز',
    link: '/',
    isNew: false,
  },
  {
    id: '03',
    text: 'سفرنامه',
    link: '/',
    isNew: false,
  },
  {
    id: '04',
    text: 'بلاگ',
    link: '/',
    isNew: false,
  },
];
</script>
