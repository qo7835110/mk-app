<template>
    <NuxtLayout name="visitor">
        <!-- 聚樂部頁面特定內容 -->
        <div class="mt-3 w-full flex flex-col flex-1">
            <div class="flex item-center justify-between">
                <div class="mb-3">
                    <div class="flex-1 text-[32px] font-black text-brown-900 mb-1">聚樂部</div>
                    <div class="flex-1 font-medium text-sm text-gray-400 mb-1">歡迎來到聚樂部頁面！探索我們的精選課程</div>
                </div>
                <div class="flex items-center space-x-4">
                    <button
                        class="px-4 py-4 bg-brown-300 text-white rounded-xl text-sm font-medium hover:bg-brown-400 transition-colors">
                        課程資訊
                    </button>
                    <button
                        class="px-4 py-4 bg-brown-100 text-white rounded-xl text-sm font-medium  transition-colors flex"
                        type="button" disabled>
                        進入課堂
                        <img class="ml-1" src="~/assets/images/icon/lock.svg" alt="">
                    </button>
                    <button
                        class="px-4 py-4 bg-brown-100 text-white rounded-xl text-sm font-medium  transition-colors flex"
                        type="button" disabled>
                        聚樂部選課
                        <img class="ml-1" src="~/assets/images/icon/lock.svg" alt="">
                    </button>
                </div>
            </div>
            <div>
                <!-- 課程列表 -->
                <div class="mt-8 w-[80vw]">
                    <CourseList :courses="courses" title="熱門課程" @course-info="handleCourseInfo"
                        @register="handleRegister" @bookmark="handleBookmark" />
                </div>
            </div>
        </div>

        <div class="py-5 flex mt-3">
            <div class="mx-3">
                <div class="mb-3">
                    <div class="flex-1 text-[32px] font-black text-brown-900 mb-1">課程出席率</div>
                    <div class="flex-1 font-medium text-sm text-gray-400 mb-1">依據老師排課及自行選課後，系統自動計算的結果</div>
                </div>
                <div class="w-[440px]">
                    <!-- 進度統計圖表 -->
                    <ProgressChart :percentage="75" :maxValue="85" />
                </div>
            </div>
            <div class="mx-3">
                <div class="mb-3">
                    <div class="flex-1 text-[32px] font-black text-brown-900 mb-1">剩餘堂數</div>
                    <div class="flex-1 font-medium text-sm text-gray-400 mb-1">剩餘堂數</div>
                </div>
                <RemainingLessons />
                <RemainingLessons />
                <RemainingLessons />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import CourseList from '~/components/CourseList.vue'

// 設置頁面 meta
useHead({
    title: "聚樂部 - MK 翻轉外語",
});

// 範例課程資料
const courses = ref([
    {
        id: 1,
        title: "N5綜合實成",
        level: "N5",
        date: "4/7",
        time: "上午10:00 - 中午12:30",
        tags: ["N5", "速成", "綜合考"],
        image: null,
        status: "報名中",
        progress: 65,
        enrolled: 13,
        capacity: 20
    },
    {
        id: 2,
        title: "日文口說實成",
        level: "N3",
        date: "4/8",
        time: "晚上21:00 - 晚上21:55",
        tags: ["N3", "口說", "社交會話"],
        image: null,
        status: "報名中",
        progress: 80,
        enrolled: 16,
        capacity: 20
    },
    {
        id: 3,
        title: "日文主題發表",
        level: "基礎班",
        date: "基礎班",
        time: "上午10:00 - 中午12:30",
        tags: ["N2", "發表", "情境會話"],
        image: null,
        status: "報名中",
        progress: 35,
        enrolled: 7,
        capacity: 20
    },
    {
        id: 4,
        title: "N3文法實成",
        level: "N3",
        date: "11/4",
        time: "上午10:00 - 中午12:30",
        tags: ["N3", "N3", "文法", "專字"],
        image: null,
        status: "報名中",
        progress: 90,
        enrolled: 18,
        capacity: 20
    },
    {
        id: 5,
        title: "N4聽力強化",
        level: "N4",
        date: "4/15",
        time: "下午14:00 - 下午16:00",
        tags: ["N4", "聽力", "強化訓練"],
        image: null,
        status: "即將開課",
        progress: 25,
        enrolled: 5,
        capacity: 20
    },
    {
        id: 6,
        title: "商用日語會話",
        level: "N2",
        date: "4/20",
        time: "晚上19:00 - 晚上20:30",
        tags: ["N2", "商用", "會話"],
        image: null,
        status: "熱門",
        progress: 95,
        enrolled: 19,
        capacity: 20
    }
])

// 事件處理函數
const handleCourseInfo = (course) => {
    console.log('查看課程資訊:', course)
}

const handleRegister = (course) => {
    console.log('立即報名:', course)
}

const handleBookmark = (course) => {
    console.log('收藏課程:', course)
}
</script>
