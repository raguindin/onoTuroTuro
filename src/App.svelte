<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import Menu from "./components/Menu.svelte";
  import Calendar from "./components/Calendar.svelte";
  import OurStory from "./components/OurStory.svelte";
  import { onMount } from "svelte";
  import CMSData from "./lib/cmsdata.json";
  // import CMSData from "./lib/bundleContent.cjs";

  const menuData = {
    combos: {
      title: CMSData.menusettings.comboTitle,
      subtitle: CMSData.menusettings.comboSubtitle,
      items: CMSData.combos,
    },
    additionalmenu: {
      title: CMSData.menusettings.additionalTitle,
      subtitle: null,
      items: CMSData.additionalmenu,
    },
  };
  const calendarData = CMSData.calendar;
  const ourStoryText = CMSData.ourstory.ourstory;
  const siteSettings = CMSData.settings;
  let menuButtonActive = false;

  // icons
  import { Facebook, Mail } from "lucide-svelte";
  // svelte bindings
  let menu = {};
  let calendar = {};
  let ourStory = {};
  let stickyTop = "min(4em, 40vh)";
  const navHeight = "345px";
  let sectionTopPositions = [];

  onMount(() => {
    sectionTopPositions = [
      menu.offsetTop,
      calendar.offsetTop,
      ourStory.offsetTop,
    ];
  });

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/onoturoturo/",
      icon: Facebook,
    },
    {
      name: "Email",
      href: "onoturoturo@gmail.com",
      icon: Mail,
    },
  ];
</script>

<header>
  <Header
    {siteSettings}
    --address-text-color="var(--text-blue)"
    --title-text-color="hsl(48, 100%, 99%)"
    --subtitle-text-color="var(--text-green)"
    --banner-top-color="var(--primary-green)"
    --banner-middle-color="var(--primary-red)"
    --banner-bottom-color="var(--primary-blue)"
  />
  <button
    class="hamburger {menuButtonActive ? 'active' : 'not-active'}"
    on:click={() => (menuButtonActive = !menuButtonActive)}
    hidden
  >
    <span />
    <span />
    <span />
  </button>
</header>

<aside style="top: {stickyTop}" class:visible={menuButtonActive}>
  <Nav
    --nav-item-font="var(--sans)"
    --nav-active-item-background-color="#f7e5ab"
    --nav-active-item-text-color="var(--text-red)"
    --nav-inactive-item-text-color="var(--text-blue)"
    {sectionTopPositions}
    bind:menuButtonActive
  />
</aside>

<main>
  <section id="menu" bind:this={menu}>
    <Menu
      {menuData}
      --section-title-text-color="var(--text-red)"
      --section-title-font="var(--sans)"
      --section-subtitle-text-color="var(--text-green)"
      --section-subtitle-font="var(--sans)"
      --item-text-color="var(--text-blue)"
      --item-font="var(--serif)"
    />
  </section>

  <section id="calendar" bind:this={calendar}>
    <Calendar {calendarData} />
  </section>
  {#if ourStoryText !== ""}
    <section id="our-story" bind:this={ourStory}>
      <OurStory
        {ourStoryText}
        --bio-font="var(--serif)"
        --bio-text-color="var(--text-red)"
      />
    </section>
  {/if}
</main>

<footer>
  <h5>Follow us!</h5>
  <div class="social-media-container">
    {#each socials as social}
      <a href={social.href}>
        <div class="icon-wrapper">
          <svelte:component
            this={social.icon}
            class="socialIcon"
            alt={social.name}
            size="100%"
            color="var(--social-text-color)"
            strokeWidth="1"
          />
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

  button.hamburger {
    position: fixed;
    left: 1em;
    top: 1em;
    z-index: 4;
    width: 4em;
    height: 4em;
    flex-direction: column;
    justify-content: center;
    border-style: none;
    --line-spacing: 0.5em;
    gap: var(--line-spacing);
    padding: var(--line-spacing);
    background-color: transparent;
  }
  button.hamburger:hover {
    cursor: pointer;
  }
  button.hamburger:hover span {
    filter: brightness(150%);
    /* font-size: 2em; */
  }
  button.hamburger span {
    display: block;
    width: 3.2em;
    text-align: center;
    --line-height: 0.3em;
    --translate-amount: calc(var(--line-spacing) + var(--line-height));
    height: var(--line-height);
    position: relative;
    background-color: var(--primary-blue);
    transform-origin: center;
    transition: transform 250ms;
  }
  button.hamburger.active span:first-child {
    transform: translateY(var(--translate-amount)) rotate(0.125turn);
  }
  button.hamburger.active span:last-child {
    transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
  }
  button.hamburger.active span {
    background-color: var(--primary-red);
    transform: scale(0, 1);
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

    button.hamburger {
      display: flex;
    }

    aside {
      position: fixed;
      display: block;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateX(-120vw);
      transition: transform 300ms;
    }

    aside.visible {
      display: block;
      transform: translateX(0vw);
    }

    aside::before {
      position: absolute;
      background-color: var(--background-color);
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255, 251, 240, 0.3) 100%);
      width: 100%;
      top: -4em;
    }

}

</style>
