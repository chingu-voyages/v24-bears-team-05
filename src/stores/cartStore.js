import { writable } from "svelte/store";

function createCart() {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
    storedCart = JSON.parse(storedCart);
  } else {
    localStorage.setItem("cart", "{}");
    storedCart = {};
  }

  const { subscribe, set, update } = writable(storedCart);

  return {
    subscribe,
    add: (product) => update((o) => ({ ...o, product })),
    clear: () => set({}),
  };
}

export const cart = createCart();
