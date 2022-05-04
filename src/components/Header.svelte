<script>
    import Banner from 'elements/Banner.svelte'

    let viewBox="0 0 1460 500";
    
    let height="30em"
	let titleText="ONO TURO-TURO";
    let subtitleText="Hawaiian-Filipino Food Truck";

</script>

<header>
    <Banner {viewBox} {height} {titleText}/>
    <div>
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
    :root {
        --h1-text: hsl(43, 100%, 99%);
    }

    div {
        display: inline-grid;
        grid-template-columns: 1fr 50rem;
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
        font-size: 4em;
        text-shadow: 2px 2px 8px black;
        font-weight: 800;
    }
    
    h2 {
        margin: 0px;
        font-family: 'PT Serif', serif;
        grid-column: 2;
        grid-row: 3;
        font-size: 2.4em;
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