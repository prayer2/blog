<template>
  <main class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <ContentDoc v-slot="{ doc }">
      <article>
        <!-- 头部文章元数据 -->
        <header class="mb-10 text-center">
          <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {{ doc.title }}
          </h1>
          <div class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span v-if="doc.date" class="font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              发表于 {{ new Date(doc.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </span>
          </div>
        </header>

        <!-- Markdown 内容区 -->
        <!-- prose 类来源于 @tailwindcss/typography，负责将 markdown 默认标签变漂亮 -->
        <div class="prose prose-lg prose-blue dark:prose-invert mx-auto bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
          <ContentRenderer :value="doc" />
        </div>
      </article>

      <!-- 评论组件 -->
      <GiscusComment />
      
      <!-- 返回浏览按钮 -->
      <div class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
        <NuxtLink to="/blog" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition">
          <svg class="w-5 h-5 mr-2 -ml-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
          </svg>
          返回博客列表
        </NuxtLink>
      </div>
    </ContentDoc>
  </main>
</template>
