<main>
    <header>
		<h1 class="title">Browser Copypasta</h1>
			<ul>
				<div class="dropdown">
					<button class="dropbtn">Switch Browser</button>
					<div class="dropdown-content">
						<a href="#/">Vivaldi</a>
						<a href="/#/brave">Brave</a>
					</div>
				  </div> 
                <button onclick="copyText()">Copy Text (broken)</button>
			</ul>
	</header>

<!-- Show the router -->
<Router {routes} />

    <footer>
        <div class="links">
                <a href="https://github.com/cantinadevs/browsercopypasta"><i class="mdi mdi-github"></i></a>
                <a href="https://cantinadevs.github.io"><i class="mdi mdi-web"></i></a>
                <hr>
                <p><i class="mdi mdi-copyright"></i> This site is maintained by The Cantina Devs and is licensed under the MIT License</p>
        </div>
    </footer>
</main>

<script>
    // Import the router component
    // Normally, this would be: `import Router from 'svelte-spa-router'`
    import Router from '../Router.svelte'

    // Import the list of routes
    import routes from './routes'
    
    window.addEventListener('input', function (e) {
    document.getElementsByName("insert").forEach(function(value) {
        value.innerHTML = document.getElementById("userInput").value;
    })
    }, false);

    function copyText() {
        var content = document.getElementById("text").innerText; //get text from copypasta
        try { // try this
            navigator.clipboard.writeText(content); //copy the copypasta
        }
        catch { // something went wrong
            console.log("We couldn't copy the copypasta. User-Agent:" + navigator.userAgent);
            alert("Could not copy, please tell the creator of this site, include this: \n" + navigator.userAgent);
        }
    }
</script>