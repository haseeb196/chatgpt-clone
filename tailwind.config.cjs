/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens : {
        sm : {min : '0px' , max : '720px'},
        md : {min : '721px'}
      }
    },
  },
  plugins: [],
};

module.exports = config;
