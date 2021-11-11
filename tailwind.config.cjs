const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			bg_secondary: "#141414",
			bg_primary: "#111111",
			green: colors.emerald,
			white: "#c8c8c8"
		},
		fontFamily: {
			font_primary: ["Raleway"]
		},
		screens: {
			"sm": "449px"
		}
	},

	plugins: []
};

module.exports = config;
