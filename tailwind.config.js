/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "320px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
        "about-pattern": "url('/aboutbg.png')",
        "map-bg": "url('/yamaMap.jpg')",
        "1-bg": "url('/slide1.png')",
        "2-bg": "url('/slide2.png')",
        "3-bg": "url('/slide3.png')",
      },
    },
  },
  plugins: [],
};
