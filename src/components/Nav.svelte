<script>
    const sections = ["Menu", "Calendar", "Our Story"];
    const section_ids = sections.map(x => x.replace(/\s/g , "-").toLowerCase());

    // ActiveSection determines which Nav Link is currently active
    let activeSection = null;

    // TODO: change active section dynamically based on where we are in the page

</script>

<style>
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
        display: block;
        position: absolute;
        left: 0;
        width: var(--width);
        height: 100%;
    }
    
    /* TODO: make non-active li elements also stick relative to the active element */

    li {
        font-family: var(--nav-item-font);
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
        background: var(--nav-active-item-background-color);
        color: var(--nav-active-item-text-color);
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
        background: var(--background-color);
        display: block;
        content: "";
    }

    li.notActive {
        color: var(--nav-inactive-item-text-color);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    @media only screen and (max-width: 900px) {
        aside {
            display: none;
        }
    }
</style>

<aside>
    <ul>
        {#each sections as section, index}
            <li id={index} on:click="{() => activeSection=index}" 
                class={index === activeSection ? 'isActive' : 'notActive'}>
                <a href="#{section_ids[index]}">{section}</a>
            </li>
        {/each}
    </ul>
</aside>
