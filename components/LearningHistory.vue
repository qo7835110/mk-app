<!-- LearningHistory.vue -->
<template>
    <div class="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">

        <!-- 課程列表 -->
        <div class="space-y-4">
            <LearningHistoryCard v-for="(course, index) in courses" :key="index" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    courses: {
        type: Array,
        default: () => [
            {
                name: '韻韻',
                icon: '/images/target-icon.png', // 實際圖片路徑
                status: [
                    { type: 'orange', text: '複習' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            },
            {
                name: '組織圖',
                icon: '/images/organization-icon.png',
                status: [
                    { type: 'green', text: '問讀' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            },
            {
                name: '簡單字',
                icon: '/images/target-icon.png',
                status: [
                    { type: 'green', text: '問讀' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            },
            {
                name: '重點筆記',
                icon: '/images/notes-icon.png',
                status: [
                    { type: 'green', text: '預習' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            },
            {
                name: '必考題',
                icon: '/images/teacher-icon.png',
                status: [
                    { type: 'gray', text: '太久' },
                    { type: 'brown', text: '麻煩' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            },
            {
                name: '韻韻',
                icon: '/images/target-icon.png',
                status: [
                    { type: 'orange', text: '複習' },
                    { type: 'yellow', text: '練習' }
                ],
                date: '2023年11月1日',
                lessons: '課程'
            }
        ]
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
