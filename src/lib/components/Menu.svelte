<script>
    import MenuItem from "./MenuItem.svelte"

    // menu.json is populated from the CMS
    import menu from "$lib/content/menu.json"
    

    // Example of sections: Combo Plates, Additional Items
    const sections = menu.sections;
</script>



{#each sections as section}
    <div class="menu-section">
        {#if section.subtitle}
            <h3>{section.title}</h3>
            <h4>{section.subtitle}</h4>
        {:else}
            <h3 class="smaller">{section.title}</h3>
        {/if}
        <ul class="menu-container">
            {#each section.items as foodItem}
                <MenuItem 
                    name={foodItem.name} 
                    price={foodItem.price} 
                    src={foodItem.src}/>
            {/each}
        </ul>
    </div>
{/each}


<style>
    /* TODO: Improve menu styles and responsiveness */


    div.menu-section {
        text-align: center;
        margin-bottom: 6em;
    }

    h3 {
        font-size: 3.4em;
        color: var(--section-title-text-color);
        font-family: var(--section-title-font);
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
        color: var(--section-subtitle-text-color);
        font-family: var(--section-subtitle-font);
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

    @media screen and (max-width: 30em) {
        ul {
            grid-template-columns: minmax(100%, 21em);
        }
    }
</style>