import { writable } from "svelte/store";

function createCart() {
  const { subscribe, set, update } = writable({});

  return {
    add: (product) =>
      update((o) => {
        let data = { ...o, product };
        localStorage.setItem("cart", JSON.stringify(data));
        return data;
      }),
    init() {
      // used in Header to initialize the Store from localStorage onMount, not possible within store
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
