<script>
  import HeaderLogo from "./HeaderLogo.svelte";
  import HeaderMenu from "./HeaderMenu.svelte";
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

  :global(.menu, .cart) {
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
  :global(.menu:hover, .cart:hover) {
    background-color: hsl(0, 0%, 96%);
  }
</style>

<header>
  <HeaderMenu hydrate-client={{}} hydrate-options={{ loading: 'eager' }} />
  <HeaderLogo hydrate-client={{}} />
  <button class="cart" aria-label="cart">
    <!-- prettier-ignore -->
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.30933 2L3.30933 6V20C3.30933 20.5304 3.52004 21.0391 3.89511 21.4142C4.27019 21.7893 4.77889 22 5.30933 22H19.3093C19.8398 22 20.3485 21.7893 20.7235 21.4142C21.0986 21.0391 21.3093 20.5304 21.3093 20V6L18.3093 2H6.30933Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.30933 6H21.3093" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3093 10C16.3093 11.0609 15.8879 12.0783 15.1378 12.8284C14.3876 13.5786 13.3702 14 12.3093 14C11.2485 14 10.231 13.5786 9.4809 12.8284C8.73075 12.0783 8.30933 11.0609 8.30933 10" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </button>
</header>
