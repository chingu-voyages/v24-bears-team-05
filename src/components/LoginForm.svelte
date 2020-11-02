<script>
  let user;
  let pass;

  async function submitHandler() {
    // TODO: Fetch from serverless func that will log the user in.
  }
</script>

<form on:submit={submitHandler}>
  <input type="text" bind:value={user} placeholder="Email" />
  <input type="password" bind:value={pass} placeholder="Password" />
</form>
