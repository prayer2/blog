<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
    <header class="p-4 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto">
        <h1 class="text-xl font-bold">我的 AI 博客</h1>
      </div>
    </header>
    
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
    
    <footer class="p-4 border-t border-gray-200 dark:border-gray-800 text-center text-sm">
      &copy; 2026 AI 博客
    </footer>
  </div>
</template>
