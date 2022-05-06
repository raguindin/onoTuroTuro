<script>
    // Menu Item is any orderable item on the menu, such as "Teriyaki Chicken"
    import MenuItem from "elements/MenuItem.svelte"

    // menu.json is populated from the CMS
    import menu from "../../public/content/menu.json"
    
    // Example of sections: Combo Plates, Additional Items
    let sections = menu.sections;
</script>


<section id=menu>
    {#each sections as section}
        <div class="menu-section">
            {#if section.subtitle}
                <h3>{section.title}</h3>
                <h4>{section.subtitle}</h4>
            {:else}
                <h3 class="smaller">{section.title}</h3>
            {/if}
            <ul class="menu-container">
                {#each section.items as item}
                    <MenuItem name={item.name} price={item.price} src={item.src}/>
                {/each}
            </ul>
        </div>
    {/each}
</section>

<style>
    /* TODO: Improve menu styles and responsiveness */

    #menu {
        text-align: center;
        padding-left: 8em;
        padding-right: 8em;
    }

    div.menu-section {
        margin-bottom: 6em;
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

    h3.smaller {
        font-size: 3em;
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
        grid-auto-rows: auto;
        grid-gap: 5px;
    }
</style>