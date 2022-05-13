<script>
    export let name, price, src;
</script>

    <li>
        <img {src} alt="{name}">
        <p> {name} <strong>${price}</strong></p>
    </li>

<style>
    li {
        /* margin: auto; */
        margin: 0;
        width: 100%;
    }

    img {
        height: min(65vw, 17em);
        width: min(65vw, 17em);
        margin: auto;
    }

    p {
        color: var(--item-text-color);
        font-family: var(--item-font);
        font-size: 1.5em;
        text-transform: uppercase;
        text-align: center;
        margin-top: 0.2em;
        /* width: 100%; */
        letter-spacing: 1px;
        /* font-weight: 10; */
    }
</style>