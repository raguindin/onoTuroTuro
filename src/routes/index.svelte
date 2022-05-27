<script context="module">
  import 'normalize.css'
</script>

<script>
	import Header from "$lib/components/Header.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import Menu from "$lib/components/Menu.svelte";
	import Calendar from "$lib/components/Calendar.svelte";
	import OurStory from "$lib/components/OurStory.svelte";
	import { onMount } from "svelte";

	// icons
	import { Facebook, Mail } from "lucide-svelte";

	// svelte bindings
	let menu = {};
	let calendar = {};
	let ourStory = {};
	let stickyTop = "min(4em, 40vh)";
	const navHeight = "345px";
	let sectionTopPositions = [];

	onMount( () => {
		sectionTopPositions = [menu.offsetTop, calendar.offsetTop, ourStory.offsetTop];
	});

	const socials = [
		{
			name: "Facebook",
			href: "https://www.facebook.com/onoturoturo/",
			icon: Facebook
		},
		{
			name: "Email",
			href: "onoturoturo@gmail.com",
			icon: Mail
		}
	]

</script>

<svelte:head><script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script></svelte:head>

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
</main>

<footer>
	<h5>Follow us!</h5>
	<div class="social-media-container">
		{#each socials as social}
			<a href={social.href}>
				<div class="icon-wrapper">
					<svelte:component class=socialIcon alt={social.name} this={social.icon} size=100% color="var(--social-text-color)" strokeWidth=1 />
				</div>
			</a>
		{/each}
	</div>
</footer>

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
		--background-light: hsl(46, 100%, 97%);

		/* Slightly adjusted colors for text */
		--text-blue: hsl(234, 24%, 38%);
		--text-green: hsl(106, 24%, 34%); 
		--text-red: var(--primary-red);
		--text-light: hsl(48, 100%, 99%);

		--sans: 'Mulish', sans-serif;
		--serif: 'PT Serif', serif;

		--nav-width: 20em;
		--social-text-color: var(--text-light);

		/* Prevents horizontal scroll from 100vw elements with scrollbar */
		overflow-x: hidden;

		font-size: min(3.5vw, 100%);
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	@media screen and (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}
	}
	:global(h3) {
		font-size: 3.4em;
        color: var(--text-red);
        font-family: var(--sans);
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
        margin: 0px;
		text-align: center;
	}

	  
	:target::before {
		content: "";
		display: block;
		height: 30px; /* fixed header height*/
		margin: -30px 0 0; /* negative fixed header height */
	}

	:global(body) {
		background-color: var(--background-color)
	}

	header {
		position: relative;
	}

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
		padding-top: 5em;
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

	footer {
		padding-top: 1.5em;
		padding-bottom: 1.5em;
		background-color: var(--primary-red);
		--content-width: 40em;
		--footer-padding: calc( 50vw - (var(--content-width) / 2) )
		padding-left: var(--footer-padding);
		padding-right: var(--footer-padding);
		text-align: center;
	}

	h5 {
		color: var(--text-light);
		text-transform: uppercase;
		font-size: 2em;
		font-family: var(--sans);
		margin: 0;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	div.social-media-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		gap: 1.5em;
	}

	div.icon-wrapper {
		border: 0.2em solid white;
		width: 4em;
		height: 4em;
		border-radius: 100%;
		padding: 1em;
		background-color: inherit;
	}

	div.icon-wrapper:hover {
		/* filter: brightness(0%); */
		background-color: hsl(7, 45%, 55%);
		transition: background-color 0.05s;
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