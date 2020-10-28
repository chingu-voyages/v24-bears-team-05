<script>
  export let slug;
</script>

<style>
  nav {
    display: none;
  }
  /* Desktop dimensions */
  @media (min-width: 720px) {
    nav {
      display: block;
      margin: auto 2rem;
      margin-left: auto;
    }
    a {
      font-family: Killarney;
      font-size: 1.5rem;
      text-decoration: none;
      margin-left: 3rem;
      text-align: center;
    }
    .curpath {
      /* padding-left: 0.3rem;
      padding-right: 0.3rem; */
      transition: border 1s linear 300ms;
      border-bottom: 3px solid #222;
    }
  }
</style>

<nav>
  <a href="/beans" class:curpath={'/beans' == slug}>Beans</a>
  <a href="/brew-guides" class:curpath={'/brew-guides' == slug}>Brew Guides</a>
  <a href="/about" class:curpath={'/about' == slug}>About</a>
  <a href="/cart" class:curpath={'/cart' == slug}>Cart</a>
  <a href="/login" class:curpath={'/login' == slug}>Login</a>
</nav>
