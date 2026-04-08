<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/40 dark:bg-gray-900/40 border-b border-gray-200/30 dark:border-gray-800/30 transition-colors duration-300 shadow-sm">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <NuxtImg 
          src="/blog/avatar.jpg" 
          alt="Mint的主理人头像" 
          class="w-9 h-9 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        <span class="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Mint的博客</span>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="flex items-center space-x-6 sm:space-x-8 text-sm font-medium">
        <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          文章列表
        </NuxtLink>
        <a 
          href="https://github.com/prayer2/blog" 
          target="_blank"
          class="hidden sm:inline-block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          GitHub源码
        </a>

        <!-- Dark Mode Toggle Component -->
        <button 
          @click="toggleColorMode"
          class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          <!-- Moon Icon (shows when light mode) -->
          <svg v-if="$colorMode.value === 'light'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Sun Icon (shows when dark mode) -->
          <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  // 如果现在是亮色，切换到暗色；如果是暗色，切换到亮色
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>