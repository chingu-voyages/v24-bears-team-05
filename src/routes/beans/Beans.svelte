<script>
  import BeansProducts from "../../components/BeansProducts.svelte";
  export let data;
  let { products } = data;
</script>

<style>
  main {
    margin-top: 3.5rem;
  }

  section {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 0 1rem;
  }
  h1 {
    text-align: center;
    font-size: 3.5rem;
    margin-top: 1rem;
    margin-bottom: 0;
    line-height: 1;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    max-width: 40rem;
  }
  hr {
    width: 7.8rem;
  }
</style>

<svelte:head>
  <title>Bear Coffee Beans</title>
</svelte:head>

<main>
  <section>
    <h1>Choose<br />Your Beans</h1>
    <hr />
    <p>
      Choose from a wide variety of coffee from the top roasters in the US. All
      coffee is roasted to order and shipped fresh to your door.
    </p>
  </section>

  <BeansProducts hydrate-client={{ products }} />
</main>
