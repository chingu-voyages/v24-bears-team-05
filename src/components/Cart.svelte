<script>
  import CartItem from "./CartItem.svelte";
  import { onMount } from "svelte";

  let cartItems = [];

  onMount(async () => {
    cartItems = [...JSON.parse(localStorage.getItem("session"))];
    cartItems.forEach((element) => {
      const removed_$_sign = element.price.replace("$", "");
      element.price = removed_$_sign;
    });
  });

  $: totalCost = cartItems.length
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;
  $: console.log("total cost", totalCost);
</script>

<style>
  .header {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #eee;
    align-items: center;
  }

  .header p {
    line-height: 1;
  }
  .title {
    font-size: 1.2rem;
  }
  .price {
    font-size: 1rem;
    font-weight: 500;
  }

  .checkout,
  .empty a {
    max-width: 70%;
    border: none;
    background-color: #222;
    color: white;
  }

  .cart {
    display: grid;
    place-items: center;
  }

  /* empty cart styles */
  .empty {
    margin: auto auto;
    text-align: center;
  }
  .empty h3 {
    font-size: 2rem;
  }
  .empty h3,
  .empty p {
    line-height: 1;
    margin: 0;
  }
  .empty p {
    margin-bottom: 2rem;
  }
  .empty a {
    width: 15rem;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.4rem 5rem;
    white-space: nowrap;
  }
</style>

<div class="header">
  <p class="title">YOUR CART</p>
  <p class="price">0 items - $0.00</p>
</div>
{#if cartItems.length}
  <div class="cart">
    {#each cartItems as item}
      <CartItem {item} />
    {/each}
    <div class="checkout-area">
      <h3>Subtotal: ${totalCost}</h3>
      <h3>Shipping: $</h3>
      <button class="checkout"><p>CHECK OUT NOW</p></button>
    </div>
  </div>
{:else}
  <div class="empty">
    <h3>Your Cart Is Empty</h3>
    <p>There's only one solution.</p>
    <a href="/beans">Shop Beans</a>
  </div>
{/if}
