<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				Pasta: await import(`../_data/${page.params.slug}.md`)
			}
		};
	}
</script>

<script>
	import { browser } from "$app/env";

	if (browser) {
		window.addEventListener(
			"input",
			function (e) {
				document.getElementsByName("insert").forEach(function (value) {
					value.innerHTML = document.getElementById("userInput").value;
				});
			},
			false
		);
	}

	//export the post component
	export let Pasta;
</script>

<svelte:head>
	<title>{Pasta.metadata.title} | Browser Copypasta</title>
</svelte:head>

<div class="container text-greyish">
	<h1 class="text-3xl mt-4 font-bold">{Pasta.metadata.title}</h1>
	<hr class="mt-2 mb-4" />
	<input
		type="text"
		id="userInput"
		class="w-full bg-secondary rounded-md outline-none mb-4 leading-4 p-2"
		placeholder="Your browser's name..."
		value={Pasta.metadata.name}
	/>
	<div id="text">
		<pre class="whitespace-pre-wrap font-primary">
			<svelte:component this={Pasta.default} />
		</pre>
	</div>
</div>
