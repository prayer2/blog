<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
    
    <!-- Hero Section -->
    <div class="text-center max-w-4xl mx-auto mb-16 space-y-8 mt-10">
      <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 mb-4 border border-blue-100 dark:border-blue-800">
        <span class="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
        Vue 3 + Nuxt 3 强力驱动
      </div>
      
      <h1 class="text-5xl sm:text-7xl font-black tracking-tight text-gray-900 dark:text-white">
        这里是由
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
          AI 结对编程
        </span>
        构建的空间
      </h1>
      
      <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        欢迎来到我的数字花园。这里记录了前沿的技术探索、AI 实践指南，以及偶尔的突发奇想。
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          开始阅读 &rarr;
        </NuxtLink>
        <a 
          href="https://github.com/prayer2/blog"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
        >
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
          </svg>
          查看源码
        </a>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mt-10">
      <div class="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-4 text-2xl">⚡</div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">极致极速体验</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">基于 Nuxt 3 测试，享受极快的冷启动和丝滑的用户浏览体验。</p>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-4 text-2xl">📝</div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">纯 Markdown</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">使用方便的内容引擎，只需编写 md 即可自动生成带代码高亮的漂亮文章。</p>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-4 text-2xl">🎨</div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind 设计</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">完全通过 Utility-first CSS 进行设计，轻松具备暗黑模式切换和全屏响应式。</p>
      </div>
    </div>
  </div>
</template>
