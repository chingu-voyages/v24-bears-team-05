<script>
  import { onMount } from "svelte";
  import Pict from "./Pict.svelte";
  onMount(() => localStorage.setItem("cart", JSON.stringify({ products: [] })));
</script>

<style>
  img {
    max-width: 100%;
    margin-top: 3rem;
  }
</style>

<Pict path="/images/success/burrito_dog" let:props>
  <img alt="Burrito Dog" {...props} />
</Pict>
