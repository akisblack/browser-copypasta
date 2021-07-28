<header>
	<h1 class="title">Browser Copypasta</h1>
		<ul>
			<div class="dropdown">
				<button class="dropbtn">Switch Browser</button>
				<div class="dropdown-content">
					<a href="/">Vivaldi</a>
					<a href="/brave">Brave</a>
				</div>
			  </div> 
			<button on:click={copyText}>Copy Text</button>
		</ul>
		<div id="snackbar">
			<p id="snackbarText">✔️Copied to clipboard.</p>
		</div>
</header>

<script>
	export function copyText() {
	var content = document.getElementById("text").innerText; //get text from copypasta
	try { // try this
		navigator.clipboard.writeText(content); //copy the copypasta
		// Get the snackbar DIV
		var x = document.getElementById("snackbar");

		// Add the "show" class to DIV
		x.className = "show";

		// After 3 seconds, remove the show class from DIV
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
	catch { // something went wrong
		console.log("We couldn't copy the copypasta. User-Agent:" + navigator.userAgent);
		alert("Could not copy, please tell the creator of this site, include this: \n" + navigator.userAgent);
	}
	}
</script>