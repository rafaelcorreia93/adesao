/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Campton-Bold']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#3C2E88',
        secondary: '#E33E5A',
        brandBlue: {
          900: '#2F1B73',
          800: '#3C2E88',
          700: '#433894',
          600: '#4B42A0',
          500: '#6865B7',
          400: '#6865B7',
          300: '#8181C4',
          200: '#A4A5D5',
          100: '#C8C8E6',
          50: '#E9E9F5',
        },
        brandRed: {
          900: '#832648',
          800: '#A82E4F',
          700: '#BD3453',
          600: '#D33957',
          500: '#E33E5A',
          400: '#E85170',
          300: '#EE6C88',
          200: '#F494A9',
          100: '#F8BECB',
          50: '#FCE5EA',
        }
      }
    },
  },
  plugins: [],
}
