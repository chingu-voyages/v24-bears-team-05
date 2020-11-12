<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { cart } from "../stores/cartStore";
  import Pict from "./Pict.svelte";
  import { fade, slide } from "svelte/transition";
  import CubeSpinner from "./CubeSpinner.svelte";

  const dispatch = createEventDispatcher();

  let stripeReady;
  let stripePromise = new Promise((res) => (stripeReady = res));
  onMount(() => {
    cart.init();
    if (window.Stripe) {
      stripeReady();
    } else {
      affixScriptToHead("https://js.stripe.com/v3/", stripeReady);
    }

    function affixScriptToHead(url, onloadFunction) {
      var newScript = document.createElement("script");
      newScript.setAttribute("defer", "");
      if (onloadFunction) {
        newScript.onload = onloadFunction;
      }
      document.head.appendChild(newScript);
      newScript.src = url;
    }
  });
  $: subtotal = formatPrice(
    $cart.reduce((acc, { quantity, price }) => quantity * price + acc, 0) || 0
  );
  function formatPrice(price) {
    return (price / 100).toFixed(2);
  }
  async function checkoutHandler() {
    isLoading = true;
    await stripePromise;
    const stripe = await window.Stripe(
      "pk_test_51HgDAnDSctq7YxjT8ovDUDZvtkcvYmkvPYHeXriUXvwXDiDLArMmdNfbG81M1ZlZsLkRBCqccsyMtsmtD3LFOA5600vHuzDfpO"
    );
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
    isLoading = false;
    if (result.error) {
      // Do stuff to indicate an error on client browser/network failure.
    }
  }

  let isLoading = process.env.componentType === "server";
  let ready = true;
</script>

<style>
  .header {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #eee;
    align-items: center;
    margin-bottom: 1rem;
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
    margin: 1rem auto;
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

  .d {
    display: none;
  }
  /* Desktop */
  @media (min-width: 720px) {
    .d {
      display: block;
    }
    .header {
      justify-content: space-between;
    }
    .header p {
      margin: 1.1rem;
    }
    .x-btn {
      cursor: pointer;
      border: none;
      background: none;
    }
  }
</style>

<div class="header">
  <p class="title">YOUR CART</p>
  <p class="price">
    {$cart.reduce((acc, i) => acc + i.quantity, 0) || 0}
    items - ${subtotal}
  </p>
  <button class="d x-btn" on:click={() => dispatch('close')}>
    <!-- prettier-ignore -->
    <svg class="feather feather-x" in:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  </button>
</div>

{#if $cart.length}
  <div class="items-container">
    {#each $cart as { id, name, type, size, price, quantity } (`${id}${size}`)}
      <div
        transition:slide={{ duration: 250 }}
        on:outrostart={() => (ready = false)}
        on:outroend={() => (ready = true)}>
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
            <button class="remove" on:click={() => cart.remove(id, size)}>REMOVE
              X</button>
            <h3 class="price">${formatPrice(price * quantity)}</h3>
          </div>
        </div>
        <hr />
      </div>
    {/each}
  </div>
  <div class="checkout-area" out:fade={{ duration: 250 }}>
    {#if isLoading}
      <CubeSpinner />
    {/if}
    <h3 class="subtotal">Subtotal<br /><strong>${subtotal}</strong></h3>
    <button role="link" class="checkout" on:click={checkoutHandler}>CHECK OUT
      NOW</button>
  </div>
{:else if ready}
  <div class="empty" in:fade={{ duration: 500 }}>
    <h3>Your Cart Is Empty</h3>
    <p>There's only one solution.</p>
    <a href="/beans">Shop Beans</a>
  </div>
{/if}
