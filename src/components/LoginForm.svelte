<script>
  let email;
  let password;
  let logIn = true;

  async function submitHandler() {
    // Fetch from serverless func that will log the user in.
    var res = await fetch(
      `/.netlify/functions/${logIn ? "login" : "register"}`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  }
</script>

<style>
  section {
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

  .switch {
    display: flex;
  }
  .switch button {
    border: none;
    background: none;
  }
  .switch .active {
    border-bottom: 2px solid black;
  }
</style>

<section>
  <div class="switch">
    <button class:active={!logIn} on:click={() => (logIn = false)}>Sign up</button>
    <button class:active={logIn} on:click={() => (logIn = true)}>Log in</button>
  </div>

  <form on:submit|preventDefault={submitHandler}>
    <input
      type="email"
      name="email"
      required
      pattern=".+@.+.com"
      maxlength="20"
      bind:value={email}
      placeholder="Email" />

    <input
      type="password"
      required
      maxlength="30"
      bind:value={password}
      placeholder="Password" />

    <button type="submit">{logIn ? 'Log in' : 'Sign up'}</button>
  </form>
</section>
