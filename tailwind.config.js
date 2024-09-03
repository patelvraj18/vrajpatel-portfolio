// imported it as a es module just in case if it does not work later somehow lol

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#040C14",
      secondary: "#A6B0C3",
      tertiary: "#141E3D",
      quaternary: "#151729",
      "black-100": "#0D1726",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
      'mdv2': '960px',
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
    fontFamily: {
      sans: ['Neue Montreal', 'sans-serif'],
    },
  },
};
export const plugins = [];

// 050E17
