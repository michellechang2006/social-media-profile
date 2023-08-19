/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

  "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      primary: '#FBDAC6',  // 主色
      secondary: '#E7725C',  // 次色
      grayCustom:"#4A4849",
      white:"#fff"
    }
    // extend: {},
  },
  plugins: [],
}

