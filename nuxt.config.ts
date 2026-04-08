// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],
  image: {
    // 默认配置（未来你可以随时切换到 Aliyun OSS、Cloudflare R2 等 provider）
    quality: 80,
    format: ['webp', 'avif', 'jpeg', 'png']
  },
  site: {
    url: 'https://jianghuayan.me', // 正式绑定的域名，用于自动生成 正确的 SEO Sitemap
  },
  colorMode: {
    classSuffix: '', // Tailwind 需要的是 .dark，而默认是 .dark-mode，所以把后缀去掉
  },
  content: {
    highlight: {
      theme: 'github-dark', // 为代码块配置 GitHub 风格暗色主题
    },
    // 【关键修复】禁止 Nuxt Content 使用基于 Vite 的内存 IPC 去深度监听 content 目录下每个文件的每一次键盘敲击，从而彻底避免 "IPC connection closed"。
    watch: false
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
