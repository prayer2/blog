<template>
  <!-- 取消绝对高度，通过减少间距使得完整页面在 1080p 等常规屏幕上直接满屏无滚动条 -->
  <div class="home-cute flex flex-col justify-center items-center flex-grow py-4 px-4 sm:px-6 lg:px-8">
    
    <!-- Hero Section -->
    <div class="text-center max-w-4xl mx-auto mb-8 space-y-5">
      <div class="intro-copy mx-auto flex min-h-[32vh] max-w-3xl flex-col items-center justify-center gap-4">
        <div class="hero-badge inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide mb-2 border">
          <span class="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          这是由copilot全程编写代码完成的博客网站
        </div>

        <h1 class="hero-title text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-snug">
          你好，我是 Mint
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500">
            这里是我的个人博客
          </span>
          与长期实验室
        </h1>

        <p class="hero-copy text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          我在这里记录开发日志、学习笔记、踩坑复盘和灵感碎片。
          如果你也喜欢把日常思考变成可检索的知识，欢迎常来逛逛。
        </p>
      </div>

      <div class="cute-wrap mx-auto" title="点一下小团子们">
        <button
          v-for="(blob, index) in blobConfigs"
          :key="index"
          type="button"
          class="mini-blob"
          :class="[blob.tone, blob.size, blob.mood, { bouncing: bouncingBlobs.includes(index) }]"
          @click="triggerBlobBounce(index)"
        >
          <span class="face"></span>
        </button>
      </div>

      <div class="flex flex-col sm:flex-row justify-center gap-3 pt-3">
        <NuxtLink 
          to="/blog" 
          class="cute-button cute-button-primary inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full transition-all duration-200"
        >
          读最新文章 &rarr;
        </NuxtLink>
        <a 
          href="https://github.com/prayer2/blog"
          target="_blank"
          class="cute-button cute-button-secondary inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
          </svg>
          在 GitHub 看更新
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bouncingBlobs = ref([])

const blobConfigs = [
  { tone: 'b1', size: 's2', mood: 'smile' },
  { tone: 'b2', size: 's1', mood: 'happy' },
  { tone: 'b3', size: 's3', mood: 'wow' },
  { tone: 'b4', size: 's2', mood: 'smirk' },
  { tone: 'b5', size: 's1', mood: 'smile' },
  { tone: 'b6', size: 's2', mood: 'happy' },
  { tone: 'b3', size: 's1', mood: 'smirk' },
  { tone: 'b1', size: 's2', mood: 'smile' },
  { tone: 'b4', size: 's1', mood: 'happy' },
  { tone: 'b6', size: 's3', mood: 'wow' },
  { tone: 'b2', size: 's2', mood: 'smile' },
  { tone: 'b5', size: 's1', mood: 'smirk' },
  { tone: 'b1', size: 's1', mood: 'happy' },
  { tone: 'b4', size: 's2', mood: 'smile' },
  { tone: 'b3', size: 's1', mood: 'wow' },
  { tone: 'b2', size: 's2', mood: 'smirk' },
  { tone: 'b6', size: 's1', mood: 'happy' },
  { tone: 'b5', size: 's2', mood: 'smile' },
]

function triggerBlobBounce(index) {
  if (bouncingBlobs.value.includes(index)) {
    return
  }

  bouncingBlobs.value = [...bouncingBlobs.value, index]

  window.setTimeout(() => {
    bouncingBlobs.value = bouncingBlobs.value.filter((item) => item !== index)
  }, 2100)
}
</script>

<style scoped>
.home-cute {
  font-family: 'Segoe UI Rounded', 'Trebuchet MS', 'Arial Rounded MT Bold', 'Microsoft YaHei', sans-serif;
}

.home-cute h1 {
  font-family: 'Trebuchet MS', 'Segoe UI Rounded', 'Microsoft YaHei', sans-serif;
}

.hero-badge {
  color: #2563eb;
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.95), rgba(224, 231, 255, 0.92));
  border-color: rgba(191, 219, 254, 0.9);
  box-shadow: 0 10px 22px rgba(147, 197, 253, 0.16);
}

.hero-title {
  color: #334155;
  text-wrap: balance;
}

.hero-copy {
  color: #64748b;
}

.cute-button {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 24px rgba(148, 163, 184, 0.14);
}

.cute-button::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 9999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.cute-button:hover {
  transform: translateY(-2px) scale(1.01);
}

.cute-button-primary {
  color: #1f2937;
  background: linear-gradient(135deg, #fde68a, #f9a8d4 55%, #93c5fd);
  border-color: rgba(251, 191, 36, 0.2);
}

.cute-button-primary:hover {
  box-shadow: 0 14px 28px rgba(244, 114, 182, 0.2);
}

.cute-button-secondary {
  color: #475569;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(224, 242, 254, 0.95));
  border-color: rgba(186, 230, 253, 0.9);
}

.cute-button-secondary:hover {
  box-shadow: 0 14px 28px rgba(125, 211, 252, 0.18);
}

.cute-wrap {
  position: relative;
  width: min(100%, 980px);
  min-height: 88px;
  margin-top: 0.75rem;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  overflow: visible;
}

.mini-blob {
  appearance: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 45% 55% 52% 48% / 54% 46% 58% 42%;
  border: 2px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 18px rgba(2, 132, 199, 0.16);
  position: relative;
  animation: floaty 3s ease-in-out infinite;
  flex: 0 0 auto;
  transition: filter 180ms ease;
}

.s1 {
  width: 34px;
  height: 28px;
}

.s2 {
  width: 42px;
  height: 35px;
}

.s3 {
  width: 50px;
  height: 42px;
}

.mini-blob:hover {
  filter: brightness(1.03);
}

.mini-blob:focus-visible {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2), 0 8px 18px rgba(2, 132, 199, 0.16);
}

