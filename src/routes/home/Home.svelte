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
  @media (min-width: 720px) {
    :global(body) {
      background-color: white;
    }
  }
</style>

<svelte:head>
  <title>Bear Coffee</title>
  <meta
    name="description"
    content="With Bear Coffee, finding your next favorite brew is faster than brewing a cup of coffee!" />
</svelte:head>

<main>
  <HomeHero />
  <HomeSec1 />
  <!-- <Carousel hydrate-client={{}} /> -->
  <HomeSec2 />
</main>
