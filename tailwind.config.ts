/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0608",
          900: "#120c0f",
          800: "#1a1317",
          700: "#241b20",
          600: "#2e242a",
          500: "#3a2e35",
        },
        copper: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
        },
        circuit: {
          400: "#f9a8d4",
          500: "#f472b6",
          600: "#ec4899",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};