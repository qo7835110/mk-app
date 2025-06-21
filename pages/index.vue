<template>
    <div class="bg-[#F8F7F0">
        <div class="h-full">
            123
        </div>
        <div class="bg-[#EE7959] h-[336px]">
        </div>
    </div>
</template>

<script setup>
const { public: { siteName } } = useRuntimeConfig()
const store = useMainStore()
const { count, doubleCount, increment } = storeToRefs(store)
</script>