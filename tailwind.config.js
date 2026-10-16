/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fudap: {
          50: '#fff7fb', 100: '#f8dfea', 200: '#efbdd3', 300: '#e496b7',
          400: '#d36d98', 500: '#b84b78', 600: '#9f3562', 700: '#8e1b5d',
          800: '#701547', 900: '#551137', 950: '#32091f'
        },
        coral: { 400: '#f29a5b', 500: '#e87524', 600: '#c95d14' },
        sand: { 50: '#faf8f4', 100: '#f4eee6', 200: '#e8dccd' }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(85,17,55,.08)',
        card: '0 8px 30px -8px rgba(85,17,55,.12)',
        elevated: '0 20px 50px -15px rgba(85,17,55,.18)'
      }
    }
  },
  plugins: []
};
