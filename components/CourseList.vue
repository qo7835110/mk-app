<template>
    <div class="max-w-2xl mx-auto p-4 space-y-4">
        <CourseCard v-for="course in courses" :key="course.id" :course="course" @click="handleCourseClick(course)" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CourseCard from './CourseCard.vue'

const courses = ref([
    {
        id: 1,
        title: 'N5文法',
        status: '進行中',
        tags: ['N5', '文法', '單字'],
        progress: 65,
        time: '上午10:00 - 中午12:30',
        image: null
    },
    {
        id: 2,
        title: '日文主題發表',
        status: '今天',
        tags: ['N3', '口說', '聽力'],
        progress: 45,
        time: '晚上09:00 - 晚上10:30',
        image: null
    }
])

const handleCourseClick = (course) => {
    console.log('點擊課程:', course.title)
    // 處理課程點擊事件
}
</script>