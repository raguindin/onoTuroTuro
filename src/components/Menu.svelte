<script>
  import MenuItem from "elements/MenuItem.svelte";
  import menu from "../../public/content/menu.json";

  let isEmpty = false;
  export let menuData = {};
  const sections = Object.keys(menuData).map((key) => menuData[key]);
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
        {#if foodItem.active}
          <MenuItem
            name={foodItem.title}
            price={foodItem.price}
            src={foodItem.thumbnail}
          />
        {/if}
      {/each}
      {#if !section.items.some((item) => item.active)}
        <h4>Check back soon as we add more items!</h4>
      {/if}
    </ul>
  </div>
{/each}

<style>
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
