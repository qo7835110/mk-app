<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 當有數據時顯示實際卡片 -->
        <template v-if="hasData">
            <div 
                v-for="card in cards" 
                :key="card.id"
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                @click="() => handleCardClick(card)"
            >
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">{{ card.title }}</h3>
                    <div class="flex items-center space-x-2">
                        <span v-if="card.tag" class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {{ card.tag }}
                        </span>
                        <button 
                            v-if="card.hasAction"
                            :class="`text-xs text-white px-2 py-1 rounded-full ${card.actionColor || 'bg-blue-500'}`"
                            @click.stop="() => handleActionClick(card)"
                        >
                            {{ card.actionText }}
                        </button>
                        <button class="text-gray-400 hover:text-gray-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mb-4">
                    <ProgressBar
                        :current="card.currentLessons"
                        :total="card.totalLessons"
                        :progress-color="card.progressColor"
                        unit="堂"
                    />
                </div>
            </div>
        </template>

        <!-- 當沒有數據時顯示空狀態卡片 -->
        <template v-else>
            <div 
                v-for="index in 4" 
                :key="`empty-${index}`"
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <!-- 圓點 -->
                        <div class="w-2 h-2 bg-gray-300 rounded-full" />
                        <!-- 標題佔位符 -->
                        <div class="w-16 h-4 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <button class="text-gray-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                
                <!-- 進度條區域 -->
                <div class="mb-4">
                    <!-- 空狀態進度條 -->
                    <div class="flex justify-between items-center">
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <!-- 空的進度條 -->
                        </div>
                        <div class="ml-4">
                            <div class="w-8 h-3 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { computed } from 'vue'

// Props 定義，允許外部傳入卡片數據
const props = defineProps({
    cards: {
        type: Array,
        default: () => []
    },
    showEmptyState: {
        type: Boolean,
        default: false
    }
})

// 判斷是否有數據
const hasData = computed(() => {
    return !props.showEmptyState && props.cards && props.cards.length > 0
})

// 事件處理
const handleCardClick = (card) => {
    console.log('點擊卡片:', card)
    // 這裡可以添加導航邏輯
}

const handleActionClick = (card) => {
    console.log('點擊行動按鈕:', card)
    // 這裡可以添加具體的行動邏輯
}
</script>

<style scoped>
/* 自定義樣式 */
.progress-bar {
    transition: width 0.3s ease-in-out;
}
</style>
