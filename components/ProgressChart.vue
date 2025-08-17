<template>
    <div class="progress-chart-container">
        <ClientOnly>
            <v-chart :option="chartOption" class="chart-wrapper" />
            <template #fallback>
                <div class="loading-placeholder">
                    <div class="loading-content">
                        <div class="loading-spinner" />
                        <span>載入圖表中...</span>
                    </div>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
    GridComponent,
    GraphicComponent
} from 'echarts/components'

use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    GraphicComponent
])

const props = defineProps({
    percentage: {
        type: Number,
        default: 75
    },
    title: {
        type: String,
        default: '無法測量'
    },
    maxValue: {
        type: Number,
        default: 100
    },
    data: {
        type: Array,
        default: () => [
            0, 0, 0.5, 1, 0.8, 1.2, 0.9, 1.5, 1.8, 2.1, 2.5, 2.8, 3.2, 3.5,
            3.1, 2.9, 2.6, 2.3, 1.9, 1.6, 1.2, 0.8, 0.4
        ]
    }
})

// 計算數據的最大值並向上取整
const maxDataValue = computed(() => {
    const max = Math.max(...props.data)
    return Math.ceil(max)
})

// 動態生成 Y 軸標籤
const yAxisLabels = computed(() => {
    const labels = []
    const stepCount = 4 // 顯示4個刻度標籤
    const step = maxDataValue.value / stepCount

    for (let i = stepCount; i >= 0; i--) {
        const value = Math.round(i * step * 10) / 10 // 保留一位小數
        const topPosition = 80 + (stepCount - i) * 30 // 每個標籤間距30px
        labels.push({
            type: 'text',
            left: 30,
            top: topPosition,
            style: {
                text: value.toString(),
                fontSize: 14,
                fill: '#FFF',
                fontWeight: 'bold'
            }
        })
    }

    return labels
})

const chartOption = computed(() => ({
    backgroundColor: '#4A2C17',
    grid: {
        containLabel: false
    },
    graphic: [
        {
            type: 'text',
            left: 30,
            top: 20,
            style: {
                text: '-%',
                fontSize: 16,
                fontWeight: 'bold',
                fill: '#FFF'
            }
        },
        {
            type: 'text',
            left: 30,
            top: 40,
            style: {
                text: props.title,
                fontSize: 12,
                fill: '#DDD'
            }
        },
    ],
    xAxis: {
        type: 'category',
        data: Array.from({ length: 23 }, (_, i) => i),
        axisLine: {
            show: true,
            lineStyle: {
                color: '#8D6E63'
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#8D6E63'
            }
        },
        axisLabel: {
            color: '#DDD',
            fontSize: 10
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: maxDataValue.value,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(141, 110, 99, 0.3)',
                width: 1,
            }
        },
        splitNumber: 4, // 與左側標籤數量對應
        axisLine: {
            show: false,
            lineStyle: {
                color: '#8D6E63'
            }
        },
    },
    series: [
        {
            type: 'line',
            data: props.data,
            smooth: true,
            lineStyle: {
                color: '#8D6E63',
                width: 2
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(141, 110, 99, 0.8)' },
                        { offset: 1, color: 'rgba(141, 110, 99, 0.1)' }
                    ]
                }
            },
            symbol: 'none'
        }
    ]
}))
</script>

<style scoped>
.progress-chart-container {
    width: 100%;
    height: 350px;
    border-radius: 24px;
    overflow: hidden;
}

.chart-wrapper {
    width: 100%;
    height: 100%;
}

.loading-placeholder {
    width: 100%;
    height: 100%;
    background-color: #5D4037;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #FFF;
}

.loading-spinner {
    width: 32px;
    height: 32px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #FFF;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
