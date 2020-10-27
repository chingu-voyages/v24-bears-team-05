<script>
  export let price;
  let sizeSelect = "10oz";
  const sizes = ["10oz", "2lbs", "5lbs"];

  console.log("Hello");
</script>

<style>
  div {
    display: flex;
    flex-flow: row nowrap;
    place-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  p,
  button {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0;
  }
  p {
    margin-right: auto;
  }
  button {
    padding: 0.5rem 0.6rem;
    margin-left: 1rem;
    background: none;
    border: none;
  }

  button.selected {
    background-color: #74859a;
    color: white;
  }

  .price {
    font-family: Killarney;
    font-weight: 400;
    font-size: 2.2rem;
    text-align: right;
  }

  /* select hydrated component self */
  :global(.coffeeprofilebuy) {
    width: 100%;
  }
</style>

<div>
  <p>Size</p>
  {#each sizes as size}
    <button
      class:selected={sizeSelect == size}
      on:click={() => (sizeSelect = size)}>{size}</button>
  {/each}
</div>

<p class="price">{price}</p>
