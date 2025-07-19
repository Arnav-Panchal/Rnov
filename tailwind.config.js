/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode:"class",

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add fontFamily configuration
      fontFamily: {
        sans: ['Roboto Mono', 'sans-serif'], // Set Roboto Mono as the default sans font
        mono: ['Roboto Mono', 'monospace'], // Keep 'mono' for explicit use if needed
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
