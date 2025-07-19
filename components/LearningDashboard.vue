<!-- LearningDashboard.vue -->
<template>
    <div class="max-w-md mx-auto p-4 space-y-4">
        <!-- 主進度卡片 -->
        <div
            class="bg-[#362010] text-white rounded-3xl p-6 relative overflow-hidden shadow-lg">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6">
                    <div class="relative">
                        <CircularProgress :value="mainProgress" color="orange" size="large">
                            <span class="text-white text-2xl font-bold">{{ mainProgress }}</span>
                        </CircularProgress>
                    </div>
                    <div class=" text-center">
                        <div class="flex items-center space-x-2 mb-2 rounded-full bg-white px-2">
                            <span
                                class="text-[#362010] py-1.5 text-sm font-semibold shadow-sm">
                                關鍵探索期
                            </span>
                            <span
                                class="bg-[#362010] text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                1
                            </span>
                        </div>
                        <p class="text-white text-base font-medium">學習頻率尚可</p>
                    </div>
                </div>
                <svg class="text-white opacity-80 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>

        <!-- 子項目進度卡片 -->
        <div class="bg-[#362010] text-white rounded-3xl p-6 shadow-lg">
            <div class="grid grid-cols-4 gap-6">
                <div v-for="item in subProgressData" :key="item.label" class="flex flex-col items-center space-y-3">
                    <div class="relative">
                        <CircularProgress :value="item.value" :max-value="item.maxValue" :color="item.color"
                            size="small">
                            <span class="text-white text-xl font-bold">{{ item.value }}</span>
                        </CircularProgress>
                    </div>
                    <span class="text-white text-sm text-center font-medium">{{ item.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CircularProgress from './CircularProgress.vue'

const mainProgress = ref(62)

const subProgressData = ref([
    { label: '快朗', value: 14, maxValue: 20, color: 'red' },
    { label: '組織圖', value: 6, maxValue: 10, color: 'green' },
    { label: '關鍵字', value: 3, maxValue: 10, color: 'yellow' },
    { label: '必修課', value: 8, maxValue: 15, color: 'blue' }
])
</script>