module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first_color: "#BA8208",
        second_color: "#327D45",
        third_color: "#005C68",
        button_bg: "#04395E",
        border_button: "#808080",
      },
      fontFamily: {
        title_font: ['"Suez One"', "serif"],
        standard_font: ['"DM Sans", "sans-serif"'],
      },
      spacing: {
        grand: "40rem",
      },
    },
  },
  plugins: [],
};
