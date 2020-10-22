<script>
  let opened;
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    position: relative;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  }
  h1,
  h2 {
    font-family: "Killarney";
    margin-bottom: 0;
  }
  h1 {
    text-align: center;
    line-height: 80%;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }

  /* Burger */
  .menu {
    width: 3.5rem;
    height: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-right: 1px solid hsl(0, 0%, 96%);
    cursor: pointer;
    display: flex;
  }
  .menu:hover {
    background-color: hsl(0, 0%, 96%);
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  /* TODO: these styles are for the menu that appears when opened  */
  menu {
    display: flex;
    flex-flow: column;
  }
  menu a {
    text-decoration: none;
    padding-bottom: 1rem;
    font-weight: 600;
  }
</style>

<header>
  <nav>
    <!-- Burger -->
    <button
      class="menu"
      class:opened
      aria-expanded={opened}
      on:click={() => (opened = !opened)}
      aria-label="Main Menu">
      <!-- prettier-ignore -->
      <svg width="30" height="30" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
  </nav>
  <h1>Bear<br />Coffee</h1>
  <!-- TODO: Cart placeholder -->
  <div />
  <!-- 
    Desktop markup
    <div>
      <h2>Beans</h2>
      <h2>Brew Guides</h2>
      <h2>About</h2>
    </div>
   -->
</header>
