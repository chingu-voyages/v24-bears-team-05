<script>
  import BeansProducts from "../../components/BeansProducts.svelte";
</script>

<style>
  main {
    margin-top: 3.5rem;
  }
</style>

<svelte:head>
  <title>Bear Coffee Beans</title>
</svelte:head>

<main>
  <section>
    <h1>Choose Your Beans</h1>
    <hr />
    <p>
      Choose from a wide variety of coffee from the top roasters in the US. All
      coffee is roasted to order and shipped fresh to your door.
    </p>
  </section>

  <BeansProducts client-hydrate={{}} />
</main>
