import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom_red: "#ae2829ff",
        custom_blue: "#004aadff",
        bg: "#f7f7f7",
        navtext:"#1f2d3a",
        primtext:"#1f2937",
        sectext:"#4b5563"
      },
    },
  },
  plugins: [],
} satisfies Config;