.mini-blob.bouncing {
  animation: triple-bounce 2.1s ease-out 1;
  z-index: 20;
}

.face {
  position: absolute;
  inset: 0;
}

.face::before,
.face::after {
  content: "";
  position: absolute;
  top: 38%;
  width: 5px;
  height: 5px;
  background: #334155;
  border-radius: 9999px;
  animation: blink 4s infinite;
}

.face::before {
  left: 30%;
}

.face::after {
  right: 30%;
}

.smile .face::after,
.smile .face::before {
  animation-delay: 0.2s;
}

.mini-blob::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 58%;
  width: 10px;
  height: 5px;
  margin-left: -5px;
  border-bottom: 2px solid #334155;
  border-radius: 0 0 10px 10px;
}

.happy::after {
  width: 9px;
  height: 5px;
  border-bottom-width: 2px;
}

.wow::after {
  width: 8px;
  height: 8px;
  border: 2px solid #334155;
  border-radius: 9999px;
  border-bottom-width: 2px;
  background: transparent;
}

.smirk::after {
  width: 9px;
  height: 4px;
  border-bottom: 2px solid #334155;
  border-radius: 0 0 8px 8px;
  transform: translateX(2px) rotate(-8deg);
}

.b1 { background: linear-gradient(160deg, #bae6fd, #93c5fd); animation-delay: 0s; }
.b2 { background: linear-gradient(160deg, #a7f3d0, #6ee7b7); animation-delay: 0.2s; }
.b3 { background: linear-gradient(160deg, #fbcfe8, #f9a8d4); animation-delay: 0.4s; }
.b4 { background: linear-gradient(160deg, #ddd6fe, #c4b5fd); animation-delay: 0.6s; }
.b5 { background: linear-gradient(160deg, #fde68a, #fcd34d); animation-delay: 0.8s; }
.b6 { background: linear-gradient(160deg, #fecdd3, #fda4af); animation-delay: 1s; }

@keyframes floaty {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-6px) rotate(1deg); }
}

@keyframes blink {
  0%, 42%, 46%, 100% { transform: scaleY(1); }
  44% { transform: scaleY(0.12); }
}

@keyframes pop {
  0% { transform: scale(1); }
  40% { transform: scale(1.14); }
  100% { transform: scale(1); }
}

@keyframes triple-bounce {
  0% { transform: translateY(0) scale(1); }
  10% { transform: translateY(-50vh) scale(1.03); }
  22% { transform: translateY(0) scale(0.96); }
  36% { transform: translateY(-34vh) scale(1.02); }
  50% { transform: translateY(0) scale(0.98); }
  66% { transform: translateY(-20vh) scale(1.01); }
  82% { transform: translateY(0) scale(1); }
  100% { transform: translateY(0) scale(1); }
}

:global(html.dark) .mini-blob {
  border-color: rgba(148, 163, 184, 0.3);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.42);
}

:global(html.dark) .face::before,
:global(html.dark) .face::after,
:global(html.dark) .mini-blob::after {
  background: #e2e8f0;
}

:global(html.dark) .mini-blob::after {
  background: transparent;
  border-bottom-color: #e2e8f0;
  border-color: #e2e8f0;
}

:global(html.dark) .b1 { background: linear-gradient(160deg, #0c4a6e, #1d4ed8); }
:global(html.dark) .b2 { background: linear-gradient(160deg, #064e3b, #047857); }
:global(html.dark) .b3 { background: linear-gradient(160deg, #831843, #be185d); }
:global(html.dark) .b4 { background: linear-gradient(160deg, #312e81, #5b21b6); }
:global(html.dark) .b5 { background: linear-gradient(160deg, #78350f, #b45309); }
:global(html.dark) .b6 { background: linear-gradient(160deg, #7f1d1d, #be123c); }

:global(html.dark) .cute-button {
  border-color: rgba(148, 163, 184, 0.22);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.28);
}

:global(html.dark) .hero-badge {
  color: #93c5fd;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.92), rgba(49, 46, 129, 0.82));
  border-color: rgba(96, 165, 250, 0.22);
  box-shadow: 0 12px 26px rgba(30, 64, 175, 0.18);
}

:global(html.dark) .hero-title {
  color: #f8fafc;
}

:global(html.dark) .hero-copy {
  color: #cbd5e1;
}

:global(html.dark) .cute-button-primary {
  color: #0f172a;
  background: linear-gradient(135deg, #f9a8d4, #a5b4fc 55%, #67e8f9);
}

:global(html.dark) .cute-button-secondary {
  color: #e2e8f0;
  background: linear-gradient(135deg, rgba(51, 65, 85, 0.95), rgba(30, 41, 59, 0.95));
  border-color: rgba(125, 211, 252, 0.2);
}
</style>
