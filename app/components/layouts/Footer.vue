<template>
  <footer class="">
    <div class="bg-gray-blue-700">
      <div class="max-w-[91rem] mx-auto">
        <div class="grid grid-cols-12 gap-4">
          <div
            v-for="(section, index) in footerSections"
            :key="index"
            class="col-span-2 gap-3 py-10"
          >
            <h6 class="font-bold text-white mb-6 text-lg">
              {{ section.title }}
            </h6>
            <ul>
              <li
                v-for="(link, linkIndex) in section.links"
                :key="linkIndex"
                class="mb-3"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-gray-blue-400 text-sm duration-200 transition-all hover:text-gray-blue-300"
                >
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="col-span-5 gap-3 py-6">
            <div>
              <div class="py-5">
                <NuxtImg
                  provider="ipx"
                  src="https://cdn.lastsecond.ir/last6-assets/img/logo--white--lg.209876f.png"
                  quality="100"
                  width="140"
                  height="32"
                  format="webp"
                  loading="lazy"
                  :modifiers="{ w: 140, h: 32 }"
                />
              </div>
              <div class="pb-6">
                <p class="text-gray-blue-400 text-sm text-justify">
                  لست‌سکند در سال ۸۹ با هدف ارائه خدمات متفاوت و با کیفیت به شما عزیزان در صنعت گردشگری تاسیس شده است.
                  سیاست اصلی سایت، ارائه اطلاعات کامل و صحیح و بدون جهت گیری و جانب داری و بدون واسطه میباشد.  کاربران نیز مواجه شده است.
                </p>
              </div>

              <div class="flex space-x-3">
                <NuxtLink to="/">
                  <NuxtImg
                    provider="ipx"
                    src="img/ecunion-logo-min--150x160xtp.webp"
                    quality="100"
                    width="80"
                    height="80"
                    format="webp"
                    loading="lazy"
                    :modifiers="{ w: 90, h: 90 }"
                    class="rounded"
                  />
                </NuxtLink>
                <NuxtLink to="/">
                  <NuxtImg
                    provider="ipx"
                    src="img/enamad-last--150x160xtp.webp"
                    quality="100"
                    width="80"
                    height="80"
                    format="webp"
                    loading="lazy"
                    :modifiers="{ w: 90, h: 90 }"
                    class="rounded"
                  />
                </NuxtLink>
                <NuxtLink to="/">
                  <NuxtImg
                    provider="ipx"
                    src="img/gardeshgari-min--150x160xtp.webp"
                    quality="100"
                    width="80"
                    height="80"
                    format="webp"
                    loading="lazy"
                    :modifiers="{ w: 90, h: 90 }"
                    class="rounded"
                  />
                </NuxtLink>
                <NuxtLink to="/">
                  <NuxtImg
                    provider="ipx"
                    src="img/samandehi--150x160xtp.webp"
                    quality="100"
                    width="80"
                    height="80"
                    format="webp"
                    loading="lazy"
                    :modifiers="{ w: 90, h: 90 }"
                    class="rounded"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-blue-950 text-gray-blue-300">
      <div class="max-w-[91rem] mx-auto">
        <div class="flex justify-between items-center pb-2 pt-4">
          <div>
            <p class="flex items-center">
              <Icon
                name="ic:baseline-copyright"
                size="18"
              />

              <span class="mr-1 text-sm">تمامی حقوق این وبگاه از آنِ لست‌سکند است. | ۱۳۸۹ - ۱۴۰۳</span>
            </p>
          </div>

          <div class="space-x-3 flex items-center">
            <strong class="text-white font-bold">021-72956000</strong>

            <NuxtLink to="/">
              <Icon
                name="mynaui:brand-instagram"
                size="24"
                class="text-white"
              />
            </NuxtLink>
            <NuxtLink to="/">
              <Icon
                name="hugeicons:telegram"
                size="24"
                class="text-white"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const footerSections = [
  {
    title: 'لینک‌های کاربردی',
    links: [
      { title: 'تماس با ما', to: '/' },
      { title: 'درباره ما', to: '/' },
      { title: 'تبلیغات', to: '/' },
      { title: 'ثبت نام آژانس', to: '/' },
    ],
  },
  {
    title: 'تورهای پرطرفدار',
    links: [
      { title: 'تور استانبول', to: '/' },
      { title: 'تور آنتالیا', to: '/' },
      { title: 'تور دبی', to: '/' },
      { title: 'تور ترکیه', to: '/' },
      { title: 'تور کیش', to: '/' },
    ],
  },
  {
    title: 'سایر بخش‌ها',
    links: [
      { title: 'رستوران', to: '/' },
      { title: 'جاذبه', to: '/' },
      { title: 'ویدیو', to: '/' },
    ],
  },
];
</script>
