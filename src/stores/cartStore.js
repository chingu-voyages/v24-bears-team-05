import { writable } from "svelte/store";

function createCart() {
  const { subscribe, set } = writable([]);

  function setCart(products = []) {
    // expects an arr of products
    set(products);
    localStorage.setItem("cart", JSON.stringify({ products }));
  }
  function getCart() {
    let data = localStorage.getItem("cart");
    return data ? JSON.parse(data).products : [];
  }
  return {
    addToCart({ id, name, type, size, price, quantity }) {
      let products = getCart();
      let productIndex = products.findIndex(
        (v) => v.id == id && v.size == size
      );
      if (productIndex != -1) {
        // product & size exists, update quantity
        if (products[productIndex].quantity + quantity < 999) {
          products[productIndex].quantity += quantity;
        }
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
    remove(id, size) {
      // Handler used in Cart only
      let products = getCart();
      products.splice(
        products.findIndex((v) => v.id == id && v.size == size),
        1
      );
      setCart(products);
    },
    updateQuantity(id, size, quantity) {
      let products = getCart();
      let productIndex = products.findIndex(
        (v) => v.id == id && v.size == size
      );
      products[productIndex].quantity = quantity;
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
