import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-x': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        100: '100% 100%'
      },
      colors: {
        primary: {
          light: '#71c0f2',
          DEFAULT: '#006da2',
          dark: '#22262e',
        },
        dark: {
          600: '#242528',
          900: '#0e0f11',
          300: '#233141'
        },
      },
    },
  },
  plugins: [],
};
export default config;
