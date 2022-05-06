<script>
	// importing normalize.css 
	// TODO: make sure this is working or move to /public
	import Normalize from "./dependencies/Normalize.svelte";

	// component imports
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";

	// side Navbar width
	// TODO: make this more responsive
	let navWidth = "20em";
	
	// Loop to create a bunch of text on the page
	// TODO: This needs to be removed before production
	let temp = []
	for (let i = 0; i < 20; i++) {
		temp.push(i);
	}
</script>

<main>
	<!-- Normalize script - again, maybe move to public -->
	<Normalize/> 
	<Header/>
	<Nav --width={navWidth}/>
	<section style="padding-left:{navWidth}; padding-top: 8.5em" id=main-content>
		<Menu/>
		<!-- TODO: remove the below text once more content is on the site -->
		{#each temp as i}
			<p class="loremipsum">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>	
		{/each}
	</section>

	<script>
		// Netlify verification. Perhaps move to <body> on index.html
		// TODO: verify this is working and if not, FIXME:
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
	/* Google fonts */
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:root {
		/* Frequently used colors */
		--primary-g: hsl(105, 23%, 40%);
		--primary-b: hsl(234, 21%, 48%);
		--primary-r: hsl(7, 45%, 42%);
		--primary-y: hsl(45, 78%, 65%);
		--background: hsl(46, 100%, 93%);

		/* Slightly adjusted colors for text */
		--text-b: hsl(234, 24%, 38%);
		--text-g: hsl(106, 24%, 34%); 
		--text-r: var(--primary-r);

		/* Font families */
		--sans: 'Mulish', sans-serif;
		--serif: 'PT Serif', serif;

		/* Prevents horizontal scroll from 100vw elements with scrollbar */
		overflow-x: hidden;
	}

	#main-content {
		background-color: var(--background);
		/* margin-left: 20em; */
	}

	/* TODO: remove this block after removing the above lorem ipsum */
	p.loremipsum {
		margin: auto;
		width: 50%;
	}

	/* Reduce boilerplate by making list styling global */
	ul {
        padding-inline-start: 0;
	}

	li {
		list-style-type: none;
	}

</style>