import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: ['@nuxtjs/color-mode'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})