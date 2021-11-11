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
</script>

<header class="bg-bg_secondary p-6 flex items-center justify-between">
	<a href="/" class="text-green-400 w-max text-2xl font-bold">Browser Copypasta</a>
	<div class="buttons sm:mt-1 sm:first:mt-0">
		<NavButton classes="mr-3 mdi mdi-clipboard-outline" fun={copyText}>
			 Copy
		</NavButton>
		<a href="https://github.com/akisblack/browser-copypasta">
			<NavButton classes="mdi mdi-github">
				 GitHub
			</NavButton>
		</a>
	</div>
</header>