/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Google Blue / Standard Link Blue
        secondary: "#475569", // Slate 600
        background: "#ffffff",
        surface: "#f8fafc", // Slate 50
        text: "#0f172a", // Slate 900
        muted: "#64748b", // Slate 500
        border: "#e2e8f0", // Slate 200
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
