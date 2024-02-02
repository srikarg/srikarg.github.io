/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      display: ['Sulphur Point', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
