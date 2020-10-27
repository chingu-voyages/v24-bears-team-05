<script>
  import CoffeeProfileBuy from "../../components/CoffeeProfileBuy.svelte";

  export let data;
  const { product } = data;
  let {
    name,
    origin,
    roastProfile,
    description = "",
    color = "lightgray",
    price = "N/A",
    src,
  } = product;
</script>

<style>
  main {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
  section,
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article {
    max-width: 24rem;
    padding: 1.5rem;
    width: 90%;
  }

  h1 {
    margin: 0;
  }
  hr {
    margin-bottom: 4rem;
  }

  article img {
    max-width: 15rem;
    margin-bottom: 1rem;
    margin-top: -4.5rem;
    transform: rotate(-11.77deg);
  }
  /* TODO: When image hasn't loaded yet, causes negative margin to make text float up. Use static imagery with 
    Elder's Svelte plugin*/

  .desc {
    font-weight: 500;
  }
</style>

<svelte:head>
  <title>
    {`${name != 'Bear Coffee' ? `Bear Coffee | ${name}` : name} — ${origin} ${roastProfile}`}
  </title>
</svelte:head>

<main>
  <section>
    <h1>{roastProfile}</h1>
    <hr />
    <article style="background-color: {color};">
      <img {src} alt={roastProfile} />
      <!-- TODO: currently hardcoded, use {description} when available -->
      <p class="desc">
        Tropical Weather embodies everything we love about specialty coffee and
        has evolved into a foundational blend. We brew this in our own cafes as
        a “House” filter option and love how it balances the relationship
        between modern citric acidity flavors with full bodied chocolates. This
        comfortable, yet surprisingly complex and sophisticated coffee is
        approachable to all. It performs well on its own for the purist or with
        fats such as dairy or plant based beverages, making it a true answer for
        all coffee needs.
      </p>

      <CoffeeProfileBuy hydrate-client={{ price }} />
    </article>
  </section>
</main>
