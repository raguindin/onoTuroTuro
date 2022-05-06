<script>
    // .svelte object instead of Banner svg
    import Banner from 'elements/Banner.svelte'

    // Banner props
    let viewBox="0 0 1460 500";
    let height="30em"

    // Website Title and Subtitle text
    // TODO: Update to use the CMS
	let titleText="ONO TURO-TURO";
    let subtitleText="Hawaiian-Filipino Food Truck";
    // TODO: add address variable

</script>

<header>
    <Banner {viewBox} {height}/>
    <div>
        <!-- TODO: make title/subtitle text curved -->
        <h1>
            {titleText}
        </h1>
        <h2>
            {subtitleText}
        </h2>
        <address>
            Gahanna, OH | <a href="tel:+16144038051">614-403-8051</a>
        </address>
    </div>
</header>

<style>
    /* Header text - TODO: consider moving to App.svelte as --light-text */
    :root {
        --h1-text: hsl(48, 100%, 99%)    }

    /* Grid to manage the heading text positions */
    div {
        display: inline-grid;
        /* clamp ensures the main column stays a proper size on the screen */
        grid-template-columns: 1fr clamp(50%, 50em, 100%);
        grid-template-rows: 6em 6em 3em 3em;
        width: 100%;
    }

    h1, h2, address {
        text-align: center;
    }
    
    a {
        text-decoration: none;
        color: var(--addr-text);
    }

    a:hover {
        filter: brightness(150%);
        text-decoration: underline;
    }

    h1 {
        grid-column: 2;
        grid-row: 2;
        color: var(--h1-text);
        margin: 0px;
        font-family: 'Mulish', sans-serif;
        text-transform: uppercase;
        font-size: clamp(1vw, 4em, 12vw);
        text-shadow: 2px 2px 8px black;
        font-weight: 800;
    }
    
    h2 {
        margin: 0px;
        font-family: 'PT Serif', serif;
        grid-column: 2;
        grid-row: 3;
        font-size: clamp(1vw, 2.4em, 7vw);
        color: var(--text-g);
        font-style: italic;
        font-weight: 700;
    }

    address {
        font-style: normal;
        color: var(--text-b);
        grid-column: 2;
        grid-row: 4;
        font-size: 2em;
        text-transform: uppercase;
    }

</style>