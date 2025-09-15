import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialValue = browser ? window.localStorage.getItem('theme') ?? 'light' : 'light';

export const theme = writable(initialValue);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});