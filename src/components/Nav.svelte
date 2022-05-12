<script>
    const sections = ["Menu", "Calendar", "Our Story"];
    const section_ids = sections.map(x => x.replace(/\s/g , "-").toLowerCase());

    export let activeSectionIndex = null;
    export let sectionTopPositions = [];
    let windowOuterHeight;
    let scrollPositionY = 0;
	let activeSectionOffset = 200;
    $: sectionTopPositions.forEach( (offsetTop, index) => {
        if (scrollPositionY + activeSectionOffset > offsetTop) {
            activeSectionIndex = index;
        }
    })
    $: if (scrollPositionY < activeSectionOffset) activeSectionIndex = null;

</script>

<svelte:window bind:innerHeight={windowOuterHeight} bind:scrollY={scrollPositionY}/>


<nav>
    <ul>
        {#each sections as section, index}
            <li id={index} on:click="{() => activeSectionIndex=index}"
                class={index === activeSectionIndex ? 'isActive' : 'notActive'}>
                <a href="#{section_ids[index]}">{section}</a>
            </li>
        {/each}
    </ul>
</nav>


<style>
    @keyframes active-nav-expand {
        from {
            width: 0vw;
        }

        to {
            width: 100%;
        }
    }

    ul {
        display: flex;
        top: 0;
        flex-direction: column;
        justify-content: flex-start;
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
        padding-left: 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        white-space: nowrap;
        z-index: 3;
    }

    li.isActive {
        background: var(--nav-active-item-background-color);
        color: var(--nav-active-item-text-color);
        animation-name: active-nav-expand;
        animation-timing-function: ease-in;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
    }

    li.notActive {
        color: var(--nav-inactive-item-text-color);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>

