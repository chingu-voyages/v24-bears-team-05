<script>
  import Pict from "./Pict.svelte";
</script>

<style>
  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0;
  }
  h1 {
    margin-top: 1rem;
    margin-bottom: 3.5rem;
    text-align: center;
    font-size: 3rem;
    line-height: 95%;
  }

  .subscribe {
    font-size: 2.2rem;
    text-align: center;
    max-width: 12rem;
    margin-bottom: 3rem;
    text-decoration: none;
    font-family: var(--primary-font);
    line-height: 1.2;
  }
  div {
    position: relative;
    width: calc(100% + 2rem);
    display: flex;
    justify-content: center;
    height: 28rem;
    overflow: hidden;
  }
  div img {
    position: absolute;
    max-height: 20rem;
  }
  img {
    display: inline-block;
  }
  .beans {
    width: 18rem;
  }
  .bear,
  .geckos,
  .tucan {
    margin-top: 9.5rem;
    height: 16.5rem;
  }
  .geckos,
  .tucan {
    max-width: 54%;
    margin-top: 9.5rem;
  }
  .geckos {
    margin-right: 16.5rem;
    transform: rotate(7.67deg);
  }
  .tucan {
    margin-left: 16.5rem;
    transform: rotate(-7.67deg);
  }

  /* Desktop dimensions */
  .d {
    display: none;
  }
  @media (min-width: 720px) {
    .m {
      display: none;
    }
    .d {
      display: block;
    }
    span.d {
      display: inline;
    }
    h1 {
      font-size: 6rem;
      margin-bottom: 1rem;
      z-index: 2;
      text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
    }

    a.d {
      font-family: var(--primary-font);
      border: 4px solid #222;
      border-radius: 0.5rem;
      background: none;
      font-size: 1.5rem;
      padding: 0.2rem 1.5rem;
      text-decoration: none;
      z-index: 2;
      white-space: nowrap;
      text-align: center;
    }

    section {
      margin-bottom: 2rem;
      padding: 1rem 0;
    }

    div {
      display: grid;
      position: static;
      height: auto;
      overflow: visible;
      width: 100%;
    }
    .d img {
      position: static;
      max-height: none;
      width: 100%;
    }

    .row {
      display: flex;
    }
    .img-grid {
      width: 100%;
      display: grid;
      justify-content: start;
      margin-top: -20%;
    }
    .img-grid:nth-child(2) {
      place-items: flex-end;
      place-content: flex-end;
    }
    .d img {
      grid-area: 2/1/2;
      width: 33%;
      z-index: 1;
    }

    .left-grid picture:first-child img {
      transform: rotate(-10.28deg);
      width: 42%;
      margin-left: -15%;
    }
    .left-grid picture:nth-child(2) img {
      margin-top: 17%;
      margin-left: 46%;
      transform: rotate(21.48deg);
      width: 34%;
    }
    .d picture:nth-child(3) img {
      grid-area: 1;
      width: 48%;
      margin-left: -7%;
    }
    .left-grid picture:nth-child(4) img {
      width: 58%;
      margin-left: 8%;
      margin-top: -7%;
    }
    .left-grid picture:last-child img {
      margin-left: 17%;
      width: 38%;
      margin-top: 13%;
    }

    .right-grid {
      overflow: hidden;
    }
    .right-grid picture:first-child img {
      transform: rotate(-21.74deg);
      margin-right: 49%;
      margin-bottom: 1%;
      width: 38%;
    }
    .right-grid picture:nth-child(2) img {
      transform: rotate(19.66deg);
      margin-bottom: 1%;
      margin-right: -10%;
      width: 38%;
    }
    .right-grid picture:nth-child(3) img {
      transform: rotate(150deg);
      width: 44%;
    }
    .right-grid picture:nth-child(4) img {
      width: 59%;
      margin-right: 9%;
      margin-bottom: 14%;
    }
    .right-grid picture:last-child img {
      width: 40%;
      margin-right: 17%;
      margin-top: 12%;
    }
  }
</style>

<section>
  <h1>
    <span class="d">Choose</span><span class="m">Find</span>
    Your Next<br />Favorite Brew
  </h1>
  <a href="/beans" class="m subscribe">Subscribe to Save 15%</a>
  <div class="m">
    <Pict path="/images/coffees/tucan-mexico-paraiso_mexicano" let:props>
      <img class="tucan" alt="Tucan Coffee Bag" {...props} />
    </Pict>
    <Pict path="/images/coffees/geckos-ethiopia-bensa_shantawene" let:props>
      <img class="geckos" alt="Geckos Coffee Bag" {...props} />
    </Pict>
    <Pict path="/images/home/beans" let:props>
      <img alt="Coffee beans" class="beans" {...props} />
    </Pict>
    <Pict path="/images/coffees/bear-peru-la_tierra" let:props>
      <img alt="Bear Coffee Bag" class="bear" {...props} />
    </Pict>
  </div>
  <a class="d" href="/beans">Get Matched</a>
  <div class="d row">
    <div class="d img-grid left-grid">
      <Pict path="/images/coffees/bear-mexico-chiapas" let:props>
        <img alt="" {...props} />
      </Pict>
      <Pict path="/images/coffees/geckos-rwanda-nyaruguru" let:props>
        <img alt="" {...props} />
      </Pict>
      <Pict path="/images/home/beans" let:props>
        <img alt="Top bean" {...props} />
      </Pict>
      <Pict path="/images/home/beans" let:props><img alt="" {...props} /></Pict>
      <Pict path="/images/coffees/tucan-ethiopia-ethiopia_raro" let:props>
        <img alt="" {...props} />
      </Pict>
    </div>
    <div class="d img-grid right-grid">
      <Pict path="/images/coffees/geckos-ethiopia-bensa_shantawene" let:props>
        <img alt="" {...props} />
      </Pict>
      <Pict path="/images/coffees/tucan-mexico-paraiso_mexicano" let:props>
        <img alt="" {...props} />
      </Pict>
      <Pict path="/images/home/beans" let:props>
        <img alt="Top bean" {...props} />
      </Pict>
      <Pict path="/images/home/beans" let:props><img alt="" {...props} /></Pict>
      <Pict path="/images/coffees/bear-kenya-bungoma" let:props>
        <img alt="" {...props} />
      </Pict>
    </div>
  </div>
</section>
