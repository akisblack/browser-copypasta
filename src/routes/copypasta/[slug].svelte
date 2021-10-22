<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				Pasta: await import(`./../_data/${page.params.slug}.md`)
			}
		};
	}
</script>

<script>
	//export the post component
	export let Pasta;
</script>

<svelte:head>
	<title>{Pasta.metadata.title} | Browser Copypasta</title>
</svelte:head>

<div id="container">
	<div class="content">
		<svelte:component this={Pasta.default} />
	</div>
</div>