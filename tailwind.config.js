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
        tan: "#f5ebd7",
        "light-orange": "#fba979",
        "light-red": "#ff5e8c",
        "light-blue": "#7385de",
        "sick-green": "#bbd700"
      },
      boxShadow: {
        custom: "4px 6px 0px 3px #000000",
        "custom-small": "2px 3px 0px 2px #000000",
      },
    },
  },
  plugins: [],
};
