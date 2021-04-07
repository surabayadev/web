module.exports = {
  purge: ["./public/**/*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary : '#31A431'
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
