// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/sitemap'],
  site: {
    url: 'https://jianghuayan.me', // 正式绑定的域名，用于自动生成正确的 SEO Sitemap
  },
  colorMode: {
    classSuffix: '', // Tailwind 需要的是 .dark，而默认是 .dark-mode，所以把后缀去掉
  },
  content: {
    highlight: {
      theme: 'github-dark', // 为代码块配置 GitHub 风格暗色主题
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
})
