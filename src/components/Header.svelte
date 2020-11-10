<script>
  import HeaderDNav from "./HeaderDNav.svelte";
  import Cart from "./Cart.svelte";
  import { slide, fade } from "svelte/transition";
  import { sleep } from "../utils/utils";
  import { onMount } from "svelte";

  export let permalink;
  let isHome = permalink == "/";
  let opened;
  // Nested hydrated component style fix
  //  see: https://github.com/Elderjs/elderjs/issues/37
  let cartOpened = process.env.componentType === "server";
  let isMounted = false; // prevent cart menu layout shift, check if Header has mounted
  onMount(() => (isMounted = true));

  async function menuHandler() {
    if (cartOpened) {
      cartOpened = !cartOpened;
      await sleep(250);
    }
    if (!opened) document.body.classList.add("m-menu-of");
    else document.body.classList.remove("m-menu-of");
    opened = !opened;
  }
  async function cartHandler() {
    if (opened) {
      opened = !opened;
      await sleep(250);
    }
    if (!cartOpened) document.body.classList.add("m-menu-of");
    else document.body.classList.remove("m-menu-of");
    cartOpened = !cartOpened;
  }
</script>

<style>
  header {
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
    z-index: 30;
  }

  .m-menu-btn,
  .cart {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    place-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    --btn-borders: 1px solid hsl(0, 0%, 96%);
    border-right: var(--btn-borders);
    border-left: var(--btn-borders);
  }
  .m-menu-btn:hover,
  .cart:hover {
    background-color: hsl(0, 0%, 96%);
  }

  menu {
    margin: 0;
    position: fixed;
    width: 100%;
    height: calc(100% - 3.5rem);
    background-color: #fbfaf4;
    display: flex;
    flex-flow: column;
    z-index: 29;
    top: 3.5rem;
    overflow: auto;
    padding-left: 0;
  }
  menu a {
    text-decoration: none;
    font-family: Killarney;
    font-size: 2.5rem;
    margin: 1rem;
    margin-left: 4rem;
    font-weight: 500;
  }

  /* global class for hiding body overflow when menus open (mobile) */
  @media (max-width: 720px) {
    :global(.m-menu-of) {
      overflow: hidden;
    }
  }

  /* Burger */
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1,
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .opened .line1,
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }

  .logo {
    font-family: "Killarney";
    text-decoration: none;
    text-align: center;
    line-height: 80%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    user-select: none;
    margin-bottom: 0;
  }
  .hidden {
    display: none;
  }

  .social {
    display: flex;
    flex-flow: column;
    place-items: center;
    margin-top: auto;
  }
  .social h2 {
    text-align: center;
    font-size: 2.5rem;
  }
  .social-icons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    width: 100%;
  }
  .social-icons img {
    width: 3rem;
  }
  .cart-menu {
    padding: 0;
  }

  /* Desktop dimensions */
  @media (min-width: 720px) {
    /* hide mobile items */
    nav,
    button,
    menu,
    .cart {
      display: none;
    }
    .logo {
      margin-left: 2rem;
    }
  }
</style>

<header>
  <nav>
    <!-- Burger -->
    <button
      class="m-menu-btn"
      class:opened
      aria-expanded={opened}
      on:click={menuHandler}
      aria-label="Main Menu">
      <!-- prettier-ignore -->
      <svg width="30" height="30" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    <!-- Desktop markup
    <div>
      <h2>Beans</h2>
      <h2>Brew Guides</h2>
      <h2>About</h2>
    </div>
    -->
  </nav>
  <a class="logo" class:hidden={isHome} href="/"> Bear<br />Coffee </a>
  <h6 class="logo" class:hidden={!isHome}>Bear<br />Coffee</h6>

  <button class="cart" aria-label="cart" on:click={cartHandler}>
    {#if !cartOpened}
      <!-- prettier-ignore -->
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" in:fade >
      <path d="M6.30933 2L3.30933 6V20C3.30933 20.5304 3.52004 21.0391 3.89511 21.4142C4.27019 21.7893 4.77889 22 5.30933 22H19.3093C19.8398 22 20.3485 21.7893 20.7235 21.4142C21.0986 21.0391 21.3093 20.5304 21.3093 20V6L18.3093 2H6.30933Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.30933 6H21.3093" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.3093 10C16.3093 11.0609 15.8879 12.0783 15.1378 12.8284C14.3876 13.5786 13.3702 14 12.3093 14C11.2485 14 10.231 13.5786 9.4809 12.8284C8.73075 12.0783 8.30933 11.0609 8.30933 10" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    {:else if cartOpened}
      <!-- prettier-ignore -->
      <svg  in:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    {/if}
  </button>

  <HeaderDNav {permalink} />
</header>

<!-- Burger menu dropdown -->
{#if opened}
  <menu transition:slide={{ duration: 500 }}>
    <a href="/beans/">Beans</a>
    <a href="/brew-guides/">Brew Guides</a>
    <a href="/about/">About</a>
    <a href="/faq/">FAQ</a>
    <div class="social">
      <h2>Follow Us</h2>
      <div class="social-icons">
        <img src="/images/footer/facebook.svg" alt="Facebook" />
        <img src="/images/footer/instagram.svg" alt="Instagram" />
        <img src="/images/footer/twitter.svg" alt="Twitter" />
        <img src="/images/footer/youtube.svg" alt="YouTube" />
      </div>
    </div>
  </menu>
{/if}

<!-- Cart slider -->
{#if cartOpened && isMounted}
  <menu class="cart-menu" transition:slide={{ duration: 500 }}>
    <Cart />
  </menu>
{/if}
