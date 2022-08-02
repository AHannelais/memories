const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { dark: '#000000', light: '#ffffff' },
      },
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
      },
    },
  },
};
