<script>
	export let classes;
	export let fun;
</script>

<button class="bg-green-400 rounded-md p-2 shadow-2xl text-bg_secondary sm:mt-1 sm:first:mt-0 {classes}" on:click={fun}>
	<slot />
</button>