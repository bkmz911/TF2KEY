/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'bluishBlack': '#181A1E',
            'blackGrey': '#1F2125',
            'lemony': '#FFDB18',
            'paleBlue': '#8F9092',
            'blueBlack': '#2B2C30',
            'granite': '#2F3135',
            'blackOlive': '#3B3B33',
            'slateGray': '#3E4045',
            'red': '#EB5757',
        },
        boxShadow: {
            'borderShadow': ' 0px 0px 4px #FFDB18',
        }
    },
  },
  plugins: [],
}

