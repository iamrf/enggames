import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "retro", "cyberpunk", "valentine", "aqua", "cupcake"],
        // themes: [
        //     {
        //         sunset: {
        //             ...require("daisyui/src/theming/themes")["sunset"],
        //             // primary: "#ff0000",
        //             // secondary: "#f6d860",
        //             // accent: "#37cdbe",
        //             // neutral: "#3d4451",
        //             // "base-100": "#222222",
        //         },
        //     },
        // ],
    },
};
export default config;
