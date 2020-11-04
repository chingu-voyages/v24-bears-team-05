<script>
  import CoffeeProfileBuy from "../../components/CoffeeProfileBuy.svelte";
  import CoffeeProfileSuggest from "../../components/CoffeeProfileSuggest.svelte";

  export let data;
  const { product } = data;
  let {
    name,
    origin,
    roaster,
    type,
    description = "",
    color = "lightgray",
    prices = "N/A",
  } = product;
</script>

<style>
  main {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
  section {
    margin-bottom: 3rem;
    padding-top: 1.5rem;
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
    padding-bottom: 0.5rem;
    width: 90%;
  }

  h1 {
    margin: 0;
    text-align: center;
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
  picture {
    display: contents;
  }
  /* TODO: When image hasn't loaded yet, causes negative margin to make text float up. Use static imagery with 
    Elder's Svelte plugin*/

  .desc {
    font-weight: 500;
    line-height: 1.3;
  }

  /* Desktop */
  @media (min-width: 720px) {
    hr {
      display: none;
    }
    article {
      display: grid;
      grid-template-areas:
        "20rem 1fr"
        "20rem 1fr";
      width: 90%;
      max-width: 60rem;
    }
    article img {
      grid-row: 1 / 3;
    }
  }
</style>

<svelte:head>
  <title>
    {`${roaster != 'Bear Coffee' ? `Bear Coffee | ${roaster}` : roaster} — ${origin} ${type}`}
  </title>
</svelte:head>

<main>
  <section>
    <h1>{type}</h1>
    <hr />
    <article style="background-color: {color};">
      <picture>
        <source srcset="/images/coffees/{name}.avif" type="image/avif" />
        <img src="/images/coffees/{name}.webp" alt="{roaster} - {origin}" />
      </picture>
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

      <CoffeeProfileBuy hydrate-client={{ prices, name, roaster }} />
    </article>
  </section>
  <CoffeeProfileSuggest />
</main>
