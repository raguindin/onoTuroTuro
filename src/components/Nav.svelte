<script>
    // TODO: remove tweened and cubicOut as they aren't used
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';


    let sections = ["Menu", "Calendar", "Our Story"];

    // ActiveSection determines which Nav Link is currently active
    let activeSection = null;

    // TODO: change active section dynamically based on where we are in the page

</script>

<style>
    /*  Divider bar color -- the current color is what the commented color looks like
        against --background (but lets it be fully opaque)  */
    /*  Would love for this to be calculated somehow rather than manual  */
    :root {
        /* --divider-bar: hsla(45, 78%, 65%, 39%); */
        --divider-bar: #f7e5ab;
    }

    /* Animation for when a menu element becomes active */
    /* TODO: consider different name? */
    @keyframes grow {
        from {
            width: 0vw;
        }

        to {
            width: 100vw;
        }
    }

    ul {
        display: flex;
        position: absolute;
        top: 0;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
    }

    aside {
        position: absolute;
        left: 0;
        width: var(--width);
        height: 100%;
    }
    
    /* TODO: make non-active li elements also stick relative to the active element */
    

    li {
        font-family: var(--sans);
        text-transform: uppercase;
        line-height: 2em;
        height: 2em;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 2em;
        /* position: sticky; */
        /* display: block; */
        padding-left: 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        white-space: nowrap;
    }

    li.isActive {
        position: sticky;
        top: 50px;
        background: var(--divider-bar);
        color: var(--text-r);
        animation-name: grow;
        animation-timing-function: ease-in-out;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        width: 100vw;
        /* max-width: 100%; */
    }

    .isActive::before {
        position: sticky;
        margin-top: -50px;
        padding-top: 50px;
        margin-left: -1em;
        width: 100vw;
        background: var(--background);
        display: block;
        content: "";
    }

    li.notActive {
        color: var(--text-b);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>

<aside>
    <ul>
        {#each sections as section, index}
            <li id={index} on:click="{() => activeSection=index}" class={index === activeSection ? 'isActive' : 'notActive'}><a href="#menu">{section}</a></li>
        {/each}
    </ul>
</aside>
