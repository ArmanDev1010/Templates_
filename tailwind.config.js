/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,json}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        montserratarm: ["Montserratarm", "sans-serif"],
        montserrateng: ["Montserrateng", "sans-serif"],
        neogrotesk: ["Neogrotesk", "sans-serif"],
      },
    },
    screens: {
      bigg: "1851px",
      big: "1601px",
      desktop: "1351px",
      bmedium: "1081px",
      medium: "1025px",
      btablet: "901px",
      tablet: "801px",
      stablet: "701px",
      phone: "601px",
      small: "551px",
      smal: "401px",
      smaller: "351px",
    },
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /bg-/,
  //     variants: ["group-hover", "hover"],
  //   },
  //   {
  //     pattern: /text-/,
  //     variants: ["group-hover", "hover"],
  //   },
  //   {
  //     pattern: /border-/,
  //     variants: ["group-hover", "hover"],
  //   },
  // ],
};
