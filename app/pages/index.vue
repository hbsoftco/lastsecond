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
        {{ $t('pages.home.popularDepartureTours') }}
      </h2>
      <div dir="ltr">
        <Carousel
          v-bind="carouselConfig"
        >
          <Slide
            v-for="tour in popularTours"
            :key="tour"
          >
            <div>
              <PopularTour
                :src="tour.src"
                :width="tour.width"
                :height="tour.height"
                :price="tour.price"
                :link="tour.link"
                :tour-count="tour.tourCount"
                :departure="tour.departure"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <!-- Popular departure city  -->

    <div class="l-container pb-96">
      <h2 class="text-2xl font-black mb-8">
        {{ $t('pages.home.specialTours') }}
      </h2>
      <div>
        <Carousel
          v-bind="tourCarouselConfig"
          dir="ltr"
        >
          <Slide
            v-for="tour in tours"
            :key="tour"
          >
            <div>
              <GridTour
                :src="tour.src"
                :width="tour.width"
                :height="tour.height"
                :price="tour.price"
                :dollar-price="tour.dollarPrice"
                :night-count="tour.nightCount"
                :link="tour.link"
                :airline="tour.airline"
                :title="tour.title"
                :agency="tour.agency"
                :min-width="true"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <!-- Special tours  -->
  </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/carousel.css';

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

const tours = [
  {
    src: 'https://last-cdn.com/2017/11/08/kxUln202ezwmZNxtNA6RWahHJqZY39hCCF1IsYip--300x.jpeg',
    width: 288,
    height: 176,
    price: '۳۲۱,۶۰۰,۰۰۰',
    dollarPrice: '۴۵۰',
    nightCount: '۵',
    link: '/',
    airline: 'پگاسوس',
    title: 'تور کوالالامپور',
    agency: 'گلفام سفر',
  },
  {
    src: 'https://last-cdn.com/2025/02/20/kw3NsRYZOHIeC84dpdjr94G2IuvbFnE6SjzVgzP2--300x.jpg',
    width: 288,
    height: 176,
    price: '۹۳,۶۰۰,۰۰۰',
    nightCount: '۶',
    link: '/',
    airline: 'معراج',
    title: 'تور ویتنام نورور ۱۴۰۴ (مستقیم)',
    agency: 'آویسا الهه باستان',
  },
  {
    src: 'https://last-cdn.com/2017/11/08/GG5iaYFEyzxNcS6z68UPX1ikl5sa9FZYs8CjNRPN--300x.jpeg',
    width: 288,
    height: 176,
    price: '۳۶,۶۰۰,۰۰۰',
    nightCount: '۴',
    link: '/',
    airline: 'ایران ایرتور',
    title: 'تور تونس',
    agency: 'سورتمه گشت آریا',
  },
  {
    src: 'https://last-cdn.com/2024/03/10/SNixmVfKwmqDdLBKKpJi3Y01IqFaL7XixFqBtkIs--300x.jpg',
    width: 288,
    height: 176,
    price: '۱۰۲,۶۰۰,۰۰۰',
    dollarPrice: '۴۵۰',
    nightCount: '۳',
    link: '/',
    airline: 'ایر عربیا',
    title: 'تور کوالالامپور + سنگاپور نوروز ۱۴۰۴',
    agency: 'چکاوک',
  },
  {
    src: 'https://last-cdn.com/2025/02/20/kw3NsRYZOHIeC84dpdjr94G2IuvbFnE6SjzVgzP2--300x.jpg',
    width: 288,
    height: 176,
    price: '۹۳,۶۰۰,۰۰۰',
    nightCount: '۶',
    link: '/',
    airline: 'معراج',
    title: 'تور ویتنام نورور ۱۴۰۴ (مستقیم)',
    agency: 'آویسا الهه باستان',
  },
  {
    src: 'https://last-cdn.com/2017/11/08/GG5iaYFEyzxNcS6z68UPX1ikl5sa9FZYs8CjNRPN--300x.jpeg',
    width: 288,
    height: 176,
    price: '۳۶,۶۰۰,۰۰۰',
    nightCount: '۴',
    link: '/',
    airline: 'ایران ایرتور',
    title: 'تور تونس',
    agency: 'سورتمه گشت آریا',
  },
  {
    src: 'https://last-cdn.com/2024/03/10/SNixmVfKwmqDdLBKKpJi3Y01IqFaL7XixFqBtkIs--300x.jpg',
    width: 288,
    height: 176,
    price: '۱۰۲,۶۰۰,۰۰۰',
    dollarPrice: '۴۵۰',
    nightCount: '۳',
    link: '/',
    airline: 'ایر عربیا',
    title: 'تور کوالالامپور + سنگاپور نوروز ۱۴۰۴',
    agency: 'چکاوک',
  },
];

const popularTours = [
  {
    src: 'https://last-cdn.com/2025/03/10/iGjhEu8R4QU2fmEQpzs8GsmPpeRQnzmeNJKuGXpG.jpg',
    width: 500,
    height: 372,
    price: '۳۶,۶۰۰,۰۰۰',
    link: '/',
    tourCount: '۱۰۰',
    departure: 'از تهران',
  },
  {
    src: 'https://last-cdn.com/2025/02/12/bdbm76Y1nvbjWLjSMPNM26Iiz2UyTb0YtDN7Ux2Y.jpg',
    width: 500,
    height: 372,
    price: '۳۶,۶۰۰,۰۰۰',
    link: '/',
    tourCount: '۴۳۳',
    departure: 'از مشهد',
  },
  {
    src: 'https://last-cdn.com/2025/02/16/JgBNTlhTrv8jUpKwQeGWJBWpqsr36MnqDuTO9wVd.jpg',
    width: 500,
    height: 372,
    price: '۳۶,۶۰۰,۰۰۰',
    link: '/',
    tourCount: '۶۷',
    departure: 'از شیراز',
  },
  {
    src: 'https://last-cdn.com/2024/09/16/b6P6gPWvDfo1zF93Ff6s8v9BxEFDnmMEi4n2CerM.jpg',
    width: 500,
    height: 372,
    price: '۳۶,۶۰۰,۰۰۰',
    link: '/',
    tourCount: '۸۸',
    departure: 'از اصفهان',
  },
  {
    src: 'https://last-cdn.com/2025/02/08/05hyDiwcQubgLx6kEhkZRv0AmVBHMatW8RLJmRsd.jpg',
    width: 500,
    height: 372,
    price: '۳۶,۶۰۰,۰۰۰',
    link: '/',
    tourCount: '۲۲',
    departure: 'از کاشان',
  },
];

const carouselConfig = {
  itemsToShow: 5,
  wrapAround: true,
  breakpoints: {
    300: { itemsToShow: 1 },
    400: { itemsToShow: 1 },
    500: { itemsToShow: 5 },
  },
};
const tourCarouselConfig = {
  itemsToShow: 4,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  snapAlign: 'start',
};
</script>
