<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				Pasta: await import(`./pastas/${page.params.slug}.md`)
			}
		};
	}
</script>

<script>
	//export the post component
	export let Pasta;
</script>

<svelte:head>
	<title>{Pasta.metadata.title} | Blog</title>
</svelte:head>

<div id="container">
	<a href="/"> Home</a>
	<h1>{Pasta.metadata.title}</h1>
	<h2>{Pasta.metadata.date}, by {Pasta.metadata.author}</h2>
	<hr />

	<div class="content">
		<svelte:component this={Pasta.default} />
	</div>
</div>