<template>
    <NuxtLayout name="visitor">
        <div class="mt-4 grid grid-cols-3 py-4">
            <div class="col-span-2 flex flex-col gap-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="bg-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black text-white"
                    >
                        全部主題
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        課程公告
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        學習討論
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        旅遊分享
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        學習方式
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        疑難困惑
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black shadow"
                    >
                        投票
                    </div>
                </div>
                <div class="p-5">
                    <Article />
                </div>
            </div>
            <div class="col-span-1 flex flex-col gap-y-4">
                <div class="flex items-center justify-end gap-4">
                    <div
                        class="bg-primary flex h-[40px] w-[88px] items-center justify-center rounded-2xl text-xs font-black text-white"
                    >
                        發文
                    </div>
                    <div
                        class="bg-brown-50 text-brown-800 border-brown-800 flex h-[40px] w-[88px] items-center justify-center rounded-2xl border text-xs font-black"
                    >
                        我的發文
                    </div>
                </div>
                <div class="flex items-center justify-end">
                    <ChatRoom />
                </div>
                <div class="flex items-center justify-end">
                    <div class="h-[250px] w-sm rounded-3xl bg-[#E5E2DA] flex items-center justify-center text-white">
                        活動／廣告版位
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// 設置頁面 meta
useHead({
    title: '俱樂部 - MK 翻轉外語'
})
</script>
