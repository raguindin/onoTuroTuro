<script>
    const sections = ["Menu", "Calendar", "Our Story"];
    class Section {
        constructor(_name, _topPos) {
            this.name  = _name;
            this.id = _name.replace(/\s/g , "-").toLowerCase();
            this.topPosition = _topPos;
        }
    }

    const section_ids = sections.map(x => x.replace(/\s/g , "-").toLowerCase());

    let activeSectionIndex = null;
    export let sectionTopPositions = [];

    let viewportHeight;
    let scrollPositionY = 0;
	let activeSectionOffset = 200;

    // $: sectionTopPositions.forEach( (offsetTop, index) => {
    //     if (scrollPositionY > 10 && index === 0) {
    //         activeSectionIndex = index;
    //     } else if (scrollPositionY + activeSectionOffset > offsetTop) {
    //         activeSectionIndex = index;
    //     }
    // })

    $: activeSectionIndex = sectionTopPositions.length - 1 - sectionTopPositions.slice().reverse().findIndex( ( offsetTop, index, arr) => {
        if (scrollPositionY > 10 && index === arr.length - 1) return true;
        if (scrollPositionY + activeSectionOffset > offsetTop) return true;
        return false;
    })

    // Below determines when the next approaching section is on screen
    let nextSectionApproaching = false;
    $: nextSectionIndex = activeSectionIndex + 1;
    $: if (scrollPositionY + viewportHeight > sectionTopPositions[nextSectionIndex]) {
        nextSectionApproaching = true; 
    } else {
        nextSectionApproaching = false;
    }



</script>

<svelte:window bind:innerHeight={viewportHeight} bind:scrollY={scrollPositionY}/>



<nav>
    <ul>
        {#each sections as section, index}
            <a href="#{section_ids[index]}">
                <li id={index} 
                    on:click="{() => activeSectionIndex=index}"
                    class="{
                        index === activeSectionIndex ? 'isActive' 
                        : index === nextSectionIndex && nextSectionApproaching ? 'isApproaching' 
                        : 'notActive'
                        }">
                    {section}
                </li>
            </a>
        {/each}
    </ul>
</nav>


<style>
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
        width: 0%;
        color: var(--nav-inactive-item-text-color);
    }

    li.isActive {
        background: var(--nav-active-item-background-color);
        color: var(--nav-active-item-text-color);
        width: 100%;
        transition: width 0.2s;

    }

    li.notActive {
        color: var(--nav-inactive-item-text-color);
    }


    a {
        z-index: 3;
        text-decoration: none;
        color: inherit;
    }
</style>

