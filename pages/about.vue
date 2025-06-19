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
const { public: { siteName } } = useRuntimeConfig()
</script>