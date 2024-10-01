import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small devices (custom)
        sm: "640px", // Small devices (mobile)
        md: "768px", // Medium devices (tablets)
        mdlg: "904",
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // 2x extra large devices (large desktops)
        "4k": "2560px", // Custom 4k screens (optional)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E3A8A", // You can add more custom colors if needed
        secondary: "#D97706",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
