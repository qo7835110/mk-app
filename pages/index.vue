<template>
    <div class="bg-[#F8F7F0] min-h-screen">
        <div class="rounded-2xl h-full flex">
            <!-- 樹狀導航側邊欄 -->
            <TreeNavigation />
            
            <!-- 主要內容區域 -->
            <div class="flex-1 p-8">
                <div class="rounded-2xl h-full p-6">
                    <h1 class="text-2xl font-bold text-gray-800 mb-6">歡迎來到 MK 翻轉外語</h1>
                    
                    <!-- 學習組件展示區域 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- 學習週期卡 -->
                        <div>
                            <h2 class="text-lg font-semibold text-gray-700 mb-4">學習週期追蹤</h2>
                        </div>
                        
                        <!-- 學習儀表板 -->
                        <div>
                            <h2 class="text-lg font-semibold text-gray-700 mb-4">學習進度儀表板</h2>
                            <LearningDashboard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LearningCycleCard from '~/components/LearningCycleCard.vue'
import LearningDashboard from '~/components/LearningDashboard.vue'

// 設置頁面 meta
useHead({
    title: "MK 翻轉外語 - 主頁",
});
</script>