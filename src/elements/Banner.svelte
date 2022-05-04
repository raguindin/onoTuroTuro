<script>
    export let viewBox, height, titleText, preserveAspectRatio = 'none';
</script>

<style>
    :root {
        --heading-text: hsl(43, 100%, 99%);
    }

    svg {
        z-index: -1;
        position: absolute;
        right: 0;
        width: clamp(100%, 100em, 200%);
        font-family: 'Mulish', sans-serif;

        color: var(--heading-text);
    }
</style>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {height} {preserveAspectRatio} version="1.0">

    <path fill="#FFF" d="M-144-30h1728v360H-144z" />
    
    <path fill="var(--background)" d="M-144-30h1728v360H-144z" />

    <path fill="var(--primary-g)"
        d="M-38.824-33.371 s 355.437 286.758 669.367 193.348c328.867-97.875 618.7-85.754 835.852-16.559l-36.18 338.934L-76.707 321.48zm0 0" />

    <path fill="var(--primary-r)"
        d="M-16.04-10.793s353.634 288.977 668.145 197.531c329.473-95.816 619.223-81.883 835.938-11.328l-38.3 338.7L-56.142 343.815zm0 0" />

    <path fill="var(--primary-b)"
        d="M1.246 10.965s351.711 294.457 668.54 206.09c331.898-92.59 622.644-75.317 839.417-1.953l-42.375 340.011L-43.117 366.95zm0 0" />

    <path fill="var(--background)"
        d="M-3.445 22.68S345.078 326 666.165 243.793c336.358-86.137 629.03-62.703 846.019 15.562l-49.555 340.887L-55.328 379.574zm0 0" />

</svg>

