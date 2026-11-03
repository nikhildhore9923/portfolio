/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0C10',
          surface: '#12151C',
          card: '#161A23',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#F1F5F9',
          border: 'rgba(0, 0, 0, 0.08)',
          hover: 'rgba(0, 0, 0, 0.03)',
        },
        accent: {
          DEFAULT: '#0284C7', // Refined Slate/Sky Blue (professional, clean, not purple)
          hover: '#0369A1',
          light: '#38BDF8',
          amber: '#F59E0B',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
