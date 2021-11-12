<script>
	export let classes;
	export let fun;
</script>

<button class="bg-green-400 rounded-md p-2 shadow-lg text-secondary {classes}" on:click={fun}>
	<slot />
</button>