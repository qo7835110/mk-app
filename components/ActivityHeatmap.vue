<template>
    <div class="p-6  rounded-lg  mx-auto">
        <!-- 主要內容區域 - 垂直排列 -->
        <div class="">
            <!-- 熱力圖格子 - 垂直排列 (7天一列) -->
            <!-- <div class="grid grid-cols-21 gap-1 mb-2">
                <div v-for="(day, index) in activityData" :key="index" :class="[
                    'w-4 h-4 rounded-sm cursor-pointer transition-all duration-200',
                    getIntensityColor(day.intensity),
                    'border border-gray-200'
                ]" :title="`${day.month}/${day.day} - 活動強度: ${day.intensity}`" />
            </div> -->
            <div class="w-full h-[30px] bg-primary"></div>
            <div class="w-full h-[120px] bg-primary-100"></div>
            <div class="w-full h-[30px] bg-primary-200"></div>

            <!-- 中文星期行 -->
            <div class="grid grid-cols-21 gap-1 mt-3">
                <div v-for="(day, index) in activityData" :key="index" class="w-4 flex justify-center">
                    <span class="text-xs text-gray-300 font-medium">
                        {{ getWeekdayName(day.weekday) }}
                    </span>
                </div>
            </div>

            <!-- 日期數字行 -->
            <div class="grid grid-cols-21 gap-1 mt-3">
                <div v-for="(day, index) in activityData" :key="index" class="w-4 flex justify-center">
                    <span class="text-xs text-gray-300 font-medium">
                        {{ day.day }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

// 模擬活動數據
const activityData = ref([])

// 生成過去21天的數據
const generateActivityData = () => {
    const data = []
    const today = dayjs()

    for (let i = 20; i >= 0; i--) {
        const date = today.subtract(i, 'day')

        // 隨機生成活動強度 (0-4)，增加有活動的機率
        const intensity = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 4) + 1

        data.push({
            date: date,
            day: date.date(),
            intensity: intensity,
            month: date.month() + 1,
            weekday: date.day()
        })
    }

    return data
}

// 根據強度返回對應的顏色類名
const getIntensityColor = (intensity) => {
    const colors = {
        0: 'bg-gray-100 hover:bg-gray-200',
        1: 'bg-orange-200 hover:bg-orange-300',
        2: 'bg-orange-300 hover:bg-orange-400',
        3: 'bg-orange-400 hover:bg-orange-500',
        4: 'bg-orange-500 hover:bg-orange-600'
    }
    return colors[intensity] || colors[0]
}

// 根據星期數字返回中文星期名稱
const getWeekdayName = (weekday) => {
    const weekdays = ['日', '一', '二', '三', '四', '五', '六']
    return weekdays[weekday] || ''
}

onMounted(() => {
    activityData.value = generateActivityData()
})
</script>

<style scoped>
.grid-cols-21 {
    grid-template-columns: repeat(21, minmax(0, 1fr));
}
</style>