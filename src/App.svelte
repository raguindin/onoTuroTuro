<script>
	// Custom Component
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";
	import Calendar from "./components/Calendar.svelte"

	// TODO: make this more responsive
	const navWidth = "20em";
	
	// Loop to create a bunch of text on the page
	// FIXME: This needs to be removed before production
	let temp = []
	for (let i = 0; i < 20; i++) {
		temp.push(i);
	}
</script>

<main>
	<Header/>
	<Nav --width={navWidth}/>
	<section style="padding-left:{navWidth}; padding-top: 8.5em" id=main-content>
		<Menu/>
		<Calendar/>
		<!-- TODO: remove the below text once more content is on the site -->
		{#each temp as i}
			<p class="loremipsum">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>	
		{/each}
	</section>
</main>

<style global>
	/* Google fonts */
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:root {
		/* Frequently used colors */
		/* TODO: Refactor color names */
		--primary-g: hsl(105, 23%, 40%);
		--primary-b: hsl(234, 21%, 48%);
		--primary-r: hsl(7, 45%, 42%);
		--primary-y: hsl(45, 78%, 65%);
		--background: hsl(46, 100%, 93%);

		/* Slightly adjusted colors for text */
		--text-b: hsl(234, 24%, 38%);
		--text-g: hsl(106, 24%, 34%); 
		--text-r: var(--primary-r);

		--sans: 'Mulish', sans-serif;
		--serif: 'PT Serif', serif;

		/* Prevents horizontal scroll from 100vw elements with scrollbar */
		overflow-x: hidden;
	}

	#main-content {
		background-color: var(--background);
	}

	/* TODO: remove this block after removing the above lorem ipsum */
	p.loremipsum {
		margin: auto;
		width: 50%;
	}

	/* Reduces boilerplate by making list styling global */
	ul {
        padding-inline-start: 0;
	}

	li {
		list-style-type: none;
	}

</style>