<style>
  nav {
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
  button {
    border: none;
    background: none;
    border-right: 1px solid hsl(0, 0%, 96%);
    padding: 0 1rem;
  }
  button:hover {
    background-color: hsl(0, 0%, 96%);
  }
</style>

<nav>
  <!-- Burger -->
  <button>
    <!-- prettier-ignore -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 18H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <h1>Bear<br />Coffee</h1>
  <!-- Cart placeholder -->
  <div />
  <!-- 
    Desktop markup
    <div>
      <h2>Beans</h2>
      <h2>Brew Guides</h2>
      <h2>About</h2>
    </div>
   -->
</nav>
