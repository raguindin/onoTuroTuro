<script>
	// imports
	import Normalize from "./dependencies/Normalize.svelte";
	import Header from "./components/Header.svelte";
</script>

<main>
	<Normalize/>
	<Header/>
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@800;900&family=PT+Serif:ital,wght@0,700;1,700&display=swap');


	:root {
		--primary-g: hsl(105, 23%, 40%);
		--primary-b: hsl(234, 21%, 48%);
		--primary-r: hsl(7, 45%, 42%);
		--primary-y: hsl(45, 78%, 65%);
		--background: hsl(46, 100%, 93%);
	}

	main {
		/* background-color: var(--background); */
	}

</style>