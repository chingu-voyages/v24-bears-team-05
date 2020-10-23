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

  main {
    background-color: hsl(40, 12%, 95%, 1);
  }
</style>

<svelte:head>
  <title>Bear Coffee</title>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='12 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>" />
</svelte:head>

<main>
  <HomeHero />
  <HomeSec1 />
  <HomeSec2 />

  <h1>Great success!</h1>

  <p>
    <strong>Try editing this file (src/routes/index.svelte) to test live
      reloading.</strong>
  </p>
</main>
