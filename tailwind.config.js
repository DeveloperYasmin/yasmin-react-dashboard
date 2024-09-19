// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan all components for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',  // Add custom colors, adjust as needed
        secondary: '#3B82F6',
        accent: '#F97316',
        neutral: '#D1D5DB',
      },
    },
  },
  plugins: [],
}
