import { writable } from "svelte/store";
import { sleep } from "../utils/utils";

function createToast() {
  const { subscribe, set } = writable({ msg: "", isOpen: false });

  return {
    setToast: async function setToast(msg, delay = 3000) {
      set({ msg, isOpen: true });
      await sleep(delay);
      set({ msg: "", isOpen: false });
    },
    subscribe,
  };
}

export const toast = createToast();
