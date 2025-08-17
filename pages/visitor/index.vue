<template>
    <NuxtLayout name="visitor">
        <div class="flex justify-between">
            <div class="w-[716px]">
                <div class="font-black text-[32px] mt-10 mb-2 text-brown">
                    最新公告
                </div>
                <small class="text-[#8A8A8A]">
                    最新的課程通知、講座活動、遊學團都在這裡！
                </small>
                <div class="">
                    <img src="~/assets/images/ad1.png" alt="" srcset="">
                </div>
            </div>
            <div class="">
                <div class="font-black text-[32px] mt-10 mb-2 text-brown flex items-center">
                    行事曆
                    <div class="bg-brown-100  text-[#f8f7f0] text-[14px] rounded-[20px] py-[10px] px-[24px] ml-3">
                        綁定Google日曆
                    </div>
                </div>
                <small class="text-[#8A8A8A]">
                    綁定自己的行事曆，讓你精準掌握學習行程！
                </small>
                <CalendarWidget />
                <div class="flex items-center mt-3 justify-between">
                    <div
                        class="flex-1 text-center bg-brown-100  text-[#f8f7f0] text-[14px] rounded-[12px] py-[10px] px-[24px] ml-3">
                        諮商特約
                    </div>
                    <div
                        class="flex-1 text-center bg-brown-100  text-[#f8f7f0] text-[14px] rounded-[12px] py-[10px] px-[24px] ml-3">
                        俱樂部選課
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-10 w-[716px]">
            <div>
                <div class="font-black text-[32px] mt-10 mb-2 text-brown">
                    最新公告
                </div>
                <small class="text-[#8A8A8A]">
                    最新的課程通知、講座活動、遊學團都在這裡！
                </small>
                <div class="">
                    <LearningDashboard />
                </div>
            </div>
            <div>
                <div class="font-black text-[32px] mt-10 mb-2 text-brown">
                    最新公告
                </div>
                <small class="text-[#8A8A8A]">
                    最新的課程通知、講座活動、遊學團都在這裡！
                </small>
                <div class="">
                    <CourseList />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import LearningDashboard from '@/components/LearningDashboard.vue';
import CourseList from '~/components/CourseList.vue';
import CalendarWidget from '~/components/CalendarWidget.vue';
</script>
