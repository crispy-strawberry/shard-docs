import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Shard',
			logo: { src: './src/assets/shard_transparent.png' },
			social: {
				github: 'https://github.com/shard-org/shard',
			},
			favicon: '/favicon.png',
			sidebar: [
				{
					label: 'Getting started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installing', link: '/getting_started/installing/' },
						{ label: 'Your First Program', link: '/getting_started/first_program/' },
						{ label: 'Language Tour', link: '/getting_started/language_tour/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
