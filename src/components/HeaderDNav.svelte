<<<<<<< HEAD
<script>
  export let slug;
  slug = slug.split("/")[1]; // remove all slashes and get first valid route name
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
    a {
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
  }
</style>

<nav>
  <a href="/beans/" class:curpath={'beans' == slug}>Beans</a>
  <a href="/brew-guides/" class:curpath={'brew-guides' == slug}>Brew Guides</a>
  <a href="/about/" class:curpath={'about' == slug}>About</a>
  <a href="/cart/" class:curpath={'cart' == slug}>Cart</a>
  <a href="/login/" class:curpath={'login' == slug}>Login</a>
</nav>
=======
<script>
  export let permalink;
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
    a {
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
  }
</style>

<nav>
  <a href="/beans/" class:curpath={'beans' == permalink}>Beans</a>
  <a href="/brew-guides/" class:curpath={'brew-guides' == permalink}>Brew Guides</a>
  <a href="/about/" class:curpath={'about' == permalink}>About</a>
  <a href="/cart/" class:curpath={'cart' == permalink}>Cart</a>
  <a href="/login/" class:curpath={'login' == permalink}>Login</a>
</nav>
>>>>>>> b7320c52562ac3f7aeee4d2a02ce851bdc08b27c
