<template>
  <div class="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- 左侧自定义导航卡片 -->
      <aside class="w-full md:w-64 flex-shrink-0 sticky top-24">
        <div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4 pl-2">收藏集</h2>
          <nav class="flex flex-col space-y-2">
            <!-- 网站 -->
            <button class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 font-semibold shadow-sm">
              🌐 网站
            </button>
            <!-- 电子书 -->
            <button class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300 font-medium">
              📚 电子书
            </button>
            <!-- 其他 -->
            <button class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300 font-medium">
              📦 其他
            </button>
          </nav>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="flex-1 w-full min-w-0">
        <div class="max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-10 min-h-[400px] flex items-center justify-center shadow-sm">
          <div class="text-center">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">网站收藏</h1>
            <p class="text-gray-500 dark:text-gray-400 text-lg">内容正在筹备中，敬请期待... 🛠️</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>