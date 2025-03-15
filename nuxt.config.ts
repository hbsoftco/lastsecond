import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({

  modules: [
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'vue3-carousel-nuxt',
  ],

  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      title: 'انتخاب هوشمند سفر و تفریح | لست سکند، تور لحظه آخری',
      meta: [
        { name: 'theme-color', content: '#000000' },
        {
          name: 'description',
          content: 'لست سکند مرجعی برای مقایسه و انتخاب تور های مسافرتی, تور های لحظه آخری, نقد و بررسی هتل ها و آژانس های مسافرتی و سفرنامه های کاربران ایرانی',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
      },
    },
  },

  fonts: {
    families: [
      {
        name: 'Dana',
        weights: ['400', '700', '900', '300', '500'],
      },
    ],
  },

  headlessui: {
    prefix: 'Headless',
  },

  i18n: {
    vueI18n: '~/i18n/i18n.config.ts',
  },

  icon: {
    // customCollections: [
    //   {
    //     prefix: 'local',
    //     dir: '~/assets/icons',
    //   },
    // ],
  },

  image: {
    quality: 80,
    format: ['webp'],
    domains: ['last-cdn.com'],
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365,
    },
  },
});
