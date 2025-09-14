<!-- LearningHistory.vue -->
<template>
    <div class="rounded-3xl px-6 py-5 shadow max-w-sm mx-auto h-[88px]">
        <div class="flex justify-between">
            <div class="font-bold text-brown text-xl">{{ title }}</div>
            <div class="font-bold text-gray-400 text-xl">></div>
        </div>
        <div class="flex items-center">
            <ProgressBar
                class="flex-1"
                :current="62"
                :total="100"
                unit="分"
                :showText="false"
                :progress-color="color"
            />
            <div class="font-bold">
                3 / 5篇
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: 'bg-[#FFC649]',
    },
});

</script>

<style scoped>
/* 如果需要額外樣式可以在這裡添加 */
</style>
