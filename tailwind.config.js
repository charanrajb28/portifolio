/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: 'var(--light)',
        accent: 'var(--accent)',
        dark: 'var(--dark)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 40px -15px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'large': '1.5rem',
      },
      fontSize: {
        '10px': '10px',
        '9vw': '9.2vw',
      }
    },
  },
  plugins: [],
}
