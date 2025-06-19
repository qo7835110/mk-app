<template>
    <div>

        <Head>
            <Title>首頁 - {{ siteName }}</Title>
            <Meta name="description" content="歡迎來到我們的首頁" />
        </Head>

        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">
                歡迎使用 Nuxt3 專案
            </h1>

            <div class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                <h2 class="text-2xl font-semibold mb-4">Pinia 狀態管理示例</h2>
                <p class="text-gray-600 mb-4">當前計數: {{ count }}</p>
                <p class="text-gray-600 mb-4">雙倍計數: {{ doubleCount }}</p>
                <button @click="increment" class="btn-primary">
                    增加計數
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { public: { siteName } } = useRuntimeConfig()
const store = useMainStore()
const { count, doubleCount, increment } = storeToRefs(store)
</script>