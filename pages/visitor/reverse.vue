<template>
    <NuxtLayout name="visitor">
        <div class="flex">
            <div class="flex-1">
                <div class="mt-3">
                    <div class="flex item-center justify-between">
                        <div class="mb-3">
                            <div class="flex-1 text-[20px] font-black text-brown-900 mb-1">成為學員，即可了解自己的學習狀態 ！</div>
                            <div class="flex-1 font-medium text-sm text-gray-400 mb-1">我們針對每個學員，量身打造專屬於他們的學習方式，現在就趕緊嘗試吧！
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button
                                class="px-4 py-4 bg-brown-300 text-white rounded-xl text-sm font-medium hover:bg-brown-400 transition-colors">
                                當期處方簽
                            </button>
                            <button
                                class="px-4 py-4 bg-brown-100 text-white rounded-xl text-sm font-medium  transition-colors flex"
                                type="button" disabled>
                                進入課堂
                                <img class="ml-1" src="~/assets/images/icon/lock.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex">
                        <!-- 課程列表 -->
                        <div class="mt-8 flex-1">
                            <ActivityHeatmap />
                        </div>
                        <div class="w-[340px]">
                            <RadarChart />
                        </div>
                    </div>
                </div>

                <div class="py-5 flex mt-3 justify-between">
                    <div class="mx-3">
                        <div class="">
                            <LearningCycleCard visitor-status="訪客狀態" />
                            <div class="flex justify-between mt-4">
                                <button
                                    class="px-4 py-2 bg-brown-100 text-white rounded-xl text-sm font-medium  transition-colors flex grow justify-center"
                                    type="button" disabled>
                                    測驗尚未開放
                                    <img class="ml-1" src="~/assets/images/icon/lock.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mx-3 shadow p-4 rounded-[24px]">
                        <div class="mb-3">
                            <div class="flex-1 text-[32px] font-black text-brown-900 mb-1">本期學習</div>
                        </div>
                        <RemainingLessons />
                        <RemainingLessons />
                        <RemainingLessons />
                    </div>
                    <div class="mx-3 shadow p-4 rounded-[24px]">
                        <div class="mb-3">
                            <div class="flex-1 text-[32px] font-black text-brown-900 mb-1">學習歷程</div>
                        </div>
                        <LearningHistoryCard />
                        <LearningHistoryCard />
                        <LearningHistoryCard />
                        <LearningHistoryCard />
                        <LearningHistoryCard />
                    </div>

                </div>
            </div>
            <div class="w-[100px] flex justify-center pt-[80px]">
                <div class="writing-vertical-lr font-medium text-gray-400 tracking-[0.4rem]">你得專屬 CAT</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
// 設置頁面 meta
useHead({
    title: "俱樂部 - MK 翻轉外語",
});
</script>
