/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        unbounded: ["Unbounded", "sans-serif"]
      },
      colors: {
        pink: "#F269FF",
        "dark-pink": "#5F3462",
        "yellow": "#FFE369",
        "red": "#FF4747",
        "custom-black": "#1A1A1A",
        "gray": "#E0E0E0"
      },
      boxShadow: {
        custom: "4px 6px 0px 3px #000000",
        "custom-small": "2px 3px 0px 2px #000000",
      },
    },
  },
  plugins: [],
};
