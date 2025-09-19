/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#111827', // Very dark gray, almost black
        'surface': '#1F2937',    // Lighter gray for cards/elements
        'primary': '#F9FAFB',    // Light gray/white for main text
        'secondary': '#9CA3AF',  // Muted gray for secondary text
        'outline': '#374151',    // Gray for borders and dividers
        'accent': '#10B981',     // Bright accent green
        'accent-dark': '#059669', // Darker green for hover effects
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};