/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      "disabled-purple": "#B38EE0",
      "purple-base": "#7A31D8",
      "purple-dark": "#5908C4",
      "blue-light": "#D7DDF9",
      "blue-base": "#5E79FD",
      "blue-dark": "#425AD3",
      white: "#fff",
      background: "#F6F5F7",
      shape: "#EDE9F2",
      danger: "#DC3545",
      success: "#28A745",
      warning: "#FFC107",
      grays: {
        100: "#ADADAD",
        200: "#949494",
        300: "#666666",
        400: "#3D3D3D",
        500: "#1D1D1D",
      },
    },
    extend: {
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      fontFamily: {
        "lato-light": ["Lato_300Light"],
        "lato-regular": ["Lato_400Regular"],
        "lato-bold": ["Lato_700Bold"],
      },
      height: {
        button: 57,
      },
    },
  },
  plugins: [],
};
