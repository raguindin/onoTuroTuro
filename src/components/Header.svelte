<script>
  // .svelte object instead of Banner svg
  import Banner from "elements/Banner.svelte";

  // Banner props
  const viewBox = "0 0 1460 380";
  export const height = "345px";
  export let siteSettings = {
    title: "Ono Turo-Turo",
    subtitle: "Hawaiian-Filipino Food Truck",
    location: "Gahanna, OH",
    contact: "614-403-8051",
  };
</script>

<Banner
  --top-color="var(--banner-top-color)"
  --middle-color="var(--banner-middle-color)"
  --bottom-color="var(--banner-bottom-color)"
  {viewBox}
  --height={height}
/>
<div>
  <!-- TODO: make title/subtitle text curved -->
  <h1>
    {siteSettings.title}
  </h1>
  <h2>
    {siteSettings.subtitle}
  </h2>
  <address>
    {siteSettings.location},
    <i>{siteSettings.contact}</i>
  </address>
</div>

<style>
  /* Header text - TODO: consider moving to App.svelte as --light-text */
  :root {
    --h1-text: hsl(48, 100%, 99%);
  }

  /* Grid to manage the heading text positions */
  div {
    display: inline-grid;
    /* clamp ensures the main column stays a proper size on the screen */
    grid-template-columns: 1fr clamp(50%, 50em, 100%);
    grid-template-rows: 6em minmax(6em, min-content) auto auto;
    width: 100%;
  }

  h1,
  h2,
  address {
    z-index: 1;
    text-align: center;
  }

  i {
    text-decoration: none;
    font-style: normal;
    color: var(--text-red);
  }

  h1 {
    grid-column: 2;
    grid-row: 2;
    color: var(--title-text-color);
    margin: 0px;
    font-family: "Mulish", sans-serif;
    text-transform: uppercase;
    font-size: clamp(1vw, 4em, 15vw);
    text-shadow: 2px 2px 8px black;
    font-weight: 800;
  }

  h2 {
    margin: 0px;
    font-family: "PT Serif", serif;
    grid-column: 2;
    grid-row: 3;
    font-size: clamp(1vw, 2.4em, 10vw);
    color: var(--subtitle-text-color);
    font-style: italic;
    font-weight: 700;
  }

  address {
    font-style: normal;
    color: var(--address-text-color);
    grid-column: 2;
    grid-row: 4;
    font-size: min(2em, 9vw);
    text-transform: uppercase;
  }
</style>
