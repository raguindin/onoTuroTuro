<script>
    import Banner from 'elements/Banner.svelte'
    // import banner from 'media/banner.svg';
    // let backgroundImage = `url('data:image/svg+xml;utf8,${banner}')`;
    // console.log(backgroundImage);

    let viewBox="0 0 1460 500";
    let width="100%";
    let height="30em"

</script>

<header>
    <Banner {viewBox} {width} {height}/>
    <h1>
        Ono Turo-Turo
    </h1>
    <h2>
        Hawaiian-Filipino Food Truck
    </h2>
    <h3>
        Gahanna, OH | <a href="tel:+16144038051">614-403-8051</a>
    </h3>
</header>

<style>
    :root {
        --heading-text: hsl(43, 100%, 99%);
    }

    header {
        position: relative;
        background-image: url(../media/banner.svg);
    }

    h1 {
        color: var(--heading-text);
        margin: 0px;
    }

</style>