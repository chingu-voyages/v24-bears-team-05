<style>
  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-bottom: 1rem;
  }

  .scale {
    object-fit: cover;
    height: 15rem;
    width: 410px;
    max-width: 90%;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.3rem;
    text-align: left;
    width: 410px;
    max-width: 90%;
  }

  .icon-box {
    max-width: 90%;
    width: 410px;
    margin-left: 2rem;
  }

  .icon {
    width: 2.2rem;
    height: 2.2rem;
    object-fit: contain;
    margin: 0;
  }
  .icon-box div {
    margin-bottom: 2.2rem;
    display: flex;
    place-items: center;
  }
  .icon-box p {
    margin: 0;
    margin-left: 0.5rem;
    font-weight: 500;
    font-size: 1.25rem;
  }
  .bean p {
    margin-top: 0.5rem;
  }

  .img-box {
    position: relative;
    height: 24rem;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .img-box img {
    width: 18rem;
    height: 14rem;
    position: absolute;
    object-fit: cover;
  }
  .img-box img:first-of-type {
    margin-top: 10rem;
    margin-left: 10rem;
  }
  .img-box img:last-of-type {
    margin-right: 10rem;
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
      display: unset;
    }
    br {
      display: none;
    }
    br.d {
      display: unset;
    }

    section {
      display: grid;
      grid-template-areas:
        "title img"
        "icons img";
      place-items: center;
      place-content: center;
      column-gap: 1rem;
      padding-right: 1rem;
    }
    h2 {
      grid-area: title;
      text-align: center;
      font-size: 3rem;
      max-width: unset;
    }
    .icon-box {
      grid-area: icons;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      margin-left: 0;
      width: 34rem;
      -moz-column-gap: 1rem;
      column-gap: 6rem;
    }
    img {
      grid-area: img;
    }
    .scale {
      height: 85%;
      width: 33rem;
      max-width: 90%;
      object-position: 50% 40%;
    }
    .icon-box p {
      font-size: 1.7rem;
    }
    .icon {
      width: 3rem;
      height: 3rem;
    }
  }
</style>

<section>
  <img class="scale" src="/images/home/plant.jpg" alt="Coffee Plant" />
  <h2>
    Only the Best<br />
    Quality
    <br class="d" />Roasts Pass
    <br />
    Our Test
  </h2>

  <div class="icon-box">
    <div class="bean">
      <img class="icon bean" src="/images/home/bean_icon.png" alt="Bean Icon" />
      <p>Roasted Weekly</p>
    </div>
    <div>
      <img class="icon" src="/images/home/sun_icon.png" alt="Sun Icon" />
      <p>Small <br class="d" />Harvests</p>
    </div>
    <div>
      <img class="icon" src="/images/home/sprout_icon.png" alt="Sprout Icon" />
      <p>Sustainably Harvested</p>
    </div>
    <div>
      <img class="icon" src="/images/home/person_icon.png" alt="Person Icon" />
      <p>Fair Wages <br class="d" />to Farmers</p>
    </div>
  </div>

  <div class="img-box m">
    <img src="/images/home/bean_sorting.jpg" alt="Bean sorting" />
    <img src="/images/home/bean_mixing.jpg" alt="Bean mixing" />
  </div>
</section>
