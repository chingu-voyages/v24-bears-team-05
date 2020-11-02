<script>
  import LoginForm from "../../components/LoginForm.svelte";
</script>

<style>
  main {
    margin-top: 3.5rem;
  }

  h2 {
    text-align: center;
    margin: 10rem auto 0 auto;
  }
</style>

<svelte:head>
  <title>Bear Coffee Login</title>
</svelte:head>

<main>
  <h2>Join us to discover your new obsession<br />☕</h2>
  <LoginForm hydrate-client={{}} />
</main>
