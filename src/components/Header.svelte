<script>
    import Banner from 'elements/Banner.svelte'

    let viewBox="0 0 1460 500";
    let width="100%";
    let height="30em"
	let titleText="ONO TURO-TURO";

</script>

<header>
    <Banner {viewBox} {height} {titleText}/>
    <div class="grid">
        <h1>
            {titleText}
        </h1>
        <h2>
            Hawaiian-Filipino Food Truck
        </h2>
        <address>
            Gahanna, OH | <a href="tel:+16144038051">614-403-8051</a>
        </address>
    </div>
</header>

<style>
    :root {
        --h1-text: hsl(43, 100%, 99%);
        --h2-text: hsl(106, 24%, 34%); 
        --addr-text: hsl(234, 24%, 38%);
    }

    .grid {
        display: inline-grid;
        position: relative;
        grid-template-columns: 1fr 50em;
        grid-template-rows: 6em 6em 3em 3em;
        width: 100%;
    }

    h1, h2, address {
        text-align: center;
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
    }
    
    h2 {
        margin: 0px;
        font-family: 'PT Serif', serif;
        grid-column: 2;
        grid-row: 3;
        font-size: 2.4em;
        color: var(--h2-text);
        font-style: italic;
        font-weight: 700;
    }

    address {
        font-style: normal;
        color: var(--addr-text);
        grid-column: 2;
        grid-row: 4;
        font-size: 2em;
        text-transform: uppercase;
    }

</style>