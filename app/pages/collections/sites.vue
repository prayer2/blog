<template>
  <div class="max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[400px] shadow-sm">
    <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">网站收藏</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <article
        v-for="(site, i) in sites"
        :key="i"
        class="border rounded-2xl p-4 bg-white/80 dark:bg-gray-800/60 hover:shadow-lg transition-shadow duration-150"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <a :href="site.url" target="_blank" rel="noopener noreferrer" class="text-lg font-semibold text-slate-900 dark:text-slate-100 hover:underline">
              {{ site.name }}
            </a>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 break-words">{{ site.description || site.url }}</p>
          </div>
          <div class="shrink-0 flex items-center">
            <a :href="site.url" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 dark:text-blue-400 font-medium ml-3">访问</a>
          </div>
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="(tag, t) in site.tags" :key="t" class="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{{ tag }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import sites from '~/data/collections/sites.json'
</script>

<style scoped>
/* 小调整：让卡片高度一致 */
.grid article { min-height: 88px; }
</style>
