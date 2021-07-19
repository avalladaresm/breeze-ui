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
      }
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
