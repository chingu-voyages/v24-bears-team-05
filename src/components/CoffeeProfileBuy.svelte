<script>
  import { cart } from "../stores/cartStore";
  import { toast } from "../stores/toastStore";
  import Toast from "./Toast.svelte";
  export let id;
  export let name;
  export let type;
  export let prices;
  let sizeSelect = "10oz";
  const sizes = ["10oz", "2lbs", "5lbs"];
  let quantity = 1;
  let actualQuantity = 1;

  // Validate quantity input
  $: quantity =
    quantity == null
      ? (actualQuantity = null && quantity)
      : quantity > 0 && quantity < 1000
      ? (actualQuantity = quantity && quantity)
      : actualQuantity;

  function addToCart() {
    cart.addToCart({
      id,
      name,
      type,
      size: sizeSelect,
      price: prices[sizeSelect],
      quantity: actualQuantity,
    });
  }
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
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 2.2rem;
    text-align: right;
    margin-top: 0;
    margin-bottom: 1rem;
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
    margin-bottom: 0;
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
  .cart-add {
    display: flex;
    place-content: space-between;
    align-items: center;
  }
  .cart-add-btn {
    white-space: nowrap;
    background: white;
    border: none;
    height: 2rem;
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  /* Desktop */
  @media (min-width: 720px) {
    .quantity {
      margin-right: 1rem;
    }
    .cart-add {
      place-content: flex-end;
    }
    .select p {
      margin-right: unset;
    }
  }
</style>

<Toast />

<div class="select">
  <p>Size</p>
  {#each sizes as size}
    <button
      class:selected={sizeSelect == size}
      on:click={() => (sizeSelect = size)}>{size}</button>
  {/each}
</div>

<p class="price">${prices[sizeSelect] * 0.01}</p>

<div class="cart-add">
  <div class="quantity">
    <button
      on:click={() => (quantity = quantity > 0 && quantity - 1)}>-</button>
    <input type="number" bind:value={quantity} />
    <button on:click={() => (quantity = Number(quantity) + 1)}>+</button>
  </div>
  <button
    class="cart-add-btn"
    on:click={() => {
      addToCart();
      toast.setToast(`You added ${quantity > 1 ? quantity + ' packs' : 'a pack'} of ${type} (${sizeSelect}) to your cart!`);
    }}>Add To Cart</button>
</div>
