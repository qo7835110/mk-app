<template>
<div>
    <Head>
        <Title>首頁 - {{ siteName }}</Title>
        <Meta name="description" content="歡迎來到我們的首頁" />
    </Head>

    <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">歡迎使用 Nuxt3 專案</h1>

        <div class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 class="text-2xl font-semibold mb-4">Pinia 狀態管理示例</h2>
            <p class="text-gray-600 mb-4">當前計數: {{ count }}</p>
            <p class="text-gray-600 mb-4">雙倍計數: {{ doubleCount }}</p>
            <button @click="increment" class="btn-primary">增加計數</button>
        </div>
    </div>
</div>
</template>

<script setup>
const {
    public: { siteName },
} = useRuntimeConfig();
const store = useMainStore();
const { count, doubleCount, increment } = storeToRefs(store);
</script>
vue<!-- pages/about.vue -->
<template>
    <div>

        <Head>
            <Title>關於我們 - {{ siteName }}</Title>
            <Meta name="description" content="了解更多關於我們的資訊" />
        </Head>

        <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-900 mb-6">關於我們</h1>
            <div class="bg-white rounded-lg shadow-md p-6">
                <p class="text-gray-700 mb-4">
                    這是一個使用 Nuxt3 建立的現代化網站，整合了：
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                    <li>Nuxt3 - Vue.js 框架</li>
                    <li>Tailwind CSS - 實用優先的 CSS 框架</li>
                    <li>Pinia - Vue 狀態管理</li>
                    <li>SEO 優化 - 搜尋引擎優化設定</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const {
public: { siteName },
} = useRuntimeConfig();
</script>
