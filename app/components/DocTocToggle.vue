<template>
  <div>
    <button
      v-if="computedTitle"
      @mouseenter="open"
      @mouseleave="close"
      @focus="open"
      @blur="close"
      @click="toggle"
      class="fixed bottom-8 right-8 z-[90] flex items-center gap-2 px-4 h-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      aria-haspopup="dialog"
      :aria-expanded="openState"
      :title="props.buttonLabel || '目录'"
    >
      <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      <span class="text-sm text-gray-700 dark:text-gray-200 max-w-[10rem] truncate">{{ props.buttonLabel || '目录' }}</span>
    </button>

    <div v-if="openState && internalToc.length" @mouseenter="open" @mouseleave="close" class="fixed bottom-24 right-8 z-[100] hidden md:block">
      <div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm w-64">
      <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">{{ props.buttonLabel || '目录' }}</h2>
        <nav class="text-sm text-gray-600 dark:text-gray-300">
          <div class="max-h-[66vh] overflow-auto pr-1 space-y-1">
            <ul>
              <li v-for="item in internalToc" :key="item.id">
                <button @click="$emit('navigate', item.id)" class="w-full text-left truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">
                  <span :class="item.level===2 ? 'font-medium' : 'pl-3'">{{ item.text }}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, watch, nextTick, computed } from 'vue'
const props = defineProps({
  title: String,
  toc: { type: Array, default: () => [] },
  doc: { type: Object, default: null },
  contentRoot: { type: null, default: null },
  buttonLabel: { type: String, default: '目录' }
})
const emit = defineEmits(['navigate'])
const openState = ref(false)
let _t = null
const internalToc = ref([])

function open(){ if(_t){ clearTimeout(_t); _t = null } ; openState.value = true }
function close(){ if(_t) clearTimeout(_t); _t = setTimeout(()=>{ openState.value = false; _t = null }, 180) }
function toggle(){ openState.value = !openState.value }

let _observer = null
function buildTocFromRoot(root){
  if (!root) return
  const headings = root.querySelectorAll('h2, h3')
  const list = []
  headings.forEach((h) => {
    if (!h.id) {
      let id = (h.textContent || h.innerText || '').toString().toLowerCase().trim()
      id = id.replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/--+/g, '-')
      h.id = id
    }
    list.push({ id: h.id, text: (h.textContent || h.innerText).trim(), level: Number(h.tagName.substr(1)) })
  })
  internalToc.value = list
}

function observeRoot(root){
  if (_observer) { _observer.disconnect(); _observer = null }
  if (!root) return
  buildTocFromRoot(root)
  _observer = new MutationObserver(() => {
    buildTocFromRoot(root)
  })
  _observer.observe(root, { childList: true, subtree: true })
}

function resolveRoot(){
  const r = props.contentRoot && props.contentRoot?.value ? props.contentRoot.value : props.contentRoot
  return r || null
}

watch(() => props.toc, (v) => {
  if (v && v.length) internalToc.value = v
}, { immediate: true })

watch(() => props.contentRoot, async () => {
  await nextTick()
  const root = resolveRoot()
  if (root) observeRoot(root)
}, { immediate: true })

onBeforeUnmount(()=>{ if(_t) clearTimeout(_t); if (_observer) { _observer.disconnect(); _observer = null } })

const computedTitle = computed(()=>{
  if (props.title) return props.title
  if (props.doc && (props.doc.title || props.doc.meta?.title || props.doc.name)) return props.doc.title || props.doc.meta?.title || props.doc.name
  return ''
})
</script>
