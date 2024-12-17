/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import lineClamp from "@tailwindcss/line-clamp"

export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, lineClamp],
  daisyui: { themes: ["dark"], }
};





