<template>
    <div
        class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
    >
        <div class="text-white bg-brown-800 rounded-full px-4 py-2 font-bold ">{{ title }}</div>
        <div class="flex flex items-center">
            <div class="text-brown-400">{{ formattedDate }}</div>
        </div>
        <div class="flex-1 flex items-center">
            <div class="text-brown font-bold">{{ content }}</div>
        </div>
        <div
            :class="[
                'text-white font-bold py-2 px-5 rounded-2xl text-sm',
                statusColor
            ]"
        >
            {{ status }}
        </div>
        <div class=" font-black text-brown text-3xl">
            {{ count }}
        </div>
        <div class=" font-black text-brown">
            >
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: '本期目標，截取內容前30字的內容。'
    },
    count: {
        type: String,
        default: '0'
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