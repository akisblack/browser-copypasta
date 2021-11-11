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
	import { browser } from '$app/env';

	if (browser) {
		window.addEventListener('input', function (e) {
			document.getElementsByName("insert").forEach(function(value) {
			value.innerHTML = document.getElementById("userInput").value;
		})
		}, false);
	}

	//export the post component
	export let Pasta;
</script>

<svelte:head>
	<title>{Pasta.metadata.title} | Blog</title>
</svelte:head>

<div id="container">
	<h1>{Pasta.metadata.title}</h1>
	<hr />
	<input type="text" class="w-auto" placeholder="Your browser's name..." value={Pasta.metadata.name}>
	<div class="content">
		<div id="text">
			<svelte:component this={Pasta.default} />
		</div>
	</div>
</div>