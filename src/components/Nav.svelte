<script>
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    let sections = ["Menu", "Calendar", "Our Story"];
    let activeSection = null;

</script>

<style>
    :root {
        --divider-bar: hsla(45, 78%, 65%, 39%);
    }

    @keyframes grow {
        from {
            width: 10vw;
        }

        to {
            width: 100vw;
        }
    }

    ul {
        padding-inline-start: 0;
    }

    li {
        list-style-type: none;
        font-family: var(--sans);
        text-transform: uppercase;
        line-height: 2em;
        height: 2em;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 2em;
        position: relative;
        display: block;
        padding-left: 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    li.isActive {
        background: var(--divider-bar);
        color: var(--text-r);
        animation-name: grow;
        animation-timing-function: ease-out;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    li.notActive {
        color: var(--text-b);
    }
</style>

<aside>
    <ul>
        {#each sections as section, index}
            <li id={index} on:click="{() => activeSection=index}" class={index === activeSection ? 'isActive' : 'notActive'}>{section}</li>    
        {/each}
    </ul>
</aside>
