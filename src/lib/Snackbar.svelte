<div id="snackbar">
	<p id="snackbarText">✔️Copied to clipboard.</p>
</div>

<style lang="postcss">
	#snackbar {
		visibility: hidden;
		position: fixed;
		bottom: 1px;
		left: 70%;
		width: 10%;
		background-color: #272727;
		color: #fff;
		text-align: center;
		font-size: 15px;
		white-space: nowrap;
		font-family: Mulish;
		padding: 10px;
		margin: 15%;
		border-radius: 15px;

		&.show {
			visibility: visible;
		}
	}
</style>