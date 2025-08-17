<template>
    <div class="course-list-container px-10">

        <!-- 課程列表容器 -->
        <div class="relative group">

            <!-- 滾動容器 -->
            <div ref="scrollContainer"
                class="flex overflow-x-auto scrollbar-thin gap-6 pb-4 scroll-smooth px-1 flex-nowrap"
                @scroll="updateScrollButtons">
                <div v-for="course in courses" :key="course.id" class="flex-shrink-0">
                    <CourseCardNew :course="course" @course-info="handleCourseInfo" @register="handleRegister"
                        @bookmark="handleBookmark" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import CourseCardNew from './CourseCardNew.vue'

// Props
defineProps({
    courses: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: '課程列表'
    }
})

// Emits
const emit = defineEmits(['course-info', 'register', 'bookmark'])

// 滾動容器引用
const scrollContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const updateScrollButtons = () => {
    if (scrollContainer.value) {
        const { scrollLeft: left, scrollWidth, clientWidth } = scrollContainer.value
        canScrollLeft.value = left > 0
        canScrollRight.value = left < scrollWidth - clientWidth - 10
    }
}

// 事件處理
const handleCourseInfo = (course) => {
    emit('course-info', course)
}

const handleRegister = (course) => {
    emit('register', course)
}

const handleBookmark = (course) => {
    emit('bookmark', course)
}

// 組件掛載後初始化
onMounted(async () => {
    await nextTick()
    updateScrollButtons()
})
</script>

<style scoped>
.scrollbar-thin {
    /* Firefox */
    scrollbar-width: auto;
    /* thumb color, track color */
    /* Safari and Chrome */
    -webkit-overflow-scrolling: touch;
}

.scrollbar-thin::-webkit-scrollbar {
    height: 8px;
    border-radius: 16px;
}

.scrollbar-thin::-webkit-scrollbar-track {
        background: linear-gradient(transparent 25%, #C7C7C7 25%, #C7C7C7 75%, transparent 75%);

    height: 4px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #EE7959;
    border-radius: 16px;
    /* 移除邊框，讓顏色更純淨 */
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #dc6d4a;
}

.scrollbar-thin::-webkit-scrollbar-corner {
    background: #C7C7C7;
}
</style>