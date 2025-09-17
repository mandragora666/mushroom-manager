// MushroomManager_tailwind.config.js_v1 – erstellt am 2025-09-17 15:57
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1A1D1F',        // Primärer, sehr dunkler Hintergrund
        'bg-secondary': '#272A2D',      // Hellerer Hintergrund für Karten, Modals etc.
        'border-primary': '#3D4043',    // Für Ränder und Trennlinien
        'text-primary': '#F1F1F1',      // Primäre Textfarbe (fast weiß)
        'text-secondary': '#A0A3A6',    // Sekundäre, gedimmtere Textfarbe
        'accent-green': '#2ECC71',      // Haupt-Akzentfarbe für Buttons und Highlights
        'accent-green-hover': '#38D97A',// Hellere Variante für Hover-Effekte
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}