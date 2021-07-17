module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
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
}
