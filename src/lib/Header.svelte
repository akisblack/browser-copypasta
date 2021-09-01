<header>
	<h1><a href="/" class="title">Browser Copypasta</a></h1>
		<ul>
			<div class="dropdown">
				<button class="dropbtn">Choose Browser</button>
				<div class="dropdown-content">
					<a href="/copypastas/vivaldi">Vivaldi</a>
					<a href="/copypastas/brave">Brave</a>
				</div>
			  </div> 
			<button on:click={copyText}>Copy Text</button>
		</ul>
</header>

<script>
	//import Snackbar from "$lib/Snackbar.svelte";
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
</script>

<style lang="postcss">
	.title {
		color: var(--accent);
		margin-top: 10px;
	}

	button {
		background-color: var(--accent);
		border-radius: 8px;
		border: solid var(--accent);
		color: var(--bg-color-400);
		padding: 0.5em;
		box-shadow: none;
	}

	@media screen and (max-width: 798px) {
		button:not(:first-child) {
			margin-top: 1em;
		}
	}

	header {
		margin: 0 auto;
		width: 70%;
		display: flex;
		justify-content: space-between;
	}

	/* Dropdown*/
	.dropdown {
	position: relative;
	display: inline-block;
	}

	.dropdown-content {
	display: none;
	position: absolute;
	background-color: var(--bg-color-400);
	min-width: 25px;
	border-radius: 8px;
	border: solid var(--accent);
	border-top-left-radius: 0;
	border-top-right-radius: 0;
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

	.dropbtn:hover {
		border-bottom-left-radius: 0px;
	}
</style>