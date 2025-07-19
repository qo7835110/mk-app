module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#EE7959',
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                brown: {
                    DEFAULT: '#8B4513',
                    50: '#F8F7F0',
                    100: '#E2DFD7',
                    200: '#CDC7BE',
                    300: '#B7AFA5',
                    400: '#A2978C',
                    500: '#8C8074',
                    600: '#77685B',
                    700: '#615042',
                    800: '#4C3829',
                    900: '#4A2C17',
                }
            }
        },
    },
    plugins: [],
}