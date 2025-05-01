import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  srcDir: "src",
  ssr: true,
  nitro: {
    preset: "github-pages",
    serveStatic: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    provider: "ipx",
  },
  app: {
    head: {
      title: '涼茶體質匹配助手',
      htmlAttrs: {
        lang: 'zh-HK',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
      ]
    }
  },
})