<!-- LearningHistory.vue -->
<template>
    <div class="rounded-3xl p-3 shadow max-w-sm mx-auto">
        <div class="space-y-4">
            <div
                class="bg-brown-50 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <!-- 左側內容 -->
                <div class="flex flex-1 items-center">
                    <!-- 課程圖標 -->
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <img class="ml-1 w-[50px] h-[30px]" src="~/assets/images/icon/history_1.svg" alt="">
                            <!-- <div v-else class="w-8 h-8 bg-gray-300 rounded-lg" /> -->
                        </div>
                        <div class="flex justify-center">
                            -
                        </div>
                    </div>

                </div>
                <!-- 課程信息 -->
                <div class="flex-grow flex flex-col mx-4 px-4">
                    <!-- 狀態標籤 -->
                    <div class="flex items-center space-x-2 mb-2">
                        <div v-for="(status, statusIndex) in course.status" :key="statusIndex"
                            class="px-3 py-1 rounded-full text-[8px] font-medium text-white min-w-[20px]"
                            :class="getStatusClass(status.type)">
                            {{ status.text }}
                        </div>
                    </div>
                    <!-- 日期和課堂信息 -->
                    <div class="text-[8px] text-gray-600">
                        <span>{{ course.date }}</span>
                    </div>
                </div>

                <!-- 右側箭頭 -->
                <div class="flex-shrink-0 ml-4 text-xl text-gray-500">
                    〉
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    course: {
        type: Object,
        default: () => {
            return {
                name: '韻韻',
                icon: '/images/target-icon.png', // 實際圖片路徑
                status: [
                    { type: 'orange', text: '複習' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            }
        }
    }
})

// 根據狀態類型返回對應的 CSS 類別
const getStatusClass = (type) => {
    const statusClasses = {
        'orange': 'bg-primary',
        'yellow': 'bg-yellow-400',
        'green': 'bg-secondary',
        'gray': 'bg-gray-400',
        'brown': 'bg-brown-600'
    }
    return statusClasses[type] || 'bg-gray-400'
}

// 根據課程名稱返回對應的emoji圖標
const getIconEmoji = (courseName) => {
    const iconMap = {
        '韻韻': '🎯',
        '組織圖': '🌟',
        '簡單字': '🎯',
        '重點筆記': '📝',
        '必考題': '👨‍🏫'
    }
    return iconMap[courseName] || '📚'
}
</script>

<style scoped>
/* 如果需要額外樣式可以在這裡添加 */
</style>
