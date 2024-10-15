/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#FBEDDA",
        primary: "#13A6BA",
        grey: "#677071"
      },
      spacing: {
        '1950': '121.875rem',
        '988': '61.75rem',
        '1200': '75rem',
        '22': '1.375rem'
      },
      fontSize: {
        '80': '5rem'
      },
      boxShadow: {
        'card': '0px 4px 55px 0px rgba(0, 0, 0, 0.5)'
      }
    },
    fontFamily: {
      'Noto': ['Noto']
    },
    
  },
  plugins: [],
};
