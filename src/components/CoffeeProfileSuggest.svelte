<script>
  import Pict from "./Pict.svelte";
</script>

<style>
  section {
    display: flex;
    flex-flow: column;
    place-items: center;
    max-width: 24rem;
    width: 90%;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.2rem;
    text-align: center;
  }
  article {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 1.5rem;
    padding-bottom: 0;
    margin-bottom: 3.5rem;
    min-width: 10rem;
    width: 100%;
  }
  .link-wrapper {
    text-decoration: none;
    display: flex;
    flex-flow: column;
    place-items: center;
  }
  article img {
    max-width: 11em;
    margin-bottom: 1rem;
  }
  article h2 {
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
  }
  .price {
    align-self: flex-end;
    margin-right: -0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Desktop */
  @media (min-width: 720px) {
    article {
      width: 20rem;
    }

    section {
      display: grid;
      column-gap: 3rem;
      margin: 0 auto;
      max-width: 50rem;
      place-content: center;
    }
    h2 {
      grid-column: 1/3;
    }
    br {
      display: none;
    }
  }
</style>

<section>
  <h2>You May Be <br />Interested In These</h2>
  <article style="background-color: hsl(57,87%,68%,0.5);">
    <a class="link-wrapper" href="/beans/tucan-ethiopia-ethiopia_raro">
      <Pict path="/images/coffees/tucan-ethiopia-ethiopia_raro" let:props>
        <img alt="Tucan" {...props} />
      </Pict>
      <h2>Tucan — Ethiopia</h2>
      <h2>Ethiopia Raro</h2>
    </a>
    <h2 class="price">$22</h2>
  </article>
  <article style="background-color: hsl(191,35%,50%,0.5);">
    <a class="link-wrapper" href="/beans/tucan-mexico-paraiso_mexicano">
      <Pict path="/images/coffees/tucan-mexico-paraiso_mexicano" let:props>
        <img alt="Tucan" {...props} />
      </Pict>
      <h2>Tucan — Mexico</h2>
      <h2>Paraiso Mexicano</h2>
    </a>
    <h2 class="price">$20</h2>
  </article>
</section>
