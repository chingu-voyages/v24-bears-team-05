<script>
  import HomeHero from "../../components/HomeHero.svelte";
  import HomeSec1 from "../../components/HomeSec1.svelte";
  import HomeSec2 from "../../components/HomeSec2.svelte";
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  :global(body) {
    background-color: hsl(40, 12%, 95%, 1);
    padding-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>Bear Coffee</title>
</svelte:head>

<main>
  <HomeHero />
  <HomeSec1 />
  <HomeSec2 />
</main>
