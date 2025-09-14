<template>
    <div class="flex justify-between items-center">
        <!-- 進度條 -->
        <div class="w-full relative flex items-center my-4">
            <div class="w-full bg-gray-200 rounded-full h-2 absolute"></div>
            <div
                :class="` absolute h-4 rounded-full transition-all duration-300 ease-in-out ${progressColor}`"
                :style="{ width: `${percentage}%` }"
            />
        </div>

        <!-- 進度文字 -->
        <div
            class="flex justify-between text-sm text-gray-600 text-nowrap ml-4"
        >
            <span v-if="showText">{{ current }}/{{ total }} {{ unit }}</span>
            <span v-else-if="showPercentage">{{ percentage }}%</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// Props 定義
const props = defineProps({
    // 當前進度值
    current: {
        type: Number,
        required: true,
    },
    // 總進度值
    total: {
        type: Number,
        required: true,
    },
    // 進度條顏色 (Tailwind CSS 類名)
    progressColor: {
        type: String,
        default: 'bg-blue-500',
    },
    // 單位文字 (如：堂、課、節等)
    unit: {
        type: String,
        default: '堂',
    },
    // 是否顯示進度文字 (如：3/5 堂)
    showText: {
        type: Boolean,
        default: true,
    },
    // 是否顯示百分比
    showPercentage: {
        type: Boolean,
        default: false,
    },
    // 自定義進度條高度
    height: {
        type: String,
        default: 'h-2',
    },
});

// 計算進度百分比
const percentage = computed(() => {
    if (props.total === 0) return 0;
    return Math.round((props.current / props.total) * 100);
});
</script>

<style scoped>
/* 進度條動畫 */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>
