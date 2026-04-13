<template>
  <div class="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- 左侧自定义导航卡片 -->
      <aside class="w-full md:w-64 flex-shrink-0 self-start">
        <div ref="leftCard" :style="leftCardStyle" class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4 pl-2">收藏集</h2>
          <nav class="flex flex-col space-y-2">
            <button
              type="button"
              @click="selected = 'sites'"
              class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium nav-btn"
              :class="selected === 'sites' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 font-semibold shadow-sm nav-selected' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300'"
            >
              🌐 网站
            </button>

            <button
              type="button"
              @click="selected = 'tools'"
              class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium nav-btn"
              :class="selected === 'tools' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 font-semibold shadow-sm nav-selected' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300'"
            >
              🛠️ 程序员工具
            </button>

            <button
              type="button"
              @click="selected = 'ebooks'"
              class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium nav-btn"
              :class="selected === 'ebooks' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 font-semibold shadow-sm nav-selected' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300'"
            >
              📚 电子书
            </button>

            <button
              type="button"
              @click="selected = 'others'"
              class="w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium nav-btn"
              :class="selected === 'others' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 font-semibold shadow-sm nav-selected' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-300'"
            >
              📦 其他
            </button>
          </nav>
        </div>
      </aside>

      <!-- 右侧内容区 -->
      <main class="flex-1 w-full min-w-0">
        <!-- 初始占位：未选择任何分类 -->
        <div v-if="!selected" class="max-w-5xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-10 min-h-[400px] flex items-center justify-center shadow-sm">
          <div class="text-center">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">收藏集</h1>
            <p class="text-gray-500 dark:text-gray-400 text-lg">请选择左侧的分类（网站 / 电子书 / 其他）来查看内容。</p>
          </div>
        </div>

        <!-- 网站收藏：从 JSON 渲染卡片（两列） -->
        <div v-if="selected === 'sites'" class="max-w-5xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[400px] shadow-sm">
          <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">网站收藏</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article
              v-for="(site, i) in sites"
              :key="i"
              class="site-card"
            >
              <div class="site-card-inner">
                <div class="site-avatar" aria-hidden>
                  <span>{{ site.name.charAt(0).toUpperCase() }}</span>
                </div>

                <div class="site-main">
                  <a :href="site.url" target="_blank" rel="noopener noreferrer" class="site-title">
                    {{ site.name }}
                  </a>
                  <p class="site-desc">{{ site.description || site.url }}</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span v-for="(tag, t) in site.tags" :key="t" class="site-tag">{{ tag }}</span>
                  </div>
                </div>

                <!-- title is the link; no separate CTA button -->
              </div>
            </article>
          </div>
        </div>

        <!-- 程序员工具：直接渲染 content/collections/tools.md -->
        <div class="relative">
          <div v-if="selected === 'tools'" class="max-w-5xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[400px] shadow-sm">
            <div class="prose max-w-none dark:prose-invert">
              <div class="overflow-auto tools-content" ref="toolsRoot">
                <ContentDoc path="/collections/tools" v-slot="{ doc }">
                  <ContentRenderer :value="doc" />
                  <span class="hidden">{{ setDocTitle(doc) }}</span>
                </ContentDoc>
              </div>
            </div>
          </div>

          <!-- 右侧目录卡片（与左侧对称，md+ 可见，仅在 tools 选中时显示） -->
          <!-- 注意：该卡片放在主布局流中以保持左右对称与居中 -->
        </div>

        <!-- 电子书：和网站展示风格一致 -->
        <div v-if="selected === 'ebooks'" class="max-w-5xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[400px] shadow-sm">
          <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">电子书</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article
              v-for="(book, i) in ebooks"
              :key="i"
              class="site-card"
            >
              <div class="site-card-inner">
                <div class="site-avatar" aria-hidden>
                  <span>{{ book.name.charAt(0).toUpperCase() }}</span>
                </div>

                <div class="site-main">
                  <a :href="book.url" target="_blank" rel="noopener noreferrer" class="site-title">
                    {{ book.name }}
                  </a>
                  <p class="site-desc">{{ book.description || book.url }}</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span v-for="(tag, t) in book.tags" :key="t" class="site-tag">{{ tag }}</span>
                  </div>
                </div>

              </div>
            </article>
          </div>
        </div>

        <div v-if="selected === 'others'" class="max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-10 min-h-[400px] flex items-center justify-center shadow-sm">
          <div class="text-center">
            <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">其他收藏</h2>
            <p class="text-gray-500 dark:text-gray-400 text-lg">其他类型的收藏会在这里展示。</p>
          </div>
        </div>
      </main>

      <DocTocToggle v-if="docTitle" :title="docTitle" :toc="toc" :contentRoot="toolsRoot" @navigate="scrollTo" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const isRoot = computed(() => route.path === '/collections' || route.path === '/collections/')
import sites from '~/data/collections/sites.json'
import ebooks from '~/data/collections/ebooks.json'
import { ref } from 'vue'

// 默认自动选中第一个分类（网站）
const selected = ref('sites')

// TOC state for tools page
import { onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
import { toRef } from 'vue'
import DocTocToggle from '~/components/DocTocToggle.vue'
const toolsRoot = ref(null)
const toc = ref([])
let _observer = null
const leftCard = ref(null)
const leftCardStyle = ref({})
let _resizeHandler = null
let _scrollHandler = null
const TOP_OFFSET = 96 // matches top-24 (6rem = 96px)

// current md doc title (set when ContentDoc provides `doc`)
const docTitle = ref('')
function setDocTitle(doc){
  const t = doc && (doc.title || doc.meta?.title || doc.name) ? (doc.title || doc.meta?.title || doc.name) : ''
  if (t && docTitle.value !== t) docTitle.value = t
  return ''
}

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/--+/g, '-')
}

