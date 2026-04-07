// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/sitemap'],
  site: {
    url: 'https://my-ai-blog.example.com', // 这是 sitemap 生成所依赖的正式网址，你后续可以修改它
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
