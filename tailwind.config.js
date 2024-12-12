/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "BrightBlue": "hsl(220, 98%, 61%)",

        "GradientStart": "hsl(192, 100%, 67%)",
        "GradientStop": "hsl(280, 87%, 65%)",

        "VeryLightGray": "hsl(0, 0%, 98%)",
        "VeryLightGrayishBlue": "hsl(236, 33%, 92%)",
        "LightGrayishBlue": "hsl(233, 11%, 84%)",
        "DarkGrayishBlue": "hsl(236, 9%, 61%)",
        "VeryDarkGrayishBlue": "hsl(235, 19%, 35%)",

         "VeryDarkBlue": "hsl(235, 21%, 11%)",
        "VeryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
        "LightGrayishBlueDark": "hsl(234, 39%, 85%)",
        "LightGrayishBlueHover": "hsl(236, 33%, 92%)",
        "DarkGrayishBlueDark": "hsl(234, 11%, 52%)",
        "VeryDarkGrayishBlueDark": "hsl(233, 14%, 35%)",
        "VeryDarkGrayishBlueDarkTwo": "hsl(237, 14%, 26%)",

      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"]
      },
      backgroundImage: {
        'desktop-light': "url('/public/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/public/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('/public/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/public/images/bg-mobile-dark.jpg')",
      }
    },
  },
  plugins: [],
}

