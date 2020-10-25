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

  /* TODO: Button is for desktop dimensions */
  button {
    font-family: Killarney;
    border: 2px solid #222;
    border-radius: 0.5rem;
    background: none;
    font-size: 1.5rem;
    padding: 0.4rem 1.5rem;
    margin-top: 1.5rem;
  }
</style>

<section>
  <h1>Find Your Next<br />Favorite Brew</h1>
  <h2 class="subscribe">Subscribe to Save 15%</h2>
  <div>
    <img src="/images/home/tucan.png" alt="Tucan Coffee Bag" class="tucan" />
    <img src="/images/home/geckos.png" alt="Geckos Coffee Bag" class="geckos" />
    <img src="/images/home/beans.png" alt="Coffee beans" class="beans" />
    <img src="/images/home/bear.png" alt="Bear Coffee Bag" class="bear" />
  </div>
</section>
