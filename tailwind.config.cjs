const colors = require("tailwindcss/colors");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			secondary: "#292929",
			primary: "#111111",
			greyish: "#c8c8c8",
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			green: colors.emerald
		},
		fontFamily: {
			primary: ["Raleway"]
		},
		screens: {
			sm: { raw: "(max-width: 411px)" }
		}
	}
};

module.exports = config;
