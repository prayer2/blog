<template>
  <div class="max-w-3xl mx-auto py-8">
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">博客文章列表</h1>
      <p class="text-gray-500 dark:text-gray-400">记录技术、生活与灵感</p>
    </div>

    <!-- 获取并遍历所有 /blog 下的文章，并按日期倒序排序（越新越靠前） -->
    <!-- 由于文件放在了子文件夹里，path="/blog" 依然有效（默认深层抓取），此处加入 sort 参数 -->
    <ContentList path="/blog" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
      <div v-if="list?.length > 0" class="space-y-6">
        <article
          v-for="post in list"
          :key="post._path"
          class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-200"
        >
          <NuxtLink :to="post._path">
            <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 truncate">
              {{ post.title }}
            </h2>
            <p v-if="post.description" class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {{ post.description }}
            </p>
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span v-if="post.date" class="font-mono">
                📅 {{ new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </span>
              <span class="font-medium text-blue-500 dark:text-blue-400 group-hover:underline">继续阅读 &rarr;</span>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div v-else class="text-center text-gray-500 py-10 bg-gray-50 dark:bg-gray-800 rounded-xl">
        暂时还没有文章发布 😢
      </div>
    </ContentList>
  </div>
</template>
