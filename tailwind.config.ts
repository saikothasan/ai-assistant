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
        primary: "#4F46E5", // Indigo
        accent: "#FACC15", // Yellow
        dark: "#1E293B", // Navy
        light: "#F8FAFC", // White-ish
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
        // Dark Mode Colors
        "dark-background": "#1E1E1E", // Dark background
        "dark-text": "#E5E5E5", // Light text in dark mode
        "dark-primary": "#4F46E5", // Primary color for dark mode
        "dark-accent": "#FACC15", // Accent color for dark mode
        "dark-border": "#2A2A2A", // Dark border for dark mode
        // Add more colors as needed
      },
    },
  },
  darkMode: "class", // Enable dark mode using a class
  plugins: [],
} satisfies Config;
