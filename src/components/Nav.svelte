<script>
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    let sections = ["Menu", "Calendar", "Our Story"];
    let activeSection = null;

</script>

<style>
    :root {
        /* --divider-bar: hsla(45, 78%, 65%, 39%); */
        --divider-bar: #f7e5ab;
    }

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
