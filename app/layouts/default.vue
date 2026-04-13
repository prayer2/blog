<template>
  <div class="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300 relative overflow-visible">
    
    <!-- 全局图片背景，处于最底层 -->
    <div class="fixed inset-0 z-0">
      <!-- 亮色模式背景 -->
      <NuxtImg 
        src="/images/blog/bg.jpeg" 
        alt="网站背景" 
        class="w-full h-full object-cover opacity-70 transition-opacity duration-500 block dark:hidden" 
      />
      <!-- 暗黑模式背景 -->
      <NuxtImg 
        src="/images/blog/bg-.jpg" 
        alt="网站暗色背景" 
        class="w-full h-full object-cover opacity-40 transition-opacity duration-500 hidden dark:block" 
      />
    </div>

    <!-- 装饰性背景光晕，放在背景图之上，正文内容之下 -->
    <div class="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
      <!-- 左上角巨大的动态蓝色光�?-->
      <div class="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-400/20 dark:bg-blue-700/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10000ms]"></div>
      <!-- 右侧巨大的动态紫色光�?-->
      <div class="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-400/20 dark:bg-purple-700/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[8000ms]"></div>
      <!-- 底部粉色光晕 -->
      <!-- <div class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-400/20 dark:bg-fuchsia-700/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[12000ms]"></div> -->
    </div>

    <!-- 所有正常内容层需要置于光晕上�?z-10 -->
    <div class="relative z-10 flex flex-col min-h-screen pt-16">
      <AppHeader />
      
      <main class="flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </main>
      
      <AppFooter />
    </div>
    
  </div>
</template>
