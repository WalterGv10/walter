/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030303",
                surface: "#0a0a0a",
                primary: "#00f0ff", // Neon Cyan
                secondary: "#7000ff", // Neon Purple
                accent: "#ff0099", // Neon Pink for contrasts
                muted: "#525252",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 8s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'border-beam': 'border-beam 4s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
                'border-beam': {
                    '100%': { 'offset-distance': '100%' },
                },
                'progress': {
                    '0%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            }
        },
    },
    plugins: [],
}
