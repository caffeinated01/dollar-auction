/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      switzer: ["Switzer", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
