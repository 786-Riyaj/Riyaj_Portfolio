/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                goldAccent: "#C2A878",
                luxuryBlack: "#0F0F0F",
                editorialIvory: "#FAF9F6",
                navyText: "#1F2937",
            },
            fontFamily: {
                serif: ["'Playfair Display'", "serif"],
                sans: ["'Inter'", "sans-serif"],
            },
        },
    },
    plugins: [],
};