import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms'; // NEU: Plugin importieren

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  
  plugins: [
    forms, // NEU: Plugin hier aktivieren
  ],
};

export default config;