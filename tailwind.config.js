/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      primary: "#3AA39F",
      secondary_yellow: "#FFC41F",
      secondary_red: "#E14B4B",
      naturel_cadet: "#17183B",
      naturel_gray: "#A2A3B1",
      naturel_gray_french: "#D1D1D8",
      naturel_white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "1024px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
