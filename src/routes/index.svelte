<svelte:head>
	<title>Browser Copypasta</title>
</svelte:head>

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
	import SvelteTooltip from "svelte-tooltip";
	import Icon from "@iconify/svelte";
</script>

<div class="text-center mt-[15%] text-greyish">
	<h1 class="font-normal text-3xl">The <span class="text-green-400 font-bold">BEST</span> copypasta generator for shilling browsers</h1>
	<p class="leading-6 text-xl mt-1">Choose a browser from the list below to start <span class="text-green-400 font-bold">spammin'</span>.</p>

	{#each pastas as { slug, title, icon, published, browser }}
		{#if published}
			<div class="ml-3 first:ml-0 inline-flex items-center mt-4 m-auto">
				<a rel="prefetch" href="copypastas/{slug}">
					<NavButton classes="text-xl font-medium">
						<span><Icon {icon} height={16} class="text-secondary items-center inline-flex mb-1 mr-1"/>{title}</span>
						{#if !browser}
							<div class="text-green-400 inline-block">
								<SvelteTooltip tip="Extra" top color="#111111">
									<Icon icon="feather:info" inline={true} height={16} class="text-secondary items-center"/>
								</SvelteTooltip>
							</div>
						{/if}
					</NavButton>
				</a>
			</div>
		{/if}
	{/each}
</div>