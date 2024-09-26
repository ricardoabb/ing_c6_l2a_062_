import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'modal': "url('/bg-pattern.png')",
      },
      screens: {
        'mb': '400px',
         
      },
      boxShadow: {
        '3xl': '0 0 20px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
