<svelte:head>
	<!--Imports and viewport stuff-->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<link rel="shortcut icon" type="image/jpg" href="/favicon.png" />

	<!--Embed metas-->
	<meta name="theme-color" content="#39d687" />
	<meta name="description" content="The copypasta generator for web browsers!" />
	<meta name="author" content="akisblack" />
</svelte:head>

<script>
	import "../app.css";
	import Header from "$lib/Header.svelte";
</script>

<Header />
<slot />