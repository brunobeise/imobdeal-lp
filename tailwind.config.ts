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
                primary: "#113955", // Azul marinho
                secondary: "#F9A826", // Amarelo
                sectionBackground: "#F8FAFC"
            },
        },
    },
    plugins: [],
};
export default config;
