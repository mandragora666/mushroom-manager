// svelte.config.js

import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel'; // Diese Zeile importiert den neuen Adapter

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Hier sagen wir SvelteKit, dass es den Vercel-Adapter benutzen soll
    adapter: adapter() 
  }
};

export default config;