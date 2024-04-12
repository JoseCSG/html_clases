import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
