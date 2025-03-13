// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devServer: {
    port: 3000, // Paksa guna 3000
  },

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

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

    runtimeConfig: {
      public: {
        apiBase: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      },
      kitKey: process.env.KIT_KEY,
      kitSecret: process.env.KIT_SECRET
    },

    supabase: {
      redirectOptions: {
        login: '/login',
        callback: '/confirm',
        include: ['/admin'], //protected
        exclude: [], //unprotected
        saveRedirectToCookie: false,
      },    
    },
  
    vite: {
      optimizeDeps: {
        exclude: ["cookie"],
      },
    },  

  compatibilityDate: "2025-03-06",
});