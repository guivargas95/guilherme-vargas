/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/img/logo.png')",
        'logo2': "url('/img/logo2.png')",
      },
      colors: {
        azul1: '#0B0914',
        azul2: '#00C7EB',
        azul3: '#297CEF',

      },
      width: {
        '112': '25rem',
      },
      height: {
        '120': '35rem',
      },
    },
  },
  plugins: [],
}
