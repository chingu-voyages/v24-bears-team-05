<script>
  import Pict from "./Pict.svelte";
  export let products
  const originalList = products;

  $: innerWidth = 0

  let isClicked = false;

  // Hover switch for filter menu
  let isHovered = false

  function toggleShow() {
		isHovered = !isHovered
  }
  
  // Mobile version function. Dropdown On Off Click Outside
  function clickOutside(node, { enabled: initialEnabled, cb }) {
    const handleOutsideClick = ({ target }) => {
      if (!node.contains(target)) {
        cb();
      }
    };
    function update({enabled}) {
      if (enabled) {
        window.addEventListener('click', handleOutsideClick);
      } else {
        window.removeEventListener('click', handleOutsideClick);
      }
    }
    update({ enabled: initialEnabled });
    return {
      update,
      destroy() {
        window.removeEventListener( 'click', handleOutsideClick );
      }
    };
  }

  // Filter coffee by origin
  function getOriginFilter(str) {
    return function filterHandler() {
      products = originalList;
      if (str === "All") {
        products = products.filter((product) => product.origin);
      } else {
        products = products.filter((product) => product.origin === str);
      }
    }
  }
</script>

<style>
  section {
    padding: 0 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 24rem;
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
    min-height: 15.1rem;
    width: 11rem;
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
  .dropdown {
    font-family: var(--primary-font);
    border: 2px solid #222222;
    border-radius: 0.5rem;
    background: none;
    font-size: 1.7rem;
    padding: 0.25rem 1.5rem;
    align-self: flex-end;
    margin-bottom: 1.5rem;
    width: 9rem;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    width: 9rem;
    z-index: 1;
    border: 2px solid #222222;
    border-top: none;
    left: -2px;
  }
  .dropdown-content button {
    color: black;
    padding: 12px 13px;
    text-decoration: none;
    display: block;
  }
  button {
    font-family: var(--primary-font);
    font-size: 1.7rem;
    align-self: flex-end;
    border: none;
    outline: none;
    width: 100%;
    text-align: left;
  }
  .dropdown-content button:hover {
    background-color: #ddd;
    border: none;
    outline: none
  }
  .dropdown-content {
    display: block;
    outline: none
  }
  .dropbtn {
    background-color: #ddd;
    border: none;
    outline: none;
  }
  
  /* Desktop */
  @media(min-width: 720px) {
    .container {
      max-width: 80rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      row-gap: 2rem;
      column-gap: 2rem;
      justify-items: center;
    }
    article {
      width: 20rem;
      height: 30rem;
    }
    article img {
      margin-bottom: 4rem;
    }
  }
</style>

<svelte:window bind:innerWidth />

<section>
  {#if innerWidth < 720}
    <div class="dropdown" use:clickOutside={{ enabled: isClicked, cb: () => isClicked = false }} on:click={() => isClicked = true}>
      Origin
      {#if isClicked}
        <div class="dropdown-content">
            <button on:click={getOriginFilter("All")}>All</button>
          {#each originalList as {origin}}
            <button on:click={getOriginFilter(origin)}>{origin}</button>
          {/each}
        </div>
      {/if}
    </div>
  {:else}
    <div class="dropdown" on:mouseenter={toggleShow} on:mouseleave={toggleShow}>
      Origin
      {#if isHovered}    
        <div class="dropdown-content">
            <button on:click={getOriginFilter("All")}>All</button>
          {#each originalList as {origin}}
            <button on:click={getOriginFilter(origin)}>{origin}</button>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <div class="container">
    {#each products as { name, origin, roaster, type, color = "lightgray", prices }}
      <article style="background-color: {color};">
        <a class="link-wrapper" href="/beans/{name}">
          <Pict path="/images/coffees/{name}" let:props>
            <img alt="{roaster} - {origin}" {...props} />
          </Pict>
          <h2>{roaster} — {origin}</h2>
          <h2>{type}</h2>
        </a>
        <h2 class="price">${prices["10oz"] * 0.01}</h2>
      </article>
    {/each}
  </div>
</section>