function buildToc() {
  toc.value = []
  if (!toolsRoot.value) return
  const root = toolsRoot.value
  const headings = root.querySelectorAll('h2, h3')
  headings.forEach((h) => {
    if (!h.id) {
      const id = slugify(h.textContent || h.innerText)
      h.id = id
    }
    toc.value.push({ id: h.id, text: (h.textContent || h.innerText).trim(), level: Number(h.tagName.substr(1)) })
  })
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function observeTools() {
  if (_observer) { _observer.disconnect(); _observer = null }
  if (!toolsRoot.value) return
  _observer = new MutationObserver(() => {
    buildToc()
    if (toc.value.length && _observer) {
      _observer.disconnect()
      _observer = null
    }
  })
  _observer.observe(toolsRoot.value, { childList: true, subtree: true })
  // try a last-resort build after next tick
  nextTick(() => setTimeout(buildToc, 80))
}

watch(selected, async (v) => {
  if (v === 'tools') {
    await nextTick()
    observeTools()
  } else {
    toc.value = []
    if (_observer) { _observer.disconnect(); _observer = null }
    docTitle.value = ''
  }
})

onMounted(() => {
  if (selected.value === 'tools') observeTools()
  // attach scroll/resize handlers for fixed fallback (left card only)
  _resizeHandler = () => computeCardPositions()
  _scrollHandler = () => updateCardFixedState()
  window.addEventListener('resize', _resizeHandler)
  window.addEventListener('scroll', _scrollHandler, { passive: true })
  // initial compute
  nextTick(() => setTimeout(() => { computeCardPositions(); updateCardFixedState() }, 60))
})

onBeforeUnmount(() => {
  if (_observer) { _observer.disconnect(); _observer = null }
  window.removeEventListener('resize', _resizeHandler)
  window.removeEventListener('scroll', _scrollHandler)
  if (_tocTimeout) clearTimeout(_tocTimeout)
})

function computeCardPositions() {
  // reset styles to measure
  if (leftCard.value) {
    leftCardStyle.value = { position: '', top: '', left: '', width: '', zIndex: '' }
  }
}

function updateCardFixedState() {
  // Only apply fallback on md+ screens
  if (window.innerWidth < 768) {
    // clear styles
    leftCardStyle.value = {}
    return
  }

  const scrollY = window.scrollY || window.pageYOffset

  if (leftCard.value) {
    const rect = leftCard.value.getBoundingClientRect()
    const docTop = rect.top + scrollY
    if (scrollY + TOP_OFFSET >= docTop) {
      leftCardStyle.value = {
        position: 'fixed',
        top: TOP_OFFSET + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px',
        zIndex: 1100
      }
    } else {
      leftCardStyle.value = { position: '', top: '', left: '', width: '', zIndex: '' }
    }
  }
}
</script>

<style scoped>
/* 保持与之前风格一致 */

.site-card {
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(249,250,251,0.78));
  border: 1px solid rgba(226,232,240,0.8);
  padding: 12px;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.site-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(15,23,42,0.08);
  border-color: rgba(203,213,225,0.9);
}

.site-card-inner { display:flex; gap:12px; align-items:flex-start; }
.site-avatar { width:48px; height:48px; border-radius:12px; flex:0 0 48px; display:flex; align-items:center; justify-content:center; font-weight:700; color:#0f172a; background:linear-gradient(135deg,#fde68a,#f9a8d4); box-shadow:0 8px 18px rgba(244,114,182,0.06); }
.site-main { flex:1 1 auto; min-width:0 }
.site-title { display:block; font-size:1.05rem; font-weight:700; color:#0f172a; text-decoration:none }
.site-title:hover { text-decoration:underline }
.site-desc { margin-top:6px; color:#64748b; font-size:0.9rem; min-height:28px }
.site-tag { padding:4px 8px; font-size:0.72rem; border-radius:9999px; background:rgba(243,244,246,0.9); color:#334155 }
.site-cta { display:none }

:global(html.dark) .site-card { background: linear-gradient(180deg, rgba(15,23,42,0.5), rgba(17,24,39,0.5)); border-color: rgba(63,63,70,0.28) }
:global(html.dark) .site-avatar { background: linear-gradient(135deg,#0f172a,#1e293b); color:#e2e8f0 }
:global(html.dark) .site-title { color:#f8fafc }
:global(html.dark) .site-desc { color:#cbd5e1 }
:global(html.dark) .site-tag { background: rgba(30,41,59,0.45); color:#cbd5e1 }

/* 导航按钮基础 + 选中样式 */
.nav-btn { color: #475569; background: transparent; border: 1px solid transparent }
.nav-btn:hover { transform: translateX(2px) }
.nav-selected { color: inherit; border-color: rgba(249,168,212,0.35); box-shadow: 0 10px 28px rgba(249,168,212,0.12); font-weight: 700 }
:global(html.dark) .nav-selected { color: inherit; border-color: rgba(96,165,250,0.12); box-shadow: 0 10px 28px rgba(2,6,23,0.32) }

/* make sure fixed/fallback card preserves rounded shadow when positioned */
.sticky-fallback {
  border-radius: 14px;
}
</style>
