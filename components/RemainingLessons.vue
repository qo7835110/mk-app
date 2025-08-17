<!-- RemainingLessons.vue -->
<template>
    <div class="rounded-3xl  max-w-sm mx-auto shadow w-[320px]">
        <!-- 數字顯示區域 -->
        <div class="bg-grown-50 rounded-2xl p-6 mb-4">
            <div class="flex justify-between items-center mb-4">
                <!-- 左側數字 -->
                <div class=" font-black text-grown-600">
                    {{ remaining || '-' }}
                </div>

                <!-- 右側分數顯示 -->
                <div class="font-black text-grown-600">
                    {{ remaining !== null && total !== null ? `${remaining}/${total}` : '-/-' }} 堂
                </div>
            </div>

            <!-- 進度條 -->
            <div class="relative">
                <div class="w-full bg-[#D9D9D9] rounded-full h-[8px]">
                    <div 
                        class="bg-gray-400 h-3 rounded-full transition-all duration-300 ease-in-out"
                        :style="{ width: progressPercentage + '%' }" />
                </div>
                <!-- 滑塊 -->
                <div 
                    class="absolute top-1/2 transform -translate-y-1/2 w-[20px] h-[14px] bg-[#A4A4A4] rounded-full shadow-md transition-all duration-300 ease-in-out"
                    :style="{ left: `calc(${progressPercentage}% - 10px)` }" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    // 剩餘堂數
    remaining: {
        type: Number,
        default: null
    },
    // 總堂數
    total: {
        type: Number,
        default: null
    },
    // 已使用堂數 (如果提供這個而不是 remaining)
    used: {
        type: Number,
        default: null
    }
})

// 計算進度百分比
const progressPercentage = computed(() => {
    if (props.remaining === null || props.total === null) {
        return 0
    }

    let usedLessons = 0
    if (props.used !== null) {
        usedLessons = props.used
    } else {
        usedLessons = props.total - props.remaining
    }

    return Math.max(0, Math.min(100, (usedLessons / props.total) * 100))
})
</script>

<style scoped></style>
