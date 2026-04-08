<template>
  <div class="flex flex-col xl:flex-row items-start gap-8 w-full">
    <!-- 中间文章内容区域 -->
    <div class="flex-1 w-full min-w-0 max-w-3xl mx-auto xl:mx-0">
      <ContentDoc v-slot="{ doc }">
        <article class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm overflow-hidden p-8 sm:p-12 mb-16 max-w-none">
          <header class="mb-10 text-center">
            <!-- 标签 -->
            <div v-if="doc.tags?.length" class="flex justify-center gap-2 mb-4">
              <span v-for="tag in doc.tags" :key="tag" class="px-2.5 py-1 bg-blue-100/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md text-xs font-semibold tracking-wide">
                #{{ tag }}
              </span>
            </div>

            <!-- 标题 -->
            <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              {{ doc.title }}
            </h1>

            <div class="flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-400 text-sm font-medium pt-2">
               <span>📅 {{ new Date(doc.date || Date.now()).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}</span>
            </div>
          </header>

          <div v-if="doc.cover" class="mb-10 rounded-2xl overflow-hidden shadow-md">
            <NuxtImg :src="doc.cover" class="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700 ease-in-out" />
          </div>

          <!-- 正文 -->
          <div class="prose prose-lg dark:prose-invert prose-blue max-w-none prose-img:rounded-xl prose-img:shadow-sm prose-headings:scroll-mt-24 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
            <ContentRenderer :value="doc" />
          </div>
        </article>

        <!-- 移动端底部的备用返回按钮 (大屏隐藏) -->
        <div class="block xl:hidden w-full mt-12 mb-16 text-center">
          <NuxtLink to="/thoughts" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-sm hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-900/60 dark:border-gray-800 dark:hover:bg-gray-800 transition-all duration-300">
            <svg class="w-5 h-5 mr-2 -ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回碎碎念
          </NuxtLink>
        </div>
      </ContentDoc>
    </div>

    <!-- 右侧悬浮卡片区：与左侧头像卡片精确对称 -->
    <aside class="hidden xl:flex w-full xl:w-64 flex-shrink-0 sticky top-24 flex-col gap-4">
      <NuxtLink to="/thoughts" class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300 group">
        <div class="bg-blue-50 text-blue-600 dark:text-blue-300 dark:bg-blue-900/30 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <span class="font-bold tracking-wide text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">返回列表</span>
        <span class="text-xs text-center mt-1">碎碎念</span>
      </NuxtLink>
    </aside>
  </div>
</template>