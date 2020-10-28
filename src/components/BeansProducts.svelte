<script>
  export let products

  const originalList = products;

  function filterBungoma() {
    products = originalList;
    products = products.filter((product) => product.roastProfile === "Bungoma");
  }
  function filterEthipiaRaro() {
    products = originalList;
    products = products.filter((product) => product.roastProfile === "Ethiopia Raro");
  }
  function filterParaisoVeracruz() {
    products = originalList;
    products = products.filter(
      (product) => product.roastProfile === "Paraiso Veracruz"
    );
  }
</script>

<style>
  section {
    padding: 0 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 24rem;
  }
  article {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 1.5rem;
    padding-bottom: 0;
    margin-bottom: 3.5rem;
    min-width: 10rem;
    width: 100%;
  }
  article img {
    max-width: 11em;
    margin-bottom: 1rem;
  }
  article h2 {
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
  }
  .price {
    align-self: flex-end;
    margin-right: -0.5rem;
    margin-bottom: 0.5rem;
  }

  .dropdown {
    font-family: Killarney;
    border: 2px solid #222222;
    border-radius: 0.5rem;
    background: none;
    font-size: 1.2rem;
    padding: 0.25rem 1.5rem;
    align-self: flex-end;
    margin-bottom: 1.5rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #ddd;
  }
</style>

<section>
  <div class="container">
    <div class="dropdown">
      Filter
      <div class="dropdown-content">
        <a href="#" on:click={filterBungoma}>Bungoma</a>
        <a href="#" on:click={filterEthipiaRaro}>Ethipia Raro</a>
        <a href="#" on:click={filterParaisoVeracruz}>Paraiso Veracruz</a>
      </div>
    </div>
    {#each products as { name, origin, roastProfile, src, color = "lightgray", price = "N/A" }}
      <article style="background-color: {color};">
        <img {src} alt="{name} - {origin}" />
        <h2>{name} — {origin}</h2>
        <h2>{roastProfile}</h2>
        <h2 class="price">{price}</h2>
      </article>
    {/each}
  </div>
</section>
