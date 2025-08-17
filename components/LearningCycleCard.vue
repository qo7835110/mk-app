<!-- LearningCycleCard.vue -->
<template>
    <div class="bg-[#4A3426] text-white rounded-2xl w-[350px] h-[300px] p-10 mx-auto shadow-lg">
        <!-- 標題 -->
        <h3 class="text-white text-2xl font-black mb-6">學習週期</h3>
        
        <!-- 主要內容區域 -->
        <div class="flex justify-between items-stretch">
            <!-- 圓形進度圈 -->
            <div class="flex-1">
                <CircularProgress :value="progressValue" color="red" size="extra-large">
                    <span class="text-white text-3xl font-bold">{{ progressValue }}</span>
                </CircularProgress>
            </div>
            <div class="flex flex-col justify-around flex-1">
                <!-- 訪客狀態區塊 -->
                <div class="bg-white rounded-full px-8 py-1 items-center justify-between flex-nowrap flex space-x-2">
                    <div class="text-brown-900 text-xs font-black text-nowrap">{{ statusText }}</div>
                    <div class="size-[24px] text-white bg-brown-900 rounded-full flex items-center justify-center">-</div>
                </div>
                <!-- 無法測量文字 -->
                <div class="text-center">
                    <p class="text-white text-sm">無法測量</p>
                </div>
            </div>
            
        </div>
        <!-- 底部進度條 -->
        <div class="w-full mt-8">
            <div class="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div 
                    class="bg-white h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${progressBarValue}%` }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CircularProgress from './CircularProgress.vue'

// Props
const props = defineProps({
    progress: {
        type: Number,
        default: 0
    },
    visitorStatus: {
        type: String,
        default: '訪客狀態'
    }
})

// Reactive data
const progressValue = ref(props.progress)

// Computed
const progressBarValue = computed(() => {
    // 進度條的值可以是圓形進度的一部分或獨立的值
    return Math.min(progressValue.value * 0.8, 100)
})

const statusText = computed(() => {
    return props.visitorStatus
})
</script>

<style scoped>
/* 可以添加額外的樣式 */
</style>
