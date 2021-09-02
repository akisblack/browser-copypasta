<slot />


<style lang="postcss">
	:global(#input, #text) {
		margin: 0 auto;
		max-width: 70%;
	}

	:global(#text) {
		line-height: 25px;
		text-align: justify;
		color: #fff;
		margin-bottom: 100px;
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