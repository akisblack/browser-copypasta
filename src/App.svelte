<script>
	window.addEventListener('input', function (e) {
		document.getElementsByName("insert").forEach(function(value) {
			value.innerHTML = document.getElementById("userInput").value;
		})
	}, false);
</script>

<main>
	<header>
		<h1 class="title">Browser Copypasta</h1>
			<ul>
				<div class="dropdown">
					<button class="dropbtn">Switch Browser</button>
					<div class="dropdown-content">
						<a href="/">Link 1</a>
						<a href="/">Link 2</a>
						<a href="/">Link 3</a>
					</div>
				  </div> 
				<button>Copy Text</button>
			</ul>
	</header>

	<div id="input">
		<input type="text" id="userInput" value="VIVALDI BROWSER">
	</div>

	<div id="text">
		<p>For me, it's the <b name="insert">VIVALDI BROWSER</b>. The best internet browser. I even download the <b name="insert">VIVALDI BROWSER</b> on my phone, tablet, laptop, and desktop because the <b name="insert">VIVALDI BROWSER</b> is so user friendly and helps fill my workflow with awesome tab features (Tab Stacks & Tab Tilling)</p><br>

		<p>One time I asked for 3 tab stacks, WITH the tab tilling (multiple sites open at once on a screen). I said, "Wow, three for free!" and the nice friendly <b name="insert">VIVALDI BROWSER</b> dev laughed and said, "I'm going to call you 3-for-free!". But the best part is with tab tilling, it's not even free for me!</p><br>

		<p>Now the <b name="insert">VIVALDI BROWSER</b> greets me with "hey it's 3-for-free!" and ALWAYS gets me a tab stack, with a web panel on the side. It's such a fun and cool atmosphere with my <b name="insert">VIVALDI BROWSER</b>, I use it at least 7 times a week for my daily browsing needs which include work, shitposting, school, and stalking my ex on facebook (with her instagram tiled to the side!).</p><br>

		<p>What a great <b name="insert">VIVALDI BROWSER</b></p>
	</div>

</main>


<style>
/* Navbar*/
.title {
	color: aquamarine;
}

button {
	margin-top: 5px;
	background-color: aquamarine;
	border-radius: 5px;
	border: none;
	height: 25px;
	color: black;
	padding-left: 20px;
	padding-right: 20px;
}

@media screen and (max-width: 406px) {
  button {
    padding-bottom: 40px;
	padding-top: 7px;
  }
}

header {
	margin: 0 auto;
	max-width: 70%;
	display: flex;
    justify-content: space-between;
    align-items: center;
}

header > ul {
	float: right;
}

 /* Dropdown*/
 .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 25px;
  z-index: 1;
}
.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
	background-color: #333333;
}

.dropdown:hover .dropdown-content {
	display: block;
}

/* Content*/
#input, #text {
	margin: 0 auto;
	max-width: 70%;
}

#text {
	line-height: 25px;
	text-align: justify;
	color: #fff
}

#input {
    padding-top: 70px;
}

input {
    width: 100%;
    background-color: #272727;
    color: #fff;
    border-radius: 15px;
    border: 2px solid aquamarine;
}

</style>