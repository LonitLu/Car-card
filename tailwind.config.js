/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        20: "20px",
      },
      fontFamily: {
        GilroyMedium: ["GilroyMedium", "sans-serif"],
        Gilroy: ["Gilroy", "sans-serif"],
      },
      boxShadow: {
        card: "28px 28px 50px 0px rgba(13, 39, 80, 0.16);",
      },
      colors: {
        "blue-link": "rgb(71, 177, 254)",
        "yellow-1": "rgb(253, 224, 0)",
      },
    },
  },
  plugins: [],
};
