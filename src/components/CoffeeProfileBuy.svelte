<script>
  export let price;
  export let name;
  export let src;
  export let roastProfile;
  let sizeSelect = "10oz";
  const sizes = ["10oz", "2lbs", "5lbs"];
  let quantity = 1;
  let actualQuantity = 1;

  /* get size data, get quantity, and  get price for the product
    at the end, on click btn add new item  to user's cart. 
      -create an object whos property values are equal to the value of size, quantity , price, name
        -- if 
      - push created object to localStorage array
      */

  // Validate quantity input
  $: quantity =
    quantity == null
      ? (actualQuantity = null && quantity)
      : quantity > 0 && quantity < 1000
      ? (actualQuantity = quantity && quantity)
      : actualQuantity;

  let itemsInCart = [];

  const addToCart = () => {
    let newItem = {
      name,
      roastProfile,
      src,
      price,
      quantity,
      sizeSelect,
    };
    console.log(newItem);
    itemsInCart = [...(JSON.parse(localStorage.getItem("session")) || [])];
    const itemInCart = itemsInCart.find(
      (item) => item.roastProfile === newItem.roastProfile
    );

    if (itemInCart) {
      var updatedItemsInCart = itemsInCart.map((item) => {
        const updateItems =
          item.roastProfile === itemInCart.roastProfile
            ? { ...itemInCart, quantity: item.quantity + newItem.quantity }
            : { ...item };
        return updateItems;
      });
      localStorage.setItem("session", JSON.stringify(updatedItemsInCart));
    } else {
      itemsInCart.push(newItem);
      localStorage.setItem("session", JSON.stringify(itemsInCart));
    }
    console.log(JSON.parse(localStorage.getItem("session")));
  };
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
    font-family: Killarney;
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

<div class="select">
  <p>Size</p>
  {#each sizes as size}
    <button
      class:selected={sizeSelect == size}
      on:click={() => (sizeSelect = size)}>{size}</button>
  {/each}
</div>

<p class="price">{price}</p>

<div class="cart-add">
  <div class="quantity">
    <button
      on:click={() => (quantity = quantity > 0 && quantity - 1)}>-</button>
    <input type="number" bind:value={quantity} />
    <button on:click={() => (quantity = Number(quantity) + 1)}>+</button>
  </div>
  <button class="cart-add-btn" on:click={addToCart}>Add To Cart</button>
</div>
