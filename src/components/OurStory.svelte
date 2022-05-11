<section id="our-story">
    <figure>
        <img src="media/family.png" alt="Our family">
        <figcaption>Our Family</figcaption>
    </figure>
    <div class="bio-wrapper">
        <p>Story of the food truck will go here</p>
    </div>
</section>

<style>
    section {
        margin-top: 5em;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    figure {
        /* width: clamp(25vw, 30em, 70vw); */
        /* width: min(25em,100%); */
        width: min(100%,27em);
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

    p,figcaption {
        font-family: var(--bio-font);
        color: var(--bio-text-color);
        font-size: 1.5em;
    }
</style>