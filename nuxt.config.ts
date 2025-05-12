import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/image"],
    srcDir: "src",
    ssr: true,
    nitro: {
        preset: "github-pages",
        serveStatic: true,
        prerender: {
            crawlLinks: true,
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        provider: "ipx",
    },
});
