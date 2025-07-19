<template>
    <div class="bg-[#f8f7f0] rounded-2xl p-6 shadow-lg max-w-md min-w-[350px] h-[300px]">
        <!-- 月份導航 -->
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-brown">
                {{ currentYear }}年 {{ currentMonth }}月
            </h2>
            <div class="flex items-center space-x-4">
                <button @click="previousMonth"
                    class="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                </button>
                <button @click="nextMonth" class="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- 星期標題 -->
        <div class="grid grid-cols-7 gap-1">
            <div v-for="day in weekDays" :key="day" class="text-center text-sm font-medium text-gray-500 py-2">
                {{ day }}
            </div>
        </div>

        <!-- 日期網格 -->
        <div class="grid grid-cols-7 gap-1">
            <div v-for="date in calendarDates" :key="`${date.year}-${date.month}-${date.day}`" @click="selectDate(date)"
                class=" aspect-[5/3] flex items-center justify-center text-sm cursor-pointer rounded-[20px] transition-all duration-200 hover:bg-gray-200"
                :class="getDateClasses(date)">
                {{ date.day }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    modelValue: {
        type: Date,
        default: () => new Date()
    },
    highlightToday: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['update:modelValue', 'dateSelect'])

const currentDate = ref(new Date(props.modelValue))
const selectedDate = ref(new Date(props.modelValue))

const weekDays = ['一', '二', '三', '四', '五', '六', '日']

const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth() + 1)

// 獲取當月日曆數據
const calendarDates = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()

    // 當月第一天
    const firstDay = new Date(year, month, 1)
    // 當月最後一天
    const lastDay = new Date(year, month + 1, 0)

    // 計算第一週需要顯示的上個月日期
    const firstDayWeek = (firstDay.getDay() + 6) % 7 // 轉換為週一開始
    const prevMonthDays = []

    if (firstDayWeek > 0) {
        const prevMonth = new Date(year, month, 0)
        for (let i = firstDayWeek - 1; i >= 0; i--) {
            prevMonthDays.push({
                day: prevMonth.getDate() - i,
                month: prevMonth.getMonth(),
                year: prevMonth.getFullYear(),
                isCurrentMonth: false,
                isPrevMonth: true
            })
        }
    }

    // 當月日期
    const currentMonthDays = []
    for (let day = 1; day <= lastDay.getDate(); day++) {
        currentMonthDays.push({
            day,
            month,
            year,
            isCurrentMonth: true,
            isPrevMonth: false,
            isNextMonth: false
        })
    }

    // 下個月補充日期
    const totalCells = Math.ceil((prevMonthDays.length + currentMonthDays.length) / 7) * 7
    const nextMonthDays = []
    const remainingCells = totalCells - prevMonthDays.length - currentMonthDays.length

    for (let day = 1; day <= remainingCells; day++) {
        nextMonthDays.push({
            day,
            month: month + 1,
            year: month === 11 ? year + 1 : year,
            isCurrentMonth: false,
            isNextMonth: true
        })
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
})

// 獲取日期樣式
const getDateClasses = (date) => {
    const today = new Date()
    const isToday = props.highlightToday &&
        date.year === today.getFullYear() &&
        date.month === today.getMonth() &&
        date.day === today.getDate()

    const isSelected = selectedDate.value &&
        date.year === selectedDate.value.getFullYear() &&
        date.month === selectedDate.value.getMonth() &&
        date.day === selectedDate.value.getDate()

    return {
        'text-gray-400': !date.isCurrentMonth,
        'text-gray-900': date.isCurrentMonth,
        'bg-emerald-500 text-white font-bold': isSelected || isToday,
        'hover:bg-emerald-100': date.isCurrentMonth && !isSelected && !isToday
    }
}

// 選擇日期
const selectDate = (date) => {
    const newDate = new Date(date.year, date.month, date.day)
    selectedDate.value = newDate
    emit('update:modelValue', newDate)
    emit('dateSelect', newDate)
}

// 上一月
const previousMonth = () => {
    const newDate = new Date(currentDate.value)
    newDate.setMonth(newDate.getMonth() - 1)
    currentDate.value = newDate
}

// 下一月
const nextMonth = () => {
    const newDate = new Date(currentDate.value)
    newDate.setMonth(newDate.getMonth() + 1)
    currentDate.value = newDate
}

// 跳轉到今天
const goToToday = () => {
    const today = new Date()
    currentDate.value = today
    selectedDate.value = today
    emit('update:modelValue', today)
}

// 暴露方法給父組件
defineExpose({
    goToToday,
    previousMonth,
    nextMonth
})

onMounted(() => {
    // 如果沒有選中日期，默認選中今天
    if (!selectedDate.value && props.highlightToday) {
        selectedDate.value = new Date()
    }
})
</script>