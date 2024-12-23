/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        navy: '#0a192f',
        border: "#30363d",
        input: "#30363d",
        ring: "#58a6ff",
        background: "#0d1117",
        foreground: "#c9d1d9",
        primary: {
          DEFAULT: "#58a6ff",
          foreground: "#0d1117",
        },
        secondary: {
          DEFAULT: "#21262d",
          foreground: "#c9d1d9",
        },
        destructive: {
          DEFAULT: "#f85149",
          foreground: "#c9d1d9",
        },
        muted: {
          DEFAULT: "#21262d",
          foreground: "#8b949e",
        },
        accent: {
          DEFAULT: "#21262d",
          foreground: "#c9d1d9",
        },
        popover: {
          DEFAULT: "#161b22",
          foreground: "#c9d1d9",
        },
        card: {
          DEFAULT: "#161b22",
          foreground: "#c9d1d9",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "text-gradient": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "text-gradient": "text-gradient 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}