<script>
  export let permalink;
  export let cartHandler;
  permalink = permalink.split("/").filter(Boolean)[0]; // get arr of current path names
</script>

<style>
  nav {
    display: none;
  }
  /* Desktop dimensions */
  @media (min-width: 720px) {
    nav {
      display: block;
      white-space: nowrap;
      margin: auto 2rem;
      margin-left: auto;
    }
    a,
    .cart-btn {
      font-family: Killarney;
      font-size: 1.5rem;
      text-decoration: none;
      margin-left: 3rem;
      text-align: center;
      padding-bottom: 0.77rem;
      transition: border-color 0.25s;
      border-bottom: 3px solid transparent;
    }
    a:hover,
    .curpath {
      padding-bottom: 0.77rem;
      border-bottom: 3px solid #222;
    }
    .cart-btn {
      background: none;
      padding: 0;
      border: none;
      cursor: pointer;
    }
  }
</style>

<nav>
  <a href="/beans/" class:curpath={'beans' == permalink}>Beans</a>
  <a href="/brew-guides/" class:curpath={'brew-guides' == permalink}>Brew Guides</a>
  <a href="/about/" class:curpath={'about' == permalink}>About</a>
  <span> <button class="cart-btn" on:click={cartHandler}>Cart</button> </span>
  <a href="/login/" class:curpath={'login' == permalink}>Login</a>
</nav>
