<template>
    <div class="">
        <!-- 工具欄 -->
        <!-- <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-800">日曆</h1>
            <div class="flex items-center space-x-2">
                <button @click="goToToday"
                    class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 text-sm">
                    今天
                </button>
                <button @click="toggleView"
                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm">
                    {{ viewMode === 'month' ? '年視圖' : '月視圖' }}
                </button>
            </div>
        </div> -->

        <!-- 日曆組件 -->
        <Calendar ref="calendarRef" v-model="selectedDate" @date-select="handleDateSelect" :highlight-today="true" />

        <!-- 選中日期信息
        <div v-if="selectedDate" class="bg-white rounded-lg p-4 shadow">
            <h3 class="font-medium text-gray-800 mb-2">選中日期</h3>
            <p class="text-gray-600">{{ formatSelectedDate }}</p>
        </div> -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import Calendar from './Calendar.vue'

const calendarRef = ref(null)
const selectedDate = ref(dayjs())
const viewMode = ref('month')

const formatSelectedDate = computed(() => {
    if (!selectedDate.value) return ''
    return selectedDate.value.format('YYYY年M月D日 dddd')
})

const handleDateSelect = (date) => {
    console.log('選中日期:', date)
    // 可以在這裡添加自定義邏輯
}

const goToToday = () => {
    calendarRef.value?.goToToday()
}

const toggleView = () => {
    viewMode.value = viewMode.value === 'month' ? 'year' : 'month'
    // 這裡可以實現年視圖切換邏輯
}
</script>