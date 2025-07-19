<template>
    <div class="bg-[#F8F7F0] min-h-screen">
        <div class="rounded-2xl h-full flex">
            <!-- 樹狀導航側邊欄 -->
            <TreeNavigation />
            
            <!-- 主要內容區域 -->
            <div class="flex-1 p-8">
                <div class="bg-white rounded-2xl h-full p-6">
                    <h1 class="text-2xl font-bold text-gray-800 mb-4">歡迎來到 MK 翻轉外語</h1>
                    <p class="text-gray-600">請從左側選單選擇您要使用的功能。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 設置頁面 meta
useHead({
    title: "MK 翻轉外語 - 主頁",
});
</script>