<script>
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

	import NavButton from "./NavButton.svelte";
	import SvelteTooltip from "svelte-tooltip";
	import { Clipboard, PlusCircle } from "svelte-hero-icons";
	import Icon from "svelte-hero-icons/Icon.svelte";
	import GitHub from '@icons-pack/svelte-simple-icons/src/components/GitHub.svelte';
</script>

<header class="bg-secondary p-6 flex items-center justify-between">
	<a href="/" class="text-green-400 w-max text-2xl font-bold pr-3">Browser Copypasta</a>
	<div class="buttons text-green-400 text-md font-medium">

		<SvelteTooltip tip="Copy" left color="#111111">
			<NavButton classes="mr-3" fun={copyText}><Icon src="{Clipboard}" size="16" outline /></NavButton>
		</SvelteTooltip>

		<SvelteTooltip tip="Add your own" left color="#111111">
			<a href="https://github.com/akisblack/browser-copypasta/#adding-a-copypasta">
				<NavButton classes="mr-3"><Icon src="{PlusCircle}" size="16" outline /></NavButton>
			</a>
		</SvelteTooltip>

		<SvelteTooltip tip="GitHub" left color="#111111">
			<a href="https://github.com/akisblack/browser-copypasta">
				<NavButton classes="sm:mt-3"><GitHub color="#292929" size={16} /></NavButton>
			</a>
		</SvelteTooltip>
	</div>
</header>