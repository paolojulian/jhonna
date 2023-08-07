/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        sidenav: '400px'
      },
      fontFamily: {
        'inconsolata': ['var(--font-inconsolata)'],
        'poppins': ['var(--font-poppins)'],
        'dm-mono': ['var(--font-dm-mono)'],
      },
      colors: {
        bg: '#fee9e1',
        'bg-dark': '#b09e99',
        'bg-secondary': '#FAD4C0',
        black: '#030712',
        'black-secondary': '#111827',
        'black-light': '#111827bb',
        accent: '#64b6ac',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
