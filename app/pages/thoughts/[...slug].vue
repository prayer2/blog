<template>
  <div class="w-full max-w-4xl mx-auto">
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
             <span v-if="doc.date">📅 {{ new Date(doc.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}</span>
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

      <!-- 评论组件 -->
      <GiscusComment />

    </ContentDoc>

    <!-- 右下角悬浮返回按钮 -->
    <NuxtLink to="/thoughts" class="fixed bottom-8 right-8 z-[90] flex items-center justify-center w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" title="返回碎碎念">
      <svg class="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </NuxtLink>
  </div>
</template>
