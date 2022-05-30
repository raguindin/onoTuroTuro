<script>
  const sections = ["Menu", "Calendar", "Our Story"];
  class Section {
    constructor(_name, _topPos) {
      this.name = _name;
      this.id = _name.replace(/\s/g, "-").toLowerCase();
      this.topPosition = _topPos;
    }
  }

  const section_ids = sections.map((x) => x.replace(/\s/g, "-").toLowerCase());

  let activeSectionIndex = null;
  export let sectionTopPositions = [];
  export let menuButtonActive = false;

  let viewportHeight;
  let scrollPositionY = 0;
  let activeSectionOffset = 200;
  let canScrollChangeSection = true;

  $: if (canScrollChangeSection)
    activeSectionIndex =
      sectionTopPositions.length -
      1 -
      sectionTopPositions
        .slice()
        .reverse()
        .findIndex((offsetTop, index, arr) => {
          if (scrollPositionY > 10 && index === arr.length - 1) return true;
          if (scrollPositionY + activeSectionOffset > offsetTop) return true;
          return false;
        });

  // Below determines when the next approaching section is on screen
  let nextSectionApproaching = false;
  $: nextSectionIndex = activeSectionIndex + 1;
  $: if (
    scrollPositionY + viewportHeight >
    sectionTopPositions[nextSectionIndex]
  ) {
    nextSectionApproaching = true;
  } else {
    nextSectionApproaching = false;
  }

  const handleClick = (index) => {
    menuButtonActive = false;
    canScrollChangeSection = false;
    setTimeout(() => {
      canScrollChangeSection = true;
    }, 200);
    activeSectionIndex = index;
  };
</script>

<svelte:window
  bind:innerHeight={viewportHeight}
  bind:scrollY={scrollPositionY}
/>

<nav>
  <ul>
    {#each sections as section, index}
      <a href="#{section_ids[index]}" on:click={() => handleClick(index)}>
        <li
          id={index}
          class={index === activeSectionIndex
            ? "isActive"
            : index === nextSectionIndex && nextSectionApproaching
            ? "isApproaching"
            : "notActive"}
        >
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

  @keyframes backgroundSwipe {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

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
    width: 100%;
    color: var(--nav-inactive-item-text-color);
  }

  li.isActive {
    background: var(--nav-active-item-background-color);
    color: var(--nav-active-item-text-color);
    width: 100%;
    background-size: 100% 100%;
    animation: backgroundSwipe 300ms normal forwards;
  }

  li.notActive {
    color: var(--nav-inactive-item-text-color);
  }

  li.notActive:hover {
    background-color: white;
    width: 80%;
    border-radius: 10px;
  }

  a {
    z-index: 3;
    text-decoration: none;
    color: inherit;
  }
</style>
