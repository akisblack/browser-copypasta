import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		files: {
			assets: "./src/assets"
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		vite: {
			// ...
			ssr: {
				noExternal: ["svelte-hero-icons", "svelte-simple-icons"]
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
