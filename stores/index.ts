export const useMainStore = defineStore('main', () => {
    // State
    const count = ref(0)
    const name = ref('Nuxt3 App')

    // Getters
    const doubleCount = computed(() => count.value * 2)

    // Actions
    function increment() {
        count.value++
    }

    function updateName(newName: string) {
        name.value = newName
    }

    return { count, name, doubleCount, increment, updateName }
})