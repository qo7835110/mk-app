<template>
    <div class="bg-brown-50 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div class="flex items-center space-x-4">
            <!-- 課程圖片 -->
            <div class="flex-shrink-0">
                <div class="size-[80px] bg-gray-300 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img v-if="course.image" :src="course.image" :alt="course.title" class="w-full h-full object-cover">
                    <div v-else class="w-full h-full bg-gray-300"></div>
                </div>
            </div>

            <!-- 課程內容 -->
            <div class="flex-grow min-w-0">
                <!-- 標題和狀態 -->
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-bold text-brown truncate">{{ course.title }}</h3>
                    <span class="px-3 py-1 rounded-full text-sm font-medium text-white whitespace-nowrap"
                        :class="statusClasses">
                        {{ course.status }}
                    </span>
                </div>

                <!-- 標籤 -->
                <div class="flex flex-wrap gap-2 mb-2">
                    <span v-for="tag in course.tags" :key="tag"
                        class="px-3 py-1 border border-brown rounded-full text-[10px] text-gray-700 bg-brown-50">
                        {{ tag }}
                    </span>
                </div>

                <!-- 進度條 -->
                <div class="mb-1">
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="h-2 rounded-full transition-all duration-300" :class="progressClasses"
                            :style="{ width: course.progress + '%' }"></div>
                    </div>
                </div>

                <!-- 時間 -->
                <p class="text-[10px] text-gray-600 font-medium">{{ course.time }}</p>
            </div>

            <!-- 箭頭圖標 -->
            <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
})

// 狀態樣式
const statusClasses = computed(() => {
    const statusMap = {
        '進行中': 'bg-primary',
        '今天': 'bg-secondary',
        '已完成': 'bg-green-500',
        '即將開始': 'bg-blue-500',
        '已暫停': 'bg-gray-500'
    }
    return statusMap[props.course.status] || 'bg-gray-500'
})

// 進度條樣式
const progressClasses = computed(() => {
    const progressMap = {
        '進行中': 'bg-primary',
        '今天': 'bg-secondary',
        '已完成': 'bg-green-500',
        '即將開始': 'bg-blue-500',
        '已暫停': 'bg-gray-500'
    }
    return progressMap[props.course.status] || 'bg-gray-500'
})
</script>