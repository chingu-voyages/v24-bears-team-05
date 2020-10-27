<script>
  export let price;
  let sizeSelect = "10oz";
  const sizes = ["10oz", "2lbs", "5lbs"];
  let quantity = 1;
  let actualQuantity = 1;
  // Validate quantity input
  $: quantity =
    quantity == null
      ? (actualQuantity = null && quantity)
      : /^[^0]\d{0,2}$/.test(String(quantity))
      ? (actualQuantity = quantity && quantity)
      : actualQuantity;
</script>

<style>
  /* select hydrated component self div */
  :global(.coffeeprofilebuy) {
    width: 100%;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
    place-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  .select p,
  .select button {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0;
  }
  .select p {
    margin-right: auto;
  }
  .select button {
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

  /* remove input number arrows */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .quantity {
    display: flex;
    flex-direction: row;
    place-items: center;
    height: 2rem;
    width: 5rem;
  }
  .quantity input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
  }
  .quantity button {
    font-size: 1.2rem;
    padding: 0 0.5rem;
    width: 3rem;
    height: 100%;
    border: none;
    background: white;
    outline: none;
    cursor: pointer;
  }
</style>

<div class="select">
  <p>Size</p>
  {#each sizes as size}
    <button
      class:selected={sizeSelect == size}
      on:click={() => (sizeSelect = size)}>{size}</button>
  {/each}
</div>

<p class="price">{price}</p>

<div>
  <div class="quantity">
    <button
      on:click={() => (quantity = quantity > 0 && quantity - 1)}>-</button>
    <input type="number" bind:value={quantity} />
    <button on:click={() => (quantity = Number(quantity) + 1)}>+</button>
  </div>
  <button>Add To Cart</button>
</div>
