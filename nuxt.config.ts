import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  // 字體
  fonts: {
    defaults: {
      subsets: ['chinese-traditional'],
      fallbacks: {
        'sans-serif': ['Noto Sans TC']
      }
    },
    families: [
      {
        name: 'Noto Sans TC',
        provider: 'google'
      }
    ]
  },
  // SEO 和 meta 設定
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '我的 Nuxt3 專案',
      meta: [
        { name: 'description', content: '使用 Nuxt3 建立的現代化網站' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: '我的 Nuxt3 專案' },
        { property: 'og:description', content: '使用 Nuxt3 建立的現代化網站' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // CSS 設定
  css: ['~/assets/css/main.css'],

  // Build 配置 - 處理 ECharts SSR 問題
  build: {
    transpile: ['vue-echarts', 'echarts']
  },

  // Nitro 設定（用於 SEO）
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // SEO 相關設定
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: '我的 Nuxt3 專案',
      siteDescription: '使用 Nuxt3 建立的現代化網站',
    }
  }
})