<script context="module">
	const pastaFiles = import.meta.glob("./_data/*.md");
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

	import NavButton from "$lib/NavButton.svelte";
</script>

<div class="text-center mt-[15%] text-white">
	<h1 class="font-normal text-3xl">The <span class="text-green-400 font-bold">BEST</span> copypasta generator for shilling browsers</h1>
	<p class="leading-6 text-xl mt-1">Choose a browser from the cards below to start <span class="text-green-400 font-bold">spammin'</span>.</p>

	{#each pastas as { slug, title, published }}
		{#if published}
			<div class="ml-3 first:ml-0 inline-flex items-center mt-4 m-auto">
				<a rel="prefetch" href="copypastas/{slug}">
					<NavButton classes="text-xl font-medium bg-gray-600">
						{title}
					</NavButton>
				</a>
			</div>
		{/if}
	{/each}
</div>