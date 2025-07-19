<!-- CircularProgress.vue -->
<template>
    <div class="relative flex items-center justify-center">
        <svg :height="radius * 2" :width="radius * 2" class="transform -rotate-90">
            <!-- 背景圓圈 -->
            <circle :stroke="bgStrokeColor" fill="transparent" :stroke-width="strokeWidth" :r="normalizedRadius"
                :cx="radius" :cy="radius" />
            <!-- 進度圓圈 -->
            <circle :stroke="strokeColor" fill="transparent" :stroke-width="strokeWidth"
                :stroke-dasharray="strokeDasharray" :style="{ strokeDashoffset: strokeDashoffset }"
                stroke-linecap="round" :r="normalizedRadius" :cx="radius" :cy="radius"
                class="transition-all duration-300 ease-in-out" />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    value: {
        type: Number,
        required: true
    },
    maxValue: {
        type: Number,
        default: 100
    },
    size: {
        type: String,
        default: 'large'
    },
    color: {
        type: String,
        default: 'orange'
    }
})

const percentage = computed(() => (props.value / props.maxValue) * 100)
const radius = computed(() => props.size === 'large' ? 40 : 28)
const strokeWidth = computed(() => props.size === 'large' ? 8 : 5)
const normalizedRadius = computed(() => radius.value - strokeWidth.value * 2)
const circumference = computed(() => normalizedRadius.value * 2 * Math.PI)
const strokeDasharray = computed(() => `${circumference.value} ${circumference.value}`)
const strokeDashoffset = computed(() =>
    circumference.value - (percentage.value / 100) * circumference.value
)

const colorMap = {
    orange: '#fbbf24',
    red: '#f87171',
    green: '#34d399',
    yellow: '#fbbf24',
    blue: '#60a5fa'
}

const bgColorMap = {
    orange: '#fff6e3',
    red: '#ffffff',
    green: '#e9fff9',
    yellow: '#fff6e3',
    blue: '#e4eaff'
}

const strokeColor = computed(() => colorMap[props.color])
const bgStrokeColor = computed(() => bgColorMap[props.color])
</script>