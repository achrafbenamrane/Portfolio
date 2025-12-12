import type { Config } from "tailwindcss";

const config: Config = {
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
        neon: {
          blue: "#007AFF",
          cyan: "#00C7BE",
          purple: "#AF52DE",
          pink: "#FF2D55",
          orange: "#FF9500",
          green: "#34C759",
        },
        ios: {
          gray: "#1C1C1E",
          lightGray: "#2C2C2E",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 122, 255, 0.4), 0 0 40px rgba(0, 122, 255, 0.2)",
        "glow-cyan": "0 0 20px rgba(0, 199, 190, 0.4), 0 0 40px rgba(0, 199, 190, 0.2)",
        "glow-purple": "0 0 20px rgba(175, 82, 222, 0.4), 0 0 40px rgba(175, 82, 222, 0.2)",
        "inner-soft": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)",
        "ios": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "ios-lg": "0 12px 48px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 122, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 199, 190, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
