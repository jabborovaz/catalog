/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "285px",
        md: "620px",
        lg: "850px",
        xl: "1150px",
      },
    },
  },
  plugins: [],
};
