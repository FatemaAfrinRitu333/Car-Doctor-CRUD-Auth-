/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f7f1a5",

          "secondary": "#ceea70",

          "accent": "#a03203",

          "neutral": "#2B2631",

          "base-100": "#2E2A4B",

          "info": "#3DABF0",

          "success": "#2ED671",

          "warning": "#957B09",

          "error": "red",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

