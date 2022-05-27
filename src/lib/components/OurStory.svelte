<div class="section-wrapper">
    <h3>Our Story</h3>
    <div class="flex-wrapper">
        <figure>
            <img src="https://luke-shafer-web-design.mo.cloudinary.net/onoturoturo/media/family.png?tx=c_scale,w_432" alt="Our family">
            <figcaption>Our Family</figcaption>
        </figure>
        <div class="bio-wrapper">
            <p>Story of the food truck will go here</p>
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