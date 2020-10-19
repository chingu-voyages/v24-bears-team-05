<!-- Layout is for any layout components like Nav. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  /* main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  } */
</style>

<Nav />
<slot />
