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