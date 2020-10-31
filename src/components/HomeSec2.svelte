<style>
  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: left;
    font-size: 2.3rem;
    line-height: 95%;
  }
  article {
    max-width: 90%;
    width: 410px;
    padding: 0 1rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  a {
    background: none;
    border: 3px solid #222;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-family: Killarney;
    font-weight: 400;
    padding: 0.4rem 0.5rem;
    cursor: pointer;
    text-decoration: none;
  }

  img {
    max-width: 410px;
    width: 100%;
  }

  /* Desktop dimensions */
  @media (min-width: 720px) {
    br {
      display: none;
    }
    section {
      display: grid;
      grid-template-areas: "img article";
      justify-content: center;
      gap: 2rem;
      padding-left: 1rem;
      margin-bottom: 5rem;
    }
    h2 {
      font-size: 3rem;
    }
    article {
      grid-area: article;
      margin-bottom: 0;
      width: 34rem;
      display: flex;
      flex-flow: column;
      place-items: center;
    }
    img {
      grid-area: img;
      height: 100%;
      max-width: 90%;
      width: 33rem;
      object-fit: cover;
    }
    h2,
    p,
    a {
      text-align: center;
    }
    a {
      border: 4px solid #222;
      padding: 0.4rem 1.5rem;
    }
  }
</style>

<section>
  <article>
    <h2>Small Roasts.<br /> Big Impact.</h2>
    <p>
      Each batch of coffee is roasted with the intent of creating a connection.
      We recognize the hands that harvested the beans and the consumer who
      enjoys their morning cup. We respect and value everyone in the process.
    </p>
    <a href="/beans">Shop Our Beans</a>
  </article>

  <img src="/images/home/action_coffee.jpg" alt="Pouring Coffee" />
</section>
