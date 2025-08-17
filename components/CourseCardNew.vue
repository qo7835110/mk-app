<template>
    <div
        class="bg-brown-50 rounded-3xl p-6 shadow hover:shadow-lg transition-all duration-300 relative overflow-hidden w-72">
        <!-- 頂部標籤 -->
        <!-- <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-2">
                <span class="px-3 py-1 rounded-full text-xs font-medium text-white" :class="levelBadgeClass">
                    {{ course.level }}
                </span>
                <span class="text-sm text-gray-600">{{ course.date }}</span>
            </div>
        </div> -->

        <!-- 課程圖片區域 -->
        <div class="w-full h-32 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
            <img v-if="course.image" :src="course.image" :alt="course.title" class="w-full h-full object-cover">
            <div v-else class="w-full h-full bg-[#D9D9D9] flex items-center justify-center">
            </div>
        </div>

        <!-- 課程標題 -->
        <h3 class=" mb-3 flex items-center justify-between">
            <div class="text-lg font-black text-brown-900">
                {{ course.title }}
            </div>
            <div class="rounded-[24px] w-[112px] text-white text-center px-[10px] font-black text-[10px] py-[6px]"
                :class="statusList[status] ? statusList[status] : 'bg-brown-900'">
                {{ status }}星期四
            </div>
        </h3>

        <!-- 標籤區域 -->
        <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in course.tags" :key="tag"
                class="px-[8px] py-1 font-bold text-brown-700 text-xs rounded-[24px] border border-brown-600">
                {{ tag }}
            </span>
        </div>

        <!-- 進度條區域 -->
        <div class="mb-4">
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="h-2 rounded-full transition-all duration-300" :class="progressBarClass"
                    :style="{ width: course.progress + '%' }" />
            </div>
            <!-- <div class="flex justify-between items-center mt-1">
                <span class="text-xs text-gray-500">{{ course.progress }}% 完成</span>
                <span class="text-xs text-gray-500">{{ course.enrolled || 0 }}/{{ course.capacity || 0 }} 人</span>
            </div> -->
        </div>

        <!-- 時間資訊 -->
        <div class="flex items-center justify-between mb-6 text-brown-700 font-black">
            <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ course.time }}
            </div>
            <!-- 收藏按鈕 -->
            <button class="hover:bg-gray-100 rounded-full transition-colors" @click="handleBookmark">
                <svg class="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </button>
        </div>

        <!-- 操作按鈕 -->
        <div class="flex space-x-3">
            <button
                class="flex-1 px-4 py-2 bg-brown-300 text-white rounded-xl text-sm font-medium hover:bg-brown-400 transition-colors"
                @click="handleCourseInfo">
                課程資訊
            </button>
            <button
                class="flex-1 px-4 py-2 bg-brown-100 text-white rounded-xl text-sm font-medium  transition-colors flex"
                type="button" disabled>
                進入課堂
                <img class="ml-1" src="~/assets/images/icon/lock.svg" alt="">
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    course: {
        type: Object,
        required: false,
        default: () => ({
            title: "",
            level: "",
            date: "",
            time: "",
            tags: [],
            image: null,
            status: "",
            progress: 0,
            enrolled: 0,
            capacity: 0,
        }),
    },
});

const statusList = {
    '今日': 'bg-blue-600',
    '進行中': 'bg-orange-500',
}

// 根據課程等級設置徽章顏色
const levelBadgeClass = computed(() => {
    const levelMap = {
        N5: "bg-orange-500",
        N4: "bg-blue-500",
        N3: "bg-gray-800",
        N2: "bg-purple-600",
        N1: "bg-red-600",
        基礎班: "bg-gray-800",
        進階班: "bg-blue-600",
    };
    return levelMap[props.course.level] || "bg-gray-500";
});

// 進度條顏色
const progressBarClass = computed(() => {
    // 根據圖片，進度條使用橘色主題色
    return "bg-primary";
});

// 事件處理
const emit = defineEmits(["courseInfo", "register", "bookmark"]);

const handleCourseInfo = () => {
    emit("courseInfo", props.course);
};

const handleRegister = () => {
    emit("register", props.course);
};

const handleBookmark = () => {
    emit("bookmark", props.course);
};
</script>

<style scoped></style>
