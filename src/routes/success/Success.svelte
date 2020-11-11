<script>
  import UseSuccess from "../../components/UseSuccess.svelte";
</script>

<style>
  section {
    margin-top: 3.5rem;
    display: grid;
    place-items: center;
    padding: 2rem;
  }
  h1,
  p {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Bear Coffee | Great Success!</title>
</svelte:head>

<section>
  <h1>Great Success!</h1>
  <p>Thanks for your order!</p>
  <UseSuccess hydrate-client={{}} />
</section>
