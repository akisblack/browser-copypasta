<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Browser Copypasta</title>
	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from "$lib/Footer.svelte";
	import "../app.postcss";
</script>

<Header />

<main>
	<slot></slot>
</main>

<Footer />

<style lang="postcss">
	:global(#input, #text) {
		margin: 0 auto;
		max-width: 70%;
	}

	:global(#text) {
		line-height: 25px;
		text-align: justify;
		color: #fff
	}

	:global(#input) {
		padding-top: 70px;
	}

	:global(input) {
		width: 100%;
		background-color: var(--bg-color-400);
		color: #fff;
		border-radius: 8px;
		border: solid var(--accent);
		outline: none;
	}

	:global(#text) {
		position: relative;
		top: 10px;
	}

	:global(pre) {
		white-space: pre-wrap;
		font-family: Mulish;
		text-align: justify;
	}
</style>