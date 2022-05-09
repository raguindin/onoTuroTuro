<script>
	// Custom Component
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";
	import Calendar from "./components/Calendar.svelte";
	export let ready;

	// TODO: make this more responsive
	const navWidth = "20em";
</script>

<main>
	<Header 
		--address-text-color="var(--text-blue)"
		--title-text-color="hsl(48, 100%, 99%)"
		--subtitle-text-color="var(--text-green)"
		--banner-top-color="var(--primary-green)"
		--banner-middle-color="var(--primary-red)"
		--banner-bottom-color="var(--primary-blue)"
	/> 
	<Nav 
		--width={navWidth}
		--nav-item-font="var(--sans)"
		--nav-active-item-background-color="#f7e5ab"
		--nav-active-item-text-color="var(--text-red)"
		--nav-inactive-item-text-color="var(--text-blue)"
	/>
	<section style="padding-left:{navWidth}; padding-top: 8.5em" id=main-content>
		<Menu
			--section-title-text-color="var(--text-red)"
			--section-title-font="var(--sans)"
			--section-subtitle-text-color="var(--text-green)"
			--section-subtitle-font="var(--sans)"
			--item-text-color="var(--text-blue)"
			--item-font="var(--serif)"
		/>
		<Calendar bind:ready={ready}/>
		{#each [...Array(40).keys()] as x}
			<br>
		{/each}
	</section>
</main>

<style>
	/* Google fonts */
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:root {
		/* Frequently used colors */
		--primary-green: hsl(105, 23%, 40%);
		--primary-blue: hsl(234, 21%, 48%);
		--primary-red: hsl(7, 45%, 42%);
		--primary-yellow: hsl(45, 78%, 65%);
		--background-color: hsl(46, 100%, 93%);

		/* Slightly adjusted colors for text */
		--text-blue: hsl(234, 24%, 38%);
		--text-green: hsl(106, 24%, 34%); 
		--text-red: var(--primary-red);
		--text-light: hsl(48, 100%, 99%);

		--sans: 'Mulish', sans-serif;
		--serif: 'PT Serif', serif;

		/* Prevents horizontal scroll from 100vw elements with scrollbar */
		overflow-x: hidden;
	}

	#main-content {
		background-color: var(--background-color);
	}

	/* Reduces boilerplate by making list styling global */
	:global(ul) {
        padding-inline-start: 0;
	}

	:global(li) {
		list-style-type: none;
	}

</style>