import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({

  modules: [
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

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
});
