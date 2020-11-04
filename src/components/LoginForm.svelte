<script>
  let user;
  let pass;

  async function submitHandler() {
    // TODO: Fetch from serverless func that will log the user in.
  }
</script>

<style>
  form {
    display: grid;
    place-items: center;
    padding: 1rem;
  }

  input {
    appearance: none;
    border: 1px solid #959f9f;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px transparent inset;
    font-style: normal;
    height: 2.5em;
    line-height: 2.5em;
    margin: 0;
    max-width: 100%;
    text-indent: 10px;
    transition: 0.3s border-color, 0.3s background, 0.3s box-shadow;
    margin-bottom: 1rem;
  }
  input:hover {
    border-color: #4178be;
    box-shadow: 0 0 0 1px #4178be inset;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline-width: 1px;
    outline-style: solid;
    outline-color: #4178be;
    outline-offset: -1px;
  }

  div[role="dialog"] {
    display: flex;
  }
</style>

<div role="dialog"><button>Sign up</button> <button>Log in</button></div>

<form on:submit={submitHandler}>
  <input
    type="email"
    name="email"
    required
    pattern=".+@.+.com"
    maxlength="20"
    bind:value={user}
    placeholder="Email" />

  <label>
    <input
      type="password"
      required
      maxlength="30"
      bind:value={pass}
      placeholder="Password" />
  </label>

  <button type="submit">Log in</button>
</form>
