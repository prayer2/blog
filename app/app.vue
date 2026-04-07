<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 全局默认 SEO 设置
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - AI 驱动的博客` : 'AI 博客空间'
  },
  description: '这是一个基于 Nuxt 3 和 Tailwind CSS，完全由 AI 辅助生成的极客个人博客。记录技术、生活与前沿的 AI 探索。',
  ogImage: 'https://github.com/prayer2.png', // 可以替换为你的博客封面图
  twitterCard: 'summary_large_image',
})
</script>
