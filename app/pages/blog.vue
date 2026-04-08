<template>
  <div class="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- 左侧卡片区域，添加 sticky 和 top-24 让它像分类卡片一样永远贴在顶部 -->
      <aside class="w-full md:w-64 flex-shrink-0 sticky top-24">
        <SidebarProfile />
      </aside>

      <!-- 右侧文章列表/正文内容渲染区域 -->
      <main class="flex-1 w-full min-w-0">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>