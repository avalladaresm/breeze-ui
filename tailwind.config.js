// eslint-disable-next-line
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{tsx,js,ts,jsx}",
    "./components/**/*.{tsx,js,ts,jsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "skeletonw-xs": "4rem",
        "skeletonw-sm": "8rem",
        "skeletonw-md": "12rem",
        "skeletonw-lg": "16rem",
        "skeletonw-xl": "20rem",
        "skeletonw-2xl": "24rem",
        "skeletonw-3xl": "30rem",
        "skeletonw-4xl": "40rem",
        "skeletonh-2xs": "0.5rem",
        "skeletonh-xs": "0.75rem",
        "skeletonh-sm": "0.875rem",
        "skeletonh-md": "1rem",
        "skeletonh-lg": "1.125rem",
        "skeletonh-xl": "1.25rem",
        "skeletonh-2xl": "1.5rem",
        "skeletonh-3xl": "1.875rem",
        "skeletonh-4xl": "2.25rem",
        "skeletonh-5xl": "3rem",
        "skeletonh-6xl": "3.75rem",
        "skeletonh-7xl": "4.5rem",
        "skeletonh-8xl": "6rem",
        "skeletonh-9xl": "8rem",
        "avatar-xs": "1rem",
        "avatar-sm": "1.5rem",
        "avatar-md": "2rem",
        "avatar-lg": "2.5rem",
        "avatar-xl": "3rem",
        "avatar-2xl": "3.5em",
        "avatar-3xl": "4rem",
        "avatar-4xl": "4.5rem",
        "avatar-5xl": "5rem",
        "avatar-6xl": "6rem",
        "avatar-7xl": "7rem"
      },
      colors: { amber: colors.amber, blueGray: colors.blueGray }
    },
    boxShadow: {
      none: "none",
      xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 8px 10px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 12px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.12)"
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      opacity: ["active", "disabled"],
      cursor: ["active", "disabled"],
      textColor: ["active", "disabled"],
      pointerEvents: ["active", "disabled"],
      textDecoration: ["active", "disabled"],
      transform: ["active", "hover", "focus"],
      scale: ["active", "hover", "focus"],
      borderWidth: ["disabled"]
    }
  }
};
