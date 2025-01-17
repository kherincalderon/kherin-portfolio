/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '15px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        primary: 'var(--font-jetbrainsMono)',
      },
      colors: {
        primary: '#1C1C22',
        accent: {
          DEFAULT: '#00FF99',
          hover: '#00E187',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
