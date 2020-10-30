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
      font-family: Killarney;
      border: 4px solid #222;
      border-radius: 0.5rem;
      background: none;
      font-size: 1.5rem;
      padding: 0.2rem 1.5rem;
      text-decoration: none;
      z-index: 2;
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

    .left-grid img:first-child {
      transform: rotate(-10.28deg);
      width: 42%;
      margin-left: -15%;
    }
    .left-grid img:nth-child(2) {
      margin-top: 17%;
      margin-left: 46%;
      transform: rotate(21.48deg);
      width: 34%;
    }
    .d img:nth-child(3) {
      grid-area: 1;
      width: 48%;
      margin-left: -7%;
    }
    .left-grid img:nth-child(4) {
      width: 58%;
      margin-left: 8%;
      margin-top: -7%;
    }
    .left-grid img:last-child {
      margin-left: 17%;
      width: 38%;
      margin-top: 13%;
    }

    .right-grid {
      overflow: hidden;
    }
    .right-grid img:first-child {
      transform: rotate(-21.74deg);
      margin-right: 49%;
      margin-bottom: 1%;
      width: 38%;
    }
    .right-grid img:nth-child(2) {
      transform: rotate(19.66deg);
      margin-bottom: 1%;
      margin-right: -10%;
      width: 38%;
    }
    .right-grid img:nth-child(3) {
      transform: rotate(150deg);
      width: 44%;
    }
    .right-grid img:nth-child(4) {
      width: 59%;
      margin-right: 9%;
      margin-bottom: 14%;
    }
    .right-grid img:last-child {
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
  <h2 class="m subscribe">Subscribe to Save 15%</h2>
  <div class="m">
    <img src="/images/home/tucan.png" alt="Tucan Coffee Bag" class="tucan" />
    <img src="/images/home/geckos.png" alt="Geckos Coffee Bag" class="geckos" />
    <img src="/images/home/beans.png" alt="Coffee beans" class="beans" />
    <img src="/images/home/bear.png" alt="Bear Coffee Bag" class="bear" />
  </div>
  <a class="d" href="/beans">Get Matched</a>
  <div class="d row">
    <div class="d img-grid left-grid">
      <img src="/images/home/bear_mexico.png" alt="" />
      <img src="/images/home/geckos_honduras.png" alt="" />
      <img src="/images/home/beans.png" alt="Top bean" />
      <img src="/images/home/beans.png" alt="" />
      <img src="/images/home/tucan_ethiopia.png" alt="" />
    </div>
    <div class="d img-grid right-grid">
      <img src="/images/home/geckos_ethiopia.png" alt="" />
      <img src="/images/home/tucan.png" alt="" />
      <img src="/images/home/beans.png" alt="Top bean" />
      <img src="/images/home/beans.png" alt="" />
      <img src="/images/home/bear_kenya.png" alt="" />
    </div>
  </div>
</section>
