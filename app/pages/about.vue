<template>
  <div class="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- 左侧卡片区域 -->
      <aside class="w-full lg:w-64 flex-shrink-0 sticky top-24">
        <SidebarProfile />
      </aside>

      <!-- 右侧简介内容渲染区域 -->
      <main class="flex-1 w-full min-w-0">
        <article class="max-w-3xl border border-gray-100 dark:border-gray-800 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-sm overflow-hidden p-8 sm:p-12 mb-16 mx-auto">
          <ContentDoc path="/about">
            <template #default="{ doc }">
              <header class="mb-10 text-center">
                <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                  {{ doc.title }}
                </h1>
              </header>

              <div class="prose prose-lg dark:prose-invert prose-indigo max-w-none prose-img:rounded-xl prose-img:shadow-sm prose-headings:scroll-mt-24 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500">
                <ContentRenderer :value="doc" />
              </div>
            </template>
            
            <template #not-found>
              <div class="text-center py-20 text-gray-500">
                还需要在 content 目录下创建 about.md 来显示简介哦！
              </div>
            </template>
          </ContentDoc>
        </article>
      </main>
    </div>
  </div>
</template>