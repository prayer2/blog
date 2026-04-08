<template>
  <div class="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- 左侧分类卡片 -->
      <aside class="w-full md:w-64 flex-shrink-0 sticky top-24">
        <div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
          <h2 class="text-xl font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-wide flex items-center">
            <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            分类标签
          </h2>
          
          <div v-if="allTags.length > 0" class="flex flex-col gap-2">
            <button
              v-for="tag in allTags"
              :key="tag"
              @click="activeTag = tag"
              :class="[
                'w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium flex justify-between items-center',
                activeTag === tag
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 font-bold shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300'
              ]"
            >
              <span>{{ tag }}</span>
              <!-- 计数器 (可选) -->
              <span class="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10" v-if="tagCount[tag]">{{ tagCount[tag] }}</span>
            </button>
          </div>
          <div v-else class="text-center py-4 text-sm text-gray-500">加载中...</div>
        </div>
      </aside>

      <!-- 右侧筛选出来的文章列表 -->
      <main class="flex-1 w-full min-w-0">
        <div class="max-w-4xl mx-auto">
          <div class="mb-10 text-center md:text-left pl-2 items-end flex justify-between">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {{ activeTag || '所有内容' }}
            </h1>
            <span class="text-gray-500 font-medium">{{ filteredArticles.length }} 篇文章</span>
          </div>

          <div v-if="filteredArticles.length > 0" class="space-y-6">
            <article
              v-for="post in filteredArticles"
              :key="post._path"
              class="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition duration-300 group block relative z-10"
            >
              <NuxtLink :to="post._path">
                <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3 truncate group-hover:underline">
                  {{ post.title }}
                </h2>
                <p v-if="post.description" class="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2 leading-relaxed">
                  {{ post.description }}
                </p>
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-2 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <span v-if="post.date" class="font-mono flex items-center">
                     <svg class="w-4 h-4 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                  </span>
                  <span class="font-bold text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">阅读全文 &rarr;</span>
                </div>
              </NuxtLink>
            </article>
          </div>
          <div v-else-if="activeTag" class="text-center py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl text-gray-500">
            该分类下还没有文章哦 ✨
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 我们获取所有具有 tags 的文章
const { data: allArticles } = await useAsyncData('all-articles', () => queryContent().where({ _path: { $ne: '/about' } }).sort({ date: -1 }).find())

// 提取所有标签并统计数量
const allTags = ref([])
const tagCount = ref({})
const activeTag = ref(null)

if (allArticles.value) {
  allArticles.value.forEach(article => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach(tag => {
        if (!tagCount.value[tag]) {
          tagCount.value[tag] = 0
          allTags.value.push(tag)
        }
        tagCount.value[tag]++
      })
    }
  })
  
  // 按照字母或数量排序标签 (可选)
  allTags.value.sort((a, b) => tagCount.value[b] - tagCount.value[a])
  
  // 默认选中第一个
  if (allTags.value.length > 0) {
    activeTag.value = allTags.value[0]
  }
}

// 根据当前选中的 tag 过滤文章
const filteredArticles = computed(() => {
  if (!activeTag.value || !allArticles.value) return []
  return allArticles.value.filter(article => {
    return article.tags && Array.isArray(article.tags) && article.tags.includes(activeTag.value)
  })
})
</script>