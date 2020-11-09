<script>
  import { onMount } from "svelte";
  import { cart } from "../stores/cartStore";
  import Pict from "./Pict.svelte";
  import { loadStripe } from "@stripe/stripe-js";

  let stripePromise;

  onMount(() => {
    cart.init();
    stripePromise = loadStripe(
      "pk_test_51HgDAnDSctq7YxjT8ovDUDZvtkcvYmkvPYHeXriUXvwXDiDLArMmdNfbG81M1ZlZsLkRBCqccsyMtsmtD3LFOA5600vHuzDfpO"
    );
  });
  $: subtotal = formatPrice(
    $cart.reduce((acc, { quantity, price }) => quantity * price + acc, 0) ?? 0
  );
  function formatPrice(price) {
    return (price / 100).toFixed(2);
  }
  async function checkoutHandler() {
    const stripe = await stripePromise;
    const checkoutItems = $cart.map(({ id, size, quantity }) => ({
      id,
      size,
      quantity,
    }));

    const res = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ checkoutItems }),
    });
    const session = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Do stuff to indicate an error on client browser/network failure.
    }
  }
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
    font-family: var(--secondary-font);
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

  .item {
    display: flex;
    margin-top: 1rem;
    justify-content: space-evenly;
  }
  .item img {
    width: clamp(5rem, 24%, 8rem);
    object-fit: contain;
  }
  .item-col-2 {
    flex: 0 1 10rem;
  }

  .size {
    font-family: var(--secondary-font);
  }

  hr {
    background-color: #eee;
    height: 1px;
    margin-top: 1rem;
    border: none;
  }

  .quantity {
    display: flex;
    place-items: center;
    place-content: center;
    background-color: white;
    border: 1px solid #ececec;
    width: 5rem;
  }
  .quantity .less,
  .quantity .more {
    background: none;
    outline: none;
    border-left: 1px solid #ececec;
    -webkit-user-select: none;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    float: left;
    display: block;
    width: 35px;
    height: 35px;
    font-size: 20px;
    color: #aaa;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .remove {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 1rem 0;
  }

  .checkout-area {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 1rem 0;
    margin-top: auto;
    border-top: 1px solid #eee;
  }
  .subtotal {
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: 300;
  }
  .checkout {
    width: 200px;
    font-family: var(--secondary-font);
    font-size: 100%;
    padding: 1rem;
  }

  .items-container {
    overflow-y: auto;
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
  <p class="price">
    {$cart.reduce((acc, i) => acc + i.quantity, 0) ?? 0}
    items - ${subtotal}
  </p>
</div>

{#if $cart.length}
  <div class="items-container">
    {#each $cart as { id, name, type, size, price, quantity }}
      <div class="item">
        <Pict path="/images/coffees/{name}" let:props>
          <img alt={type} {...props} />
        </Pict>
        <div class="item-col-2">
          <h3 class="type">{type}</h3>
          <h3 class="size">{size}</h3>
          <div class="quantity">
            <button
              class="less"
              on:click={() => {
                if (quantity != 1) cart.updateQuantity(id, size, quantity - 1);
                else cart.remove(id, size);
              }}>-</button>
            <span class="amount">{quantity}</span>
            <button
              class="more"
              on:click={() => quantity < 999 && cart.updateQuantity(id, size, quantity + 1)}>+</button>
          </div>
          <button class="remove" on:click={() => cart.remove(id, size)}>REMOVE X</button>
          <h3 class="price">${formatPrice(price * quantity)}</h3>
        </div>
      </div>
      <hr />
    {/each}
  </div>
  <div class="checkout-area">
    <h3 class="subtotal">Subtotal<br /><strong>${subtotal}</strong></h3>
    <button role="link" class="checkout" on:click={checkoutHandler}>CHECK OUT
      NOW</button>
  </div>
{:else}
  <div class="empty">
    <h3>Your Cart Is Empty</h3>
    <p>There's only one solution.</p>
    <a href="/beans">Shop Beans</a>
  </div>
{/if}
