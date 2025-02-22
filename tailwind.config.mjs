/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#19a6d2',
        lightBlue : '#20e5f6',
        darkBlue: '#0c113e',
        green: '#4CAF50',
  			softgreen: '#81C784',
  			solarYellow: '#FFC107',
  			softYellow: '#FFEB3B',
  			text: '#333333',
  			deepTeal: '#00796B',
  			skyBlue: '#E0F7FA',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindcssMotion, require("tailwindcss-animate")],
};
