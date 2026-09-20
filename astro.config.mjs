// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace `site` with your real domain before deploying.
export default defineConfig({
	site: 'https://majunko.dev',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});