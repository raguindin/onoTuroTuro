<script>
    // import mapStyles from './map-styles'; // optional


    let container;
    let zoom = 18;
    export let center = {lat: -34.397, lng: 150.644};
    let map;
   
    import { onMount } from 'svelte';
   
    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center
        });
    });
</script>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>

<div bind:this={container}></div>