module.exports = {
  purge: ["./public/**/*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary : '#31A431'
        
      },
      fontFamily: {
        sans : [
          "Poppins"
        ],
        serif : [
          "DM Sans"
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true
};
