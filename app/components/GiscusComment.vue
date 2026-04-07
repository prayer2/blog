<template>
  <div class="mt-16 w-full prose dark:prose-invert max-w-none">
    <hr class="my-8 border-gray-200 dark:border-gray-800" />
    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">评论及讨论</h3>
    <Giscus
      repo="prayer2/blog" 
      repoId="R_kgDONXXXXXXXX"
      category="Announcements"
      categoryId="DIC_kwDONXXXXXXX"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'

// Giscus 需要 repoId 和 categoryId，这需要你前往 https://giscus.app 并在那边输入你的仓库 "prayer2/blog" 以获取代码里的具体 ID。
// 获取后，请替换上方的 repoId 和 categoryId。
</script>
