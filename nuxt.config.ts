// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    //import and apply preset
    importPT: {
      as: 'Lara',
      from: './assets/presets/lara/',
    },
  }
})
