import { svelte } from '@sveltejs/vite-plugin-svelte';
import { keycloakify } from 'keycloakify/vite-plugin';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    keycloakify({
      themeName: 'playlist-thing',
      accountThemeImplementation: 'none',
    }),
  ],
});
