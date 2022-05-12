<script>
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	import Menu from "./components/Menu.svelte";
	import Calendar from "./components/Calendar.svelte";
	import OurStory from "./components/OurStory.svelte";
	import { onMount } from "svelte";

	// svelte bindings
	let menu = {};
	let calendar = {};
	let ourStory = {};
	let stickyTop = "min(4em, 40vh";
	const navHeight = "345px";
	let sectionTopPositions = [];

	onMount( () => {
		sectionTopPositions = [menu.offsetTop, calendar.offsetTop, ourStory.offsetTop];
	});

</script>

<header>
	<Header
			--address-text-color="var(--text-blue)"
			--title-text-color="hsl(48, 100%, 99%)"
			--subtitle-text-color="var(--text-green)"
			--banner-top-color="var(--primary-green)"
			--banner-middle-color="var(--primary-red)"
			--banner-bottom-color="var(--primary-blue)"/>
</header>

<aside style="top: {stickyTop}">
	<Nav 
		--nav-item-font="var(--sans)"
		--nav-active-item-background-color="#f7e5ab"
		--nav-active-item-text-color="var(--text-red)"
		--nav-inactive-item-text-color="var(--text-blue)"
		height = {navHeight}
		{sectionTopPositions}
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

	header {
		position: relative;
	}

	/* TODO: add keyframes for banner load animation */
	/* @keyframes banner-drawing {
		from {
			width: 100%;
		}
		to {
			width: 0%
		}
	} */

	/* header::after {
        background-color: var(--background-color);
		display: block;
		position: absolute;
		top: 0;
		right: 0;
        width: 100%;
        height: 100%;
		z-index: 10;
        content: "";
	}

	header.animate::after {
		animation: banner-drawing 1.5s ease-in-out 1s 1 normal forwards;
    } */

	aside {
        position: sticky;
		float: left;
        width: var(--nav-width);
        height: 100vh;
		z-index: 2;
    }

	aside::before {
        background: var(--background-color);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); 
		position: fixed;
		width: var(--nav-width);
		top: 0;
		height: 100%;
		content: "";
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
        aside {
            display: none;
        }
    }

</style>