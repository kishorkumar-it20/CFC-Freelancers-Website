/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        Jacquard:['Jacquard'],
        Danfo:['Danfo']
       },
       height:{
        '103':'850px',
        '102':'800px',
        '101':'720px',
        '100':'700px',
        '98':'500px',
        '97': '450px'
       },
       width:{
        '100':'900px',
        '98':'450px',
        '99': '550px'
       },
       margin:{
        '100':'700px'
       }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

