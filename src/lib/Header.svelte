<script context="module">
	//get the article metadata
	const pastaFiles = import.meta.glob("./../routes/_data/*.md");
	let body = [];
	for (const path in pastaFiles) {
		body.push(pastaFiles[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
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

	export function copyText() {
		var content = document.getElementById("text").innerText; //get text from copypasta
		try { // try this
			navigator.clipboard.writeText(content); //copy the copypasta
			// Get the snackbar DIV
			//var x = document.getElementById("snackbar");

			// Add the "show" class to DIV
			//x.className = "show";

			// After 3 seconds, remove the show class from DIV
			//setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		}
		catch { // something went wrong
			console.log("We couldn't copy the copypasta. User-Agent:" + navigator.userAgent);
			alert("Could not copy, please tell the creator of this site, include this: \n" + navigator.userAgent);
		}
	}

	export let posts;
</script>

<header class="m-[auto] mt-5 flex-row w-[70%] justify-between flex">
	<h1><a href="/" class="text-green-400 text-3xl font-bold">Browser Copypasta</a></h1>
		<ul>
			<div class="dropdown">
				<button class="dropbtn">Choose Browser</button>
				<div class="dropdown-content">
					<!-- doesnt work yet
						{#each posts as h}
							{#if h.published}
								<a href={h.slug} class="item-name">{h.title}</a>
							{/if}
						{/each}
					-->
				</div>
			  </div> 
			<button on:click={copyText}>Copy Text</button>
		</ul>
</header>

<style lang="postcss">
	button {
		background-color: var(--accent);
		border-radius: 8px;
		border: solid var(--accent);
		color: var(--bg-color-400);
		padding: 0.5em;
		margin-top: 10px;
		cursor: pointer;
	}

	@media screen and (max-width: 798px) {
		button:not(:first-child) {
			margin-top: 1em;
		}
	}

	/* Dropdown*/
	.dropdown {
		position: relative;
		display: inline-block;
		z-index: 1;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--bg-color-400);
		border-radius: 8px;
		border: solid var(--accent);
		& a {
			color: #fff;
			padding: 12px 16px;
			text-decoration: none;
			display: block;

				&:hover {
				background-color: #333333;
				border-radius: 8px;
			}
		}
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>