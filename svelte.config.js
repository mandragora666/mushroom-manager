// svelte.config.js

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // KORREKTUR HIER
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  }
};

export default config;