<script>
  import LoginForm from "../../components/LoginForm.svelte";
</script>

<style>
  main {
    margin-top: 3.5rem;
  }

  h2,
  h3 {
    text-align: center;
    margin: 10rem auto 0 auto;
  }
  h3 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
</style>

<svelte:head>
  <title>Bear Coffee Login</title>
</svelte:head>

<main>
  <h2>Join us to discover<br />your new obsession</h2>
  <h3>☕</h3>
  <LoginForm hydrate-client={{}} />
</main>
