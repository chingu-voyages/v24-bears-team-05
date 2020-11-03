<style>
  footer {
    display: flex;
    flex-flow: column;
    place-items: center;
    margin-bottom: 3rem;
  }

  .social h2 {
    text-align: center;
  }
  .social-icons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    width: 10rem;
  }

  .logo {
    font-family: "Killarney";
    text-decoration: none;
    text-align: center;
    line-height: 80%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    user-select: none;
  }

  .d-col {
    display: none;
  }
  /* Desktop dimensions */
  @media (min-width: 720px) {
    footer {
      flex-flow: row nowrap;
      place-content: space-between;
    }
    nav,
    footer {
      display: flex;
    }
    nav {
      width: 90%;
      max-width: 70rem;
      justify-content: space-around;
    }
    .d-col,
    .social {
      display: flex;
      flex-flow: column;
    }
    .d-col a {
      text-decoration: none;
      color: lightslategray;
      margin-bottom: 1rem;
    }
    .d-col a:hover {
      color: #222;
    }
    .social-icons {
      flex-flow: row wrap;
      width: 4rem;
    }
    .social-icons img {
      margin-bottom: 1rem;
    }
    .logo {
      place-self: flex-end;
      margin: 0 2rem 2rem 0;
      padding: 0;
    }
  }
</style>

<footer>
  <nav>
    <div class="d-col">
      <h2>Beans</h2>
      <a href="/coffee">Coffee</a>
      <a href="/roasters">Roasters</a>
    </div>
    <div class="d-col">
      <h2>Brew Guides</h2>
      <a href="/brew-guides/chemex">Chemex</a>
      <a href="/brew-guides/aeropress">Aeropress</a>
      <a href="/brew-guides/pourover">Pour Over</a>
    </div>
    <div class="d-col">
      <h2>About</h2>
      <a href="/faq">FAQ</a>
      <a href="/about">About Us</a>
    </div>
    <div class="social">
      <h2>Brew With Us</h2>
      <div class="social-icons">
        <img src="/images/footer/facebook.svg" alt="Facebook" />
        <img src="/images/footer/instagram.svg" alt="Instagram" />
        <img src="/images/footer/twitter.svg" alt="Twitter" />
        <img src="/images/footer/youtube.svg" alt="YouTube" />
      </div>
    </div>
  </nav>

  <h2 class="logo">Bear<br />Coffee</h2>
</footer>
