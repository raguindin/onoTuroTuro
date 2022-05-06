<script>
	// imports
	import Normalize from "./dependencies/Normalize.svelte";
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";

	let navWidth = "20em";

	let temp = []
	for (let i = 0; i < 20; i++) {
		temp.push(i);
	}
</script>

<main>
	<Normalize/>
	<Header/>
	<Nav --width={navWidth}/>
	<section style="padding-left:{navWidth}; padding-top: 8.5em" id=main-content>
		<Menu/>
		{#each temp as i}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>	
		{/each}
	</section>

	<script>
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on("init", user => {
			if (!user) {
				window.netlifyIdentity.on("login", () => {
				document.location.href = "/admin/";
				});
			}
			});
		}
	</script>
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

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
		overflow-x: hidden;
	}

	#main-content {
		background-color: var(--background);
		/* margin-left: 20em; */
	}

	p {
		margin: auto;
		width: 50%;
	}

	ul {
        padding-inline-start: 0;
	}

	li {
		list-style-type: none;
	}

</style>