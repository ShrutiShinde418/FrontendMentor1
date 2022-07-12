/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        yellow: "hsl(71, 73%, 54%)",
        gray: "hsl(204, 43%, 93%)",
        blue: "hsl(218, 22%, 67%)",
        teal: "#4ABEBD",
      },
      fontFamily: {
        custom: "Karla",
      },
    },
  },
  plugins: [],
};
