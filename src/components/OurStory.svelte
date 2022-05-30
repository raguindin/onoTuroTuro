<script>
  import SvelteMarkdown from "svelte-markdown";
  export let ourStoryData = {};
</script>

<div class="section-wrapper">
  <h3>Our Story</h3>
  <div class="flex-wrapper">
    {#if ourStoryData.thumbnail !== ""}
      <figure>
        <img
          src="https://luke-shafer-web-design.mo.cloudinary.net/onoturoturo/{ourStoryData.thumbnail}?tx=c_scale,w_432"
          alt="Our family"
        />
        <figcaption>Our Family</figcaption>
      </figure>
    {/if}
    <div class="bio-wrapper">
      <p>
        <SvelteMarkdown source={ourStoryData.body} />
      </p>
      <!-- <p>{ourStoryText}</p> -->
    </div>
  </div>
</div>

<style>
  div.section-wrapper {
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .flex-wrapper {
    margin-top: 3em;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
  }

  figure {
    /* width: clamp(25vw, 30em, 70vw); */
    /* width: min(25em,100%); */
    width: min(100%, 27em);
    margin: 0;
  }

  figcaption {
    font-style: italic;
    text-align: center;
  }

  img {
    width: 100%;
  }

  div {
    width: auto;
  }

  p {
    /* width: clamp(25vw, 30em, 70vw); */
    width: 100%;
  }

  p,
  figcaption {
    font-family: var(--bio-font);
    color: var(--bio-text-color);
    font-size: 1.5em;
  }
</style>
