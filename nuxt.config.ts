// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  devtools: { enabled: true },

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/ui", "@nuxtjs/color-mode"],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  compatibilityDate: "2025-03-06",
});