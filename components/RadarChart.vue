<template>
    <div class="w-full shadow rounded-[24px] flex flex-col justify-center items-center">
        <div ref="chartRef" class="chart-wrapper"></div>
        <div class="flex justify-around items-center mt-6">
            <div class="flex items-center mr-6">
                <span class="inline-block size-[12px] rounded-full mr-2 border border-brown-900 bg-brown-500" />
                <span class="text-sm text-brown-900">目前分數</span>
            </div>
            <div class="flex items-center">
                <span class="inline-block size-[12px] rounded-full mr-2 border border-primary bg-primary-100" />
                <span class="text-sm text-primary">期待分數</span>
            </div>
        </div>
        <div class="flex items-center justify-center my-6">
                        <button
                class="flex-1 px-4 py-2 bg-brown-300 text-white rounded-xl text-sm font-medium hover:bg-brown-400 transition-colors"
                >
                成為學員，進行分析吧！
            </button>
        </div>
        <!-- 控制面板 -->
        <!-- <div class="control-panel">
            <h3>調整數值</h3>
            <div class="slider-grid">
                <div v-for="(label, index) in labels" :key="label" class="slider-item">
                    <label>{{ label }}</label>
                    <input type="range" min="0" max="100" v-model="chartData[index]" @input="updateChart" />
                    <span>{{ chartData[index] }}%</span>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance = null

const labels = [
    '記憶策略',
    '認知策略',
    '情境策略',
    '後設認知策略',
    '情感策略',
    '社交策略'
]

const chartData = ref([75, 85, 65, 80, 70, 90])

const initChart = () => {
    if (chartRef.value) {
        chartInstance = echarts.init(chartRef.value)

        const option = {
            title: {
                show: false
            },
            tooltip: {
                show: false
            },
            radar: {
                center: ['50%', '50%'],
                radius: '65%',
                startAngle: 90,
                shape: 'polygon',
                indicator: labels.map(name => ({ name, max: 100 })),
                axisName: {
                    fontFamily: 'Gen Jyuu Gothic XP',
                    fontSize: 14,
                    color: '#999999',
                    fontWeight: 900,
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    textAlign: 'center',
                    distance: 15
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#E8E8E8',
                        width: 2,
                        type: 'solid',
                        cap: 'round',
                        join: 'round'
                    }
                },
                axisLine: {
                    show: false
                },
                splitNumber: 4
            },
            series: [],
            legend: {
                show: false
            }
        }

        chartInstance.setOption(option)
    }
}

const updateChart = () => {
    if (chartInstance) {
        const option = {
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: chartData.value,
                            name: '當前水準',
                            areaStyle: {
                                color: 'rgba(59, 130, 246, 0.1)'
                            },
                            lineStyle: {
                                color: '#72acd1',
                                width: 2
                            },
                            itemStyle: {
                                color: '#72acd1',
                                borderWidth: 2,
                                borderColor: '#fff'
                            }
                        }
                    ]
                }
            ]
        }
        chartInstance.setOption(option)
    }
}

const handleResize = () => {
    chartInstance?.resize()
}

onMounted(() => {
    initChart()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    chartInstance?.dispose()
})
</script>

<style scoped>
.radar-chart-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #F8F8F8;
    border-radius: 12px;
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.2);
}

.chart-wrapper {
    min-height: 200px;
    min-width: 200px;
    width: 100%;
    background: transparent;
}

.control-panel {
    margin-top: 24px;
    padding: 16px;
    background: #f9fafb;
    border-radius: 8px;
}

.control-panel h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #374151;
}

.slider-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}

.slider-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.slider-item label {
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
}

.slider-item input[type="range"] {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
}

.slider-item input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #72acd1;
    border-radius: 50%;
    cursor: pointer;
}

.slider-item input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #72acd1;
    border-radius: 50%;
    cursor: pointer;
    border: none;
}

.slider-item span {
    font-size: 12px;
    color: #6b7280;
    text-align: center;
}

.description-panel {
    margin-top: 16px;
    padding: 16px;
    background: #eff6ff;
    border-radius: 8px;
}

.description-panel h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1e40af;
}

.descriptions {
    font-size: 14px;
    color: #1d4ed8;
}

.descriptions p {
    margin: 4px 0;
}

.descriptions strong {
    font-weight: 600;
}

@media (max-width: 768px) {
    .slider-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>