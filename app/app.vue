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
  ogImage: 'https://github.com/prayer2.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
/* 全局悬浮定制滚动条 - 与背景(如Glassmorphism)高度融合的透明度设置 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.25); /* 极低的透明度，让它隐匿于明亮背景 */
  border-radius: 9999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.6); /* 鼠标悬停时显现(浅色模式) */
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.15); /* 暗色模式下的不碍眼透明度 */
}
html.dark ::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.5); /* 鼠标悬停时显现(暗色模式) */
}
</style>
