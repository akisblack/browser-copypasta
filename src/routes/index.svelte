<script context="module">
	const pastaFiles = import.meta.glob("./pastas/*.md");
	let body = [];
	for (const path in pastaFiles) {
		body.push(pastaFiles[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const pastas = await Promise.all(body);
		return {
			props: {
				pastas
			}
		};
	}
</script>

<script>
	export let pastas;
	function sortByDate(a, b) {
		const dateA = a.date;
		const dateB = b.date;
		let comparison = 0;
		if (dateA > dateB) {
			comparison = 1;
		} else if (dateA < dateB) {
			comparison = -1;
		}
		return comparison * -1;
	}
	pastas.sort(sortByDate);
</script>

<div class="text-center mt-[15%] text-white">
	<h1 class="font-normal text-3xl">The <span class="text-green-400 font-bold">BEST</span> copypasta generator for shilling browsers</h1>
	<p>Choose a browser from the cards below to start <span>spammin'</span>.</p>
</div>


<div class="blog">
	<h1>Posts</h1>
	{#each pastas as { slug, title, summary, published }}
		{#if published}
			<a rel="prefetch" href="{slug}" class="item-name">{title}</a>
			<p class="item-desc">- {summary}</p>
		{/if}
	{/each}
</div>