/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy': "url('./src/assets/galaxy.jpg)",
      },
      colors: {
        'trans': '#ffffff52',
        'pink': 'rgba(255, 183, 195, 0.618)',
        'yell': 'rgba(255, 255, 0, 0.523)',
        'bluebg': 'rgba(195, 222, 255, 0.379)',
        'bluetxt': 'rgba(16, 0, 72)',
        'whitebg': 'rgb(255, 255, 255, 0.7)'
      },
    },
  },
  plugins: [],
}