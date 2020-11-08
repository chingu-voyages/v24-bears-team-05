import { writable } from "svelte/store";

function createCart() {
  const { subscribe, set } = writable([]);

  function setCart(products = []) {
    // expects an arr of products
    set(products);
    localStorage.setItem("cart", JSON.stringify({ products }));
  }

  return {
    addToCart({ id, name, type, size, price, quantity }) {
      let data = localStorage.getItem("cart");
      let products = data ? JSON.parse(data).products : [];

      let productIndex = products.findIndex(
        (v) => v.id == id && v.size == size
      );
      if (productIndex != -1) {
        // product & size exists, update quantity
        products[productIndex].quantity += quantity;
      } else {
        products.unshift({
          id,
          name,
          type,
          size,
          price,
          quantity,
        });
      }

      setCart(products);
    },
    init() {
      // used in Cart to initialize the Store from localStorage onMount, not possible within store
      var data = localStorage.getItem("cart");
      if (data) set(JSON.parse(data).products);
      else setCart();
    },
    subscribe,
  };
}

export const cart = createCart();
