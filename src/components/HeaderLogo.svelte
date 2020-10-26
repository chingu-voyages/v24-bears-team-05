<script>
  import { onMount } from "svelte";
  let isHome;
  onMount(() => (isHome = location.pathname == "/"));
</script>

<style>
  .logo {
    font-family: "Killarney";
    text-decoration: none;
    text-align: center;
    line-height: 80%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    user-select: none;
    display: flex;
  }
</style>

<a class="logo" href={!isHome ? '/' : null}> Bear<br />Coffee </a>
