/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      }
    },
    variants: {
      lineClamp: ['responsive', 'hover']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}

