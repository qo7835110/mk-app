<template>
    <!-- 使用 Teleport 將 Modal 傳送到 body -->
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="show" class="modal-overlay" @click="handleOverlayClick">
                <div class="modal-container bg-[#F8F7F0]" @click.stop role="dialog" aria-modal="true" :aria-labelledby="titleId">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h2 :id="titleId" class="modal-title">
                            {{ title }}
                        </h2>
                        <button @click="$emit('close')" class="modal-close-btn" aria-label="關閉 Modal">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <line x1="18" y1="6" x2="4" y2="6"></line>
                                </svg>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <slot name="content"></slot>
                    </div>

                    <!-- Modal Footer -->
                    <div v-if="$slots.footer" class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    closeOnOverlay: {
        type: Boolean,
        default: true
    }
})

// Emits
const emit = defineEmits(['close'])

// 響應式資料
const show = ref(false)
const titleId = ref(`modal-title-${Math.random().toString(36).substr(2, 9)}`)

// 方法
const handleOverlayClick = () => {
    if (props.closeOnOverlay) {
        emit('close')
    }
}

const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
        emit('close')
    }
}

// 生命週期
onMounted(async () => {
    // 確保組件掛載後再顯示
    await nextTick()
    show.value = true

    // 監聽 ESC 鍵
    document.addEventListener('keydown', handleEscapeKey)

    // 防止背景滾動
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    // 清理事件監聽器
    document.removeEventListener('keydown', handleEscapeKey)

    // 恢復背景滾動
    document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
}

.modal-container {
    border-radius: 24px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    margin-top: 5%;
    padding: 0 1rem;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem 0 1.5rem;
    padding-bottom: 1rem;
}

.modal-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
}

.modal-close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    color: #6b7280;
    transition: all 0.2s;
}

.modal-close-btn:hover {
    color: #374151;
    background-color: #f3f4f6;
}

.modal-body {
    padding: 0 1.5rem;
}

.modal-footer {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
}

/* 過渡動畫 */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
    transform: scale(1);
}

/* 響應式設計 */
@media (max-width: 640px) {
    .modal-overlay {
        padding: 0.5rem;
    }

    .modal-container {
        max-height: 95vh;
    }

    .modal-header,
    .modal-body,
    .modal-footer {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>