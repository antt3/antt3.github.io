/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},

	daisyui: {
		themes: [
			'acid',
			'aqua',
			'autumn',
			'black',
			'bumblebee',
			'business',
			'cmyk',
			'coffee',
			'corporate',
			'cupcake',
			'cyberpunk',
			'dark',
			'dracula',
			'emerald',
			'fantasy',
			'forest',
			'garden',
			'halloween',
			'lemonade',
			'light',
			'lofi',
			'luxury',
			'night',
			'pastel',
			'retro',
			'synthwave',
			'valentine',
			'winter',
			'wireframe',
		],
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
};

module.exports = config;
