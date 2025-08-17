<template>
    <div class="rounded-2xl h-full flex py-[38px]">
        <!-- 左側邊欄 -->
        <LeftSidebar />
        
        <!-- 主要內容區域 -->
        <div class="flex-1 flex-col items-center justify-center px-[36px]">
            <!-- 頂部導航欄 -->
            <div class="flex items-center justify-between w-full">
                <div class="h-[50px] w-[440px] bg-white rounded-full flex items-center px-10 text-[#8A8A8A]">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.7558 0C18.1447 0 23.3414 5.17315 23.3414 11.533C23.3414 14.5335 22.1847 17.2702 20.2917 19.3241L24.0165 23.0242C24.3651 23.3712 24.3663 23.9326 24.0177 24.2796C23.844 24.4548 23.6144 24.5413 23.3859 24.5413C23.1587 24.5413 22.9303 24.4548 22.7554 24.2819L18.9856 20.5398C17.0026 22.1207 14.4882 23.0672 11.7558 23.0672C5.3669 23.0672 0.168945 17.8928 0.168945 11.533C0.168945 5.17315 5.3669 0 11.7558 0ZM11.7558 1.77649C6.35081 1.77649 1.95355 6.15259 1.95355 11.533C1.95355 16.9134 6.35081 21.2907 11.7558 21.2907C17.1596 21.2907 21.5568 16.9134 21.5568 11.533C21.5568 6.15259 17.1596 1.77649 11.7558 1.77649Z"
                            fill="#242220"
                            fill-opacity="0.56"
                        />
                    </svg>
                    <div class="ml-2">
                        搜尋課程、話題、教材、學習方法教學等等
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img src="~/assets/images/icon/bell.svg" alt="">
                    <img src="~/assets/images/icon/logout.svg" alt="">
                </div>
            </div>
            
            <!-- 主要內容插槽 -->
            <slot />
        </div>
    </div>
</template>

<script setup>
// 設置頁面 meta
useHead({
    title: "MK 翻轉外語",
});
</script>
