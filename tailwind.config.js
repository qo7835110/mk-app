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
                    DEFAULT: '#FFFFFF',
                    50: '#4C3829',
                    100: '#615042',
                    200: '#77685B',
                    300: '#8C8074',
                    400: '#A2978C',
                    500: '#B7AFA5',
                    600: '#CDC7BE',
                    700: '#E2DFD7',
                    800: '#F8F7F0',
                }
            }
        },
    },
    plugins: [],
}