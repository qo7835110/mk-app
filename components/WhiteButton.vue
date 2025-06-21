<template>
    <button
        class="flex font-black text-[22px] justify-center items-center rounded-[20px] bg-white text-primary h-[59px] w-full"
        type="button">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>