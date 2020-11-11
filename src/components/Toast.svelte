<script>
  import { fly } from "svelte/transition";
  import { toast } from "../stores/toastStore";
</script>

<style>
  .toast {
    border: 0.3rem solid #222;
    border-radius: 0.5rem;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 3rem;
    width: fit-content;
    background-color: white;
    display: grid;
    place-items: center;
    max-width: 90%;
  }
  h2 {
    text-align: center;
    margin: 0.5rem;
  }
</style>

{#if $toast.isOpen}
  <div class="toast" transition:fly={{ duration: 250, y: 250 }}>
    <h2>{$toast.msg || "You're toast!"}</h2>
  </div>
{/if}
