/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      main: '#4338CA',
      button_green: '#34D399',
      button_red: '#FBDDDC',
      gradient: {
        start: '#4338CA',
        end: '#5E52F3'
      },
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
