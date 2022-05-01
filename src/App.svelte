<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	:global(:root) {
		--primary-g: hsl(105, 23%, 40%);
		--primary-b: hsl(234, 21%, 48%);
		--primary-r: hsl(7, 45%, 42%);
		--primary-y: hsl(45, 78%, 65%);
		--background: hsl(46, 100%, 93%);
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>