import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#183562",
                "primary-light": "#1e4a8a",
                secondary: "#fbbf24",
                accent: {
                    yellow: "#fde047",
                    amber: "#fbbf24",
                    orange: "#fb923c",
                },
                surface: "#f1f2f4",
                "surface-light": "#f8fafc",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            animation: {
                'pulse-ring': 'pulse-ring 6s ease-in-out infinite',
                'pulse-ring-slow': 'pulse-ring-slow 8s ease-in-out infinite',
                'orbit': 'orbit 45s linear infinite',
                'orbit-reverse': 'orbit-reverse 55s linear infinite',
                'glow-breathe': 'glow-breathe 8s ease-in-out infinite',
                'dot-float': 'dot-float 6s ease-in-out infinite',
                'drift': 'drift-horizontal 12s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
            },
            keyframes: {
                'pulse-ring': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.06' },
                    '50%': { transform: 'scale(1.08)', opacity: '0.1' },
                },
                'pulse-ring-slow': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.04' },
                    '50%': { transform: 'scale(1.12)', opacity: '0.08' },
                },
                'orbit': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
                'orbit-reverse': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
                },
                'glow-breathe': {
                    '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
                    '50%': { opacity: '0.3', transform: 'scale(1.15)' },
                },
                'dot-float': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.15' },
                    '33%': { transform: 'translateY(-15px) translateX(8px)', opacity: '0.3' },
                    '66%': { transform: 'translateY(5px) translateX(-5px)', opacity: '0.1' },
                },
                'drift-horizontal': {
                    '0%, 100%': { transform: 'translateX(0) rotate(25deg)' },
                    '50%': { transform: 'translateX(40px) rotate(28deg)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
