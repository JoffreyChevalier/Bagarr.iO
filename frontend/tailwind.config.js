module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      colors: {
        first_color: "#BA8208",
        first_color_d: "#976500",
        second_color: "#327D45",
        second_color_d: "#007557",
        third_color: "#005C68",
        button_bg: "#04395E",
        border_button: "#808080",
      },

      fontFamily: {
        title_font: ['"Suez One"', "serif"],
        standard_font: ['"DM Sans", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
