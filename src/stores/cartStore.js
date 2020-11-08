import { writable } from "svelte/store";

function createCart() {
  const { subscribe, set, update } = writable({});

  return {
    add: (product) =>
      update(() => {
        let products = localStorage.getItem("cart");
        if (products) products = JSON.parse(products);
        else products = {};
        let data = { ...products, product };
        localStorage.setItem("cart", JSON.stringify(data));
        return data;
      }),
    init() {
      // used in Cart to initialize the Store from localStorage onMount, not possible within store
      var data = localStorage.getItem("cart");
      if (data) set(JSON.parse(data));
      else {
        localStorage.setItem("cart", "{}");
        set({});
      }
    },
    clear: () => set({}),
    subscribe,
  };
}

export const cart = createCart();
