/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: "#181926",
                    900: "#1e2030",
                    800: "#24273a",
                    700: "#363a4f",
                    600: "#494d64",
                    500: "#5b6078",
                    400: "#6e738d",
                    300: "#939ab7",
                    200: "#a5adcb",
                    100: "#b8c0e0",
                    50: "#cad3f5",
                },
            },
        },
    },
};
