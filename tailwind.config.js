const { Gelasio } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
colors : {
primary1 : "#879D8B",
primary2 : "#375C3D",
primary3 : "#052E0A",
primary4 : "#0A0B0A"
},
fontFamily : {
Gelasio : ["Gelasio", "serif"],
Lato : ["Lato", "sans-serif"],
},

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
