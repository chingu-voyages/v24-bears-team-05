<script>
  import HomeHero from "../../components/HomeHero.svelte";
  import HomeSec1 from "../../components/HomeSec1.svelte";
  import HomeSec2 from "../../components/HomeSec2.svelte";
  import Carousel from "../../components/Carousel.svelte";
</script>

<style>
  :global(body) {
    background-color: hsl(40, 12%, 95%, 1);
  }
  main {
    margin-top: 3.5rem;
  }
</style>

<svelte:head>
  <title>Bear Coffee</title>
</svelte:head>

<main>
  <HomeHero />
  <HomeSec1 />
  <Carousel hydrate-client={{}} />
  <HomeSec2 />
</main>
