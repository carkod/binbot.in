const { fontFamily } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
      },
      screens: {
        xs: "420px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.current"),
            },
          },
        },
      }),
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      "light-gray": "#e3e3e3",
      "medium-gray": "#dddddd",
      "dark-gray": "#9a9a9a",
      brand: "#428BA4",
      primary: "#51cbce",
      success: "#6bd098",
      info: "#51bcda",
      warning: "#fbc658",
      danger: "#ef8157",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  variants: {
    extend: {},
  },
};
