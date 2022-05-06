<script>
    import MenuItem from "elements/MenuItem.svelte"
    import menu from "../../public/content/menu.json"
    console.log(menu);
    let items = menu.items;
</script>

<section id=menu>
    <h3>Combo Plates</h3>
    <h4>Comes with macaroni salad and choice of fried rice or rice noodles</h4>
    <ul class="menu-container">
        {#each items as item}
            <MenuItem name={item.name} price={item.price} src={item.src}/>
        {/each}
    </ul>
</section>

<style>

    #menu {
        text-align: center;
        padding-left: 8em;
        padding-right: 8em;
    }

    h3,h4 {
        font-family: var(--sans);
    }

    h3 {
        font-size: 3.4em;
        color: var(--text-r);
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
        margin: 0px;
    }

    h4 {
        font-size: 1.3em;
        color: var(--text-g);
        margin-top: 10px;
        letter-spacing: 2px;
        line-height: 1.3em;
        max-width: 20em;
        margin: auto;
        margin-bottom: 10px;
    }

    ul {
        /* display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-left: auto;
        gap: 1em 2em; */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
        grid-auto-rows: auto;
        grid-gap: 5px;
    }
</style>