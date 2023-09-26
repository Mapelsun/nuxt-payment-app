// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt3-leaflet'],
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: 'all',
  },
})

