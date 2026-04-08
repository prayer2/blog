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
    format: ['webp', 'avif', 'jpeg', 'png'],
    dir: 'public/images' // 指定统一图片存放基础路径（相当于自动从 /public/images 开始找图）
  },
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
