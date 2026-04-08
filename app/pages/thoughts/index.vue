<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-10 text-center md:text-left pl-2">
      <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">碎碎念</h1>
      <p class="text-gray-500 dark:text-gray-400 font-medium">分享日常生活与随感</p>
    </div>

    <!-- 获取并遍历所有 /thoughts 下的文章，并按日期倒序排序（越新越靠前） -->
    <ContentList path="/thoughts" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
      <div v-if="list?.length > 0" class="space-y-6">
        <article
          v-for="post in list"
          :key="post._path"
          class="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition duration-300 group block relative z-10"
        >
          <NuxtLink :to="post._path">
            <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 truncate group-hover:underline">
              {{ post.title || '无标题' }}
            </h2>
            <p v-if="post.description" class="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2 leading-relaxed">
              {{ post.description }}
            </p>
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-2 border-t border-gray-100 dark:border-gray-800 pt-4">
              <div class="flex items-center gap-4">
                <span v-if="post.date" class="font-mono flex items-center">
                  <svg class="w-4 h-4 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
                </span>
                <!-- 标签/分类展示 -->
                <div v-if="post.tags?.length" class="flex gap-2">
                  <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-blue-100/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md text-xs font-bold tracking-wide">
                    #{{ tag }}
                  </span>
                </div>
              </div>
              <span class="font-bold text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 hidden sm:inline-block">看看说了啥 &rarr;</span>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div v-else class="text-center py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl text-gray-500">
        暂时还没有碎碎念哦 🍂
      </div>
    </ContentList>
  </div>
</template>