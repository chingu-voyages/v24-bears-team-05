<script>
  import Pict from "./Pict.svelte";
  export let products
  const originalList = products;

  $: innerWidth = 0

  let isActive = false
  let show = false

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

  let open = false;

  function toggleShow() {
		show = !show
  }
  
  


  function getRoasterFilter(str) {
    return function filterHandler() {
      products = originalList;
      products = products.filter((product) => product.roaster === str);
    }
  }

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
    font-family: Killarney;
    border: 2px solid #222222;
    border-radius: 0.5rem;
    background: none;
    font-size: 1.2rem;
    padding: 0.25rem 1.5rem;
    align-self: flex-end;
    margin-bottom: 1.5rem;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
      background-color: #ddd;
  }
  .dropdown-content {
    display: block;
  }
  .dropbtn {
    background-color: #ddd;
  }
  



  /* Desktop */
  @media(min-width: 720px) {
    .container {
      max-width: 80rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      row-gap: 13rem;
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
    a {
      margin-bottom: 1.5rem;
    }
    
    .dropdown-content a:hover {
      background-color: #ddd;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown:hover .dropbtn {
      background-color: #ddd;
    }
  }
</style>
<svelte:window bind:innerWidth />
<!-- <p>{innerWidth}</p>
{open}
{show} -->
<section>
  <!-- <div class="dropdown">
    Roast Filter
    <div class:dropdown-content={isActive}>
      {#each originalList as { roaster }}
      <a href="#" on:click={getRoasterFilter(roaster)}>{roaster}</a>
      {/each}
    </div>
  </div> -->


  {#if innerWidth < 720}
    <div class="dropdown" use:clickOutside={{ enabled: open, cb: () => open = false }} on:click={() => open = true}>
      Origin Filter
      {#if open}
        <div class="dropdown-content">
            <a href="#" on:click={getOriginFilter("All")}>All</a>
          {#each originalList as {origin}}
            <a href="#" on:click={getOriginFilter(origin)}>{origin}</a>
          {/each}
        </div>
      {:else}
      
      {/if}
    </div>
  {:else}
    <div class="dropdown" on:mouseenter={toggleShow} on:mouseleave={toggleShow}>
      Origin Filter
      {#if show}    
        <div class="dropdown-content">
            <a href="#" on:click={getOriginFilter("All")}>All</a>
          {#each originalList as {origin}}
            <a href="#" on:click={getOriginFilter(origin)}>{origin}</a>
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