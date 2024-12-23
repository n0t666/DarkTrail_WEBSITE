module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        fipps: ["FIPPS", "cursive"],
        pixels: ["PIXEL", "cursive"],
        tight: ["TIGHT", "cursive"],
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
