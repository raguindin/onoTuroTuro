<script>
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";
	import Calendar from "./components/Calendar.svelte";
	import OurStory from "./components/OurStory.svelte";
	import { onMount } from "svelte";

	// svelte bindings
	let scrollPositionY = 0;
	let menu = {};
	let calendar = {};
	let ourStory = {};

	let activeSectionIndex = -1;
	let activeSectionOffset = 200;
	
	$: if (scrollPositionY + activeSectionOffset > ourStory.offsetTop) {
		activeSectionIndex = 2;
	} else if (scrollPositionY + activeSectionOffset > calendar.offsetTop) {
		activeSectionIndex = 1;
	} else if (scrollPositionY + activeSectionOffset > menu.offsetTop) {
		activeSectionIndex = 0;
	} else {
		activeSectionIndex = -1;
	}
</script>

<svelte:window bind:scrollY={scrollPositionY}/>

<header>
	<Header
			--address-text-color="var(--text-blue)"
			--title-text-color="hsl(48, 100%, 99%)"
			--subtitle-text-color="var(--text-green)"
			--banner-top-color="var(--primary-green)"
			--banner-middle-color="var(--primary-red)"
			--banner-bottom-color="var(--primary-blue)"/>
</header>

<aside>
	<Nav 
		--nav-item-font="var(--sans)"
		--nav-active-item-background-color="#f7e5ab"
		--nav-active-item-text-color="var(--text-red)"
		--nav-inactive-item-text-color="var(--text-blue)"
		{activeSectionIndex}
	/>
</aside>

<main>
	<section id="menu" bind:this={menu}>
		<Menu
			--section-title-text-color="var(--text-red)"
			--section-title-font="var(--sans)"
			--section-subtitle-text-color="var(--text-green)"
			--section-subtitle-font="var(--sans)"
			--item-text-color="var(--text-blue)"
			--item-font="var(--serif)"/>
	</section>

	<section id="calendar" bind:this={calendar}><Calendar/></section>
	<section id="our-story" bind:this={ourStory}>
		<OurStory
			--bio-font="var(--serif)"
			--bio-text-color="var(--text-red)"
		/>
	</section>
	{#each [...Array(40).keys()] as x}
		<br>
	{/each}
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

		--nav-width: 20em;

		/* Prevents horizontal scroll from 100vw elements with scrollbar */
		overflow-x: hidden;
	}

	:global(body) {
		background-color: var(--background-color)
	}

	aside {
        position: sticky;
		float:left;
		top: 0;
        width: var(--width);
        height: 100vh;
		z-index: 1;
    }

	main {
		padding-left: var(--nav-width); 
		padding-top: 8.5em;
		margin-left: 3em;
		margin-right: 3em;
	}

	/* Reduces boilerplate by making list styling global */
	:global(ul) {
        padding-inline-start: 0;
	}

	:global(li) {
		list-style-type: none;
	}

	@media only screen and (max-width: 900px) {
		:root {
			--nav-width: 0;
		}
	}

</style>