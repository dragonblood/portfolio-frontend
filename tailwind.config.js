module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dasiyui: {
      themes: [
        "cupcake",
        "dracula",
        "bumblebee",
        "forest",
        "synthwave",
        "luxury",
      ],
    },
    extend: {
      spacing: {
        20: "320px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-pseudo-selectors"),
    require("tailwindcss-padded-radius"),
    require("tailwindcss-radix")(),
    require("tailwindcss-bg-svg"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
  variants: {
    borderRadius: ["responsive", "paddleRadius"],
    extend: {
      ringColor: ["valid", "invaild"],
    },
  },
};
