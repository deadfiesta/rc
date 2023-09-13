/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 6px 16px 0px rgba(20, 20, 20, 0.30)',
        md: '0px 8px 40px 0px rgba(20, 20, 20, 0.10)',
      },
      screens: {
        container: '1216px',
      },
      colors: {
        primary: {
          100: '#F8F8FA',
          200: '#E3E4EB',
          300: '#9093AC',
          400: '#595E83',
          500: '#22285A',
          600: '#1D224D',
          700: '#181C3F',
          800: '#141836',
          900: '#11142D',
        },
        secondary: {
          100: '#F7FCFD',
          200: '#DFF3F9',
          300: '#82CFE8',
          400: '#44B8DD',
          500: '#05A0D1',
          600: '#04789D',
          700: '#035069',
          800: '#012834',
          900: '#011015',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F6F6F6',
          300: '#E7E7E7',
          400: '#CFCFCF',
          500: '#B4B4B4',
          600: '#818181',
          700: '#4D4D4D',
          800: '#333333',
          900: '#141414',
        },
        info: {
          100: '#EDF6FE',
          200: '#DBEDFD',
          300: '#A6D2FA',
          400: '#79BCF8',
          500: '#4CA5F5',
          600: '#418CD0',
          700: '#3573AC',
          800: '#2E6393',
          900: '#26537B',
        },
      },
      fontSize: {
        h1: ['32px', '44px'],
        h2: ['28px', '40px'],
      },
      maxWidth: {
        '8xl': '1216px',
      },
    },
  },
  plugins: [],
};
