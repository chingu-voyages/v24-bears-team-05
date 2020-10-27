<script>
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
  }
  section,
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article {
    max-width: 90%;
  }

  article img {
    max-width: 11em;
    margin-bottom: 1rem;
  }

  /* remove input number arrows */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    <article>
      <img {src} alt={roastProfile} />
      <!-- TODO: currently hardcoded, use {description} when available -->
      <p>
        Tropical Weather embodies everything we love about specialty coffee and
        has evolved into a foundational blend. We brew this in our own cafes as
        a “House” filter option and love how it balances the relationship
        between modern citric acidity flavors with full bodied chocolates. This
        comfortable, yet surprisingly complex and sophisticated coffee is
        approachable to all. It performs well on its own for the purist or with
        fats such as dairy or plant based beverages, making it a true answer for
        all coffee needs.
      </p>
      <div>
        <button>-</button>
        <input type="number" min="0" style="appearance: textfield;" />
        <button>+</button>
      </div>
      <button>Add To Cart</button>
    </article>
  </section>
</main>
