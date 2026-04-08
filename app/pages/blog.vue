<template>
  <div class="w-full max-w-7xl mx-auto py-8">
    <div class="flex flex-col lg:flex-row gap-4 items-start">
      <!-- 左侧卡片区域 -->
      <aside class="w-full lg:w-64 flex-shrink-0">
        <SidebarProfile />
      </aside>

      <!-- 右侧文章列表/正文内容渲染区域 -->
      <main class="flex-1 w-full min-w-0">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>