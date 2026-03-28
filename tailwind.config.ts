import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B0B0B",
                secondary: "#1A1A1A",
                accent: "#725923",
                text: "#EDEDED",
                muted: "#A1A1A1",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;