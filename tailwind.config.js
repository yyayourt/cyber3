/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        accent1: 'var(--color-accent-1)',
        accent2: 'var(--color-accent-2)',
        accent3: 'var(--color-accent-3)',
      },
    },
  },
  plugins: [],
};