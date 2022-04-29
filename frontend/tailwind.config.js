module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prim_color: "#3f5be7",
        second_color: "#BA8208",
        third_color: "#9A373F",
        button_bg: "#04395E",
        border_button: "#808080",
        red_customized: "#04395E",
      },
      fontFamily: {
        title_font: ['"Suez One"', "serif"],
        standard_font: ['"DM Sans", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
