/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#637078',
        tertiary: '#ccb8b4',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
        
      },
      backgroundImage: {
        profile: "url('/src/assets/profile.png')",
        bgCard: "url('/src/assets/bgCard.png')",
        Col: "url('/src/assets/Colombia.png')",
        Eng: "url('/src/assets/England.png')",
      },
    },
  },
  plugins: [],
}
