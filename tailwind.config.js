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
        xl: "4rem"
      },
      colors: { amber: colors.amber }
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
