<script>
	// imports
	import Normalize from "./dependencies/Normalize.svelte";
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte"

</script>

<main>
	<Normalize/>
	<Header/>
	<section id="main-content">
		<Nav/>
	</section>
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=PT+Serif:ital,wght@0,700;1,700&display=swap');

	:root {
		/* Frequently used colors */
		--primary-g: hsl(105, 23%, 40%);
		--primary-b: hsl(234, 21%, 48%);
		--primary-r: hsl(7, 45%, 42%);
		--primary-y: hsl(45, 78%, 65%);
		--background: hsl(46, 100%, 93%);
		--text-b: hsl(234, 24%, 38%);
		--text-g: hsl(106, 24%, 34%); 
		--text-r: var(--primary-r);

		/* Font families */
		--sans: 'Mulish', sans-serif;
		--serif: 'PT Serif', serif;
	}

	#main-content {
		background-color: var(--background);
	}

</style>