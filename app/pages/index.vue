<template>
  <div class="max-w-[91rem] mx-auto">
    <div class="h-[41.5625rem] bg-[url('assets/img/world_map.svg')] bg-cover bg-center mb-22">
      <div class="l-container">
        <div class="flex justify-between py-8">
          <div class="py-10">
            <h1 class="font-black text-5xl mb-4">
              با <strong class="text-primary-400 text-6xl">{{ $t('common.lastsecond') }}</strong> سفر کن
            </h1>
            <p class="text-[1.35rem] text-gray-blue-600">
              {{ $t('pages.home.tourComparisonReference') }}
            </p>

            <div class="mt-10">
              <CTA />
            </div>
          </div>
          <!-- slogan -->

          <div class="flex">
            <FeaturedDestination
              v-for="(item, index) in featuredDestinations"
              :key="index"
              :src="item.src"
            />
          </div>
          <!-- images -->
        </div>

        <div>
          <TopSearch />
        </div>
        <!-- search box -->
      </div>
    </div>
    <!-- top search -->

    <div class="l-container pb-24">
      <h2 class="text-2xl font-black mb-8">
        تور از مبدا شهرهای پرطرفدار
      </h2>
      <div class="flex space-x-4">
        <PopularTour
          src="https://last-cdn.com/2025/03/10/iGjhEu8R4QU2fmEQpzs8GsmPpeRQnzmeNJKuGXpG.jpg"
          :width="500"
          :height="372"
          price="۳۶,۶۰۰,۰۰۰"
          link="/"
          tour-count="۱۰۰"
          departure="از تهران"
        />
        <PopularTour
          src="https://last-cdn.com/2025/02/12/bdbm76Y1nvbjWLjSMPNM26Iiz2UyTb0YtDN7Ux2Y.jpg"
          :width="500"
          :height="372"
          price="۳۶,۶۰۰,۰۰۰"
          link="/"
          tour-count="۴۳۳"
          departure="از مشهد"
        />
        <PopularTour
          src="https://last-cdn.com/2025/02/16/JgBNTlhTrv8jUpKwQeGWJBWpqsr36MnqDuTO9wVd.jpg"
          :width="500"
          :height="372"
          price="۳۶,۶۰۰,۰۰۰"
          link="/"
          tour-count="۶۷"
          departure="از شیراز"
        />
        <PopularTour
          src="https://last-cdn.com/2024/09/16/b6P6gPWvDfo1zF93Ff6s8v9BxEFDnmMEi4n2CerM.jpg"
          :width="500"
          :height="372"
          price="۳۶,۶۰۰,۰۰۰"
          link="/"
          tour-count="۸۸"
          departure="از اصفهان"
        />
        <PopularTour
          src="https://last-cdn.com/2025/02/08/05hyDiwcQubgLx6kEhkZRv0AmVBHMatW8RLJmRsd.jpg"
          :width="500"
          :height="372"
          price="۳۶,۶۰۰,۰۰۰"
          link="/"
          tour-count="۲۲"
          departure="از کاشان"
        />
      </div>
    </div>
    <!-- Popular departure city  -->

    <div class="l-container pb-96">
      <h2 class="text-2xl font-black mb-8">
        تورهای ویژه
      </h2>
      <div class="flex space-x-4">
        <GridTour
          src="https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg"
          :width="288"
          :height="176"
          price="۳۲۱,۶۰۰,۰۰۰"
          dollar-price="۴۵۰"
          night-count="۵"
          link="/"
          airline="پگاسوس"
          title="تور کوالالامپور"
          agency="گلفام سفر"
        />
        <GridTour
          src="https://last-cdn.com/2025/02/20/kw3NsRYZOHIeC84dpdjr94G2IuvbFnE6SjzVgzP2--300x.jpg"
          :width="288"
          :height="176"
          price="۹۳,۶۰۰,۰۰۰"
          night-count="۶"
          link="/"
          airline="معراج"
          title="تور ویتنام نورور ۱۴۰۴ (مستقیم)"
          agency="آویسا الهه باستان"
        />
        <GridTour
          src="https://last-cdn.com/2017/11/08/GG5iaYFEyzxNcS6z68UPX1ikl5sa9FZYs8CjNRPN--300x.jpeg"
          :width="288"
          :height="176"
          price="۳۶,۶۰۰,۰۰۰"
          night-count="۴"
          link="/"
          airline="ایران ایرتور"
          title="تور تونس"
          agency="سورتمه گشت آریا"
        />
        <GridTour
          src="https://last-cdn.com/2024/03/10/SNixmVfKwmqDdLBKKpJi3Y01IqFaL7XixFqBtkIs--300x.jpg"
          :width="288"
          :height="176"
          price="۱۰۲,۶۰۰,۰۰۰"
          dollar-price="۴۵۰"
          night-count="۳"
          link="/"
          airline="ایر عربیا"
          title="تور کوالالامپور + سنگاپور نوروز ۱۴۰۴"
          agency="چکاوک"
        />
      </div>
    </div>
    <!-- Special tours  -->
  </div>
</template>

<script lang="ts" setup>
import FeaturedDestination from '~/components/pages/home/FeaturedDestination.vue';
import PopularTour from '~/components/common/PopularTour.vue';
import TopSearch from '~/components/pages/home/TopSearch.vue';
import GridTour from '~/components/common/GridTour.vue';
import CTA from '~/components/pages/home/CTA.vue';

const featuredDestinations = [
  { src: 'https://cdn.lastsecond.ir/last6-assets/img/03.5e43afa.jpg' },
  { src: 'https://cdn.lastsecond.ir/last6-assets/img/02.b25be74.jpg' },
  { src: 'https://cdn.lastsecond.ir/last6-assets/img/01.681d4fa.jpg' },
];
</script>
