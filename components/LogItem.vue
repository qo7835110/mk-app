<template>
    <div
        class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
    >
        <div class="text-brown font-bold text-xl">{{ title }}</div>
        <div class="flex-1 flex items-center">
            <div class="flex items-center gap-x-2 mr-4">
                <div
                    v-for="tag in tags"
                    :key="tag.text"
                    :class="[
                        'text-white font-bold py-1 px-2 rounded-2xl text-[10px]',
                        tag.color || 'bg-blue-500'
                    ]"
                >
                    {{ tag.text }}
                </div>
            </div>
            <div class="text-brown-400">{{ formattedDate }}</div>
        </div>
        <div
            :class="[
                'text-white font-bold py-2 px-5 rounded-2xl text-sm',
                statusColor
            ]"
        >
            {{ status }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: () => []
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusColor: {
        type: String,
        default: 'bg-blue-500'
    }
});

const formattedDate = computed(() => {
    return props.date;
});
</script>

<style scoped>
/* 任何額外的樣式可以在這裡添加 */
</style>