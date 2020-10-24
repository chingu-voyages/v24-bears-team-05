<script>
	import { fly } from "svelte/transition";

	let opened;
</script>

<style>
	header {
		display: flex;
		background-color: white;
		justify-content: space-between;
		align-items: stretch;
		width: 100%;
		position: relative;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
		z-index: 2;
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

	.menu,
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
	.menu:hover,
	.cart:hover {
		background-color: hsl(0, 0%, 96%);
	}

	/* Burger */
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

	/* TODO: these styles are for the menu that appears when opened
  Not final yet, due to issues  */
	menu {
		margin: 0;
		position: absolute;
		width: 100%;
		background-color: #fbfaf4;
		display: flex;
		flex-flow: column;
		z-index: 1;
		top: 3.5rem;
	}
	menu a {
		text-decoration: none;
		font-family: Killarney;
		font-size: 2.5rem;
		padding: 1rem;
		font-weight: 500;
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
	<button class="cart" aria-label="cart">
		<!-- prettier-ignore -->
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.30933 2L3.30933 6V20C3.30933 20.5304 3.52004 21.0391 3.89511 21.4142C4.27019 21.7893 4.77889 22 5.30933 22H19.3093C19.8398 22 20.3485 21.7893 20.7235 21.4142C21.0986 21.0391 21.3093 20.5304 21.3093 20V6L18.3093 2H6.30933Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.30933 6H21.3093" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.3093 10C16.3093 11.0609 15.8879 12.0783 15.1378 12.8284C14.3876 13.5786 13.3702 14 12.3093 14C11.2485 14 10.231 13.5786 9.4809 12.8284C8.73075 12.0783 8.30933 11.0609 8.30933 10" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
	</button>

	<!-- 
    Desktop markup
    <div>
      <h2>Beans</h2>
      <h2>Brew Guides</h2>
      <h2>About</h2>
    </div>
   -->
</header>

{#if opened}
	<menu transition:fly={{ duration: 200, y: -200 }}>
		<a href="beans">Beans</a>
		<a href="brew-guides">Brew Guides</a>
		<a href="about">About</a>
		<a href="faq">FAQ</a>
	</menu>
{/if}
