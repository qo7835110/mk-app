<template>
      <div class="relative w-full" ref="dropdownRef">
        <!-- 下拉按鈕 -->
        <button
          @click="toggleDropdown"
          class="
            w-full
            rounded-4xl bg-brown-100 px-[16px] py-[8px] text-[12px]
            font-bold
            text-brown-200
            hover:bg-stone-300
            text-left
            flex items-center justify-between
            transition-all duration-200
            border border-transparent
            focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50
          "
        >
          <span class="truncate">{{ selectedArea }}</span>
          <span 
            class="ml-2 transition-transform duration-200"
            :class="{ 'rotate-180': isOpen }"
          >
            ▼
          </span>
        </button>

        <!-- 下拉選單 -->
        <Transition name="dropdown">
          <div 
            v-if="isOpen"
            class="
              absolute top-full left-0 right-0 mt-1
              bg-white
              border border-gray-200
              rounded-lg
              shadow-[0px_4px_24px_0px_#0000001A]
              max-h-60 overflow-y-auto
              z-50
            "
          >
            <!-- 重置選項 -->
            <button
              @click="handleSelect(props.placeholder || '')"
              class="
                px-4 py-3 text-left
                text-gray-500 hover:bg-gray-50
                border-b border-gray-100
                transition-colors duration-150
              "
            >
              請選擇{{ props.placeholder || '' }}
            </button>
            
            <!-- 區域選項 -->
            <button
              v-for="area in areas"
              :key="area"
              @click="handleSelect(area)"
              class="
                px-4 py-3 text-left
                hover:bg-stone-50 
                transition-colors duration-150
              "
              :class="{
                'bg-stone-100 text-stone-800 font-medium': selectedArea === area,
                'text-gray-700': selectedArea !== area
              }"
            >
              {{ area }}
            </button>
          </div>
        </Transition>
      </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
// 響應式資料
const isOpen = ref(false)
const selectedArea = ref(props.placeholder || '')
const dropdownRef = ref(null)

// 台灣縣市資料
const areas = []

// 方法
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const handleSelect = (area) => {
  selectedArea.value = area
  isOpen.value = false
}

// 點擊外部關閉下拉選單
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

// ESC 鍵關閉
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

// 生命週期
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
/* 下拉動畫 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  transform-origin: top;
}

.dropdown-enter-from {
  opacity: 0;
  transform: scaleY(0.8) translateY(-8px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(0.8) translateY(-8px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: scaleY(1) translateY(0);
}
</style>