/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#e0d0d1",
        // secondary: "#637078",
        // tertiary: "#90a9b0",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",

        //primary: "#211e35",
        // secondary: "#ccb8b4",
        // tertiary: "#9b8480",
        // "black-100": "#6470a3",
        // "black-200": "#312f3d",
        // "white-100": "#f3f3f3",

         primary: "#121212",
        // secondary: "#D8C3A5",
         tertiary: "#ccb8b4",
        // "black-100": "#E98074",
        // "black-200": "#090325",
          "white-100": "#f3f3f3",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        
      },
    },
  },
  plugins: [],
};