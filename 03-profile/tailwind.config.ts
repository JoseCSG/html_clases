import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: "#2b2d42",
        secondary: "#8d99ae",
        accent: "#edf2f4",
        highlight: "#ef233c",
      }
    },
  },
  plugins: [],
} satisfies Config