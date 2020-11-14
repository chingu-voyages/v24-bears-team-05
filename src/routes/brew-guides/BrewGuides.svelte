<script>
	import { title } from "process";
</script>

<style>
	* {
		box-sizing: border-box;
	}
	main {
		width: 85%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 5em 0em 2em;
		text-align: center;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.card {
		flex: 0 1 350px;
		max-width: 350px;
		margin: 2.5em auto;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);
		justify-items: center;
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}
	.chemex {
		background-color: #cf9962;
	}
	.aeropress {
		background-color: #c3cdab;
	}
	.pour-over {
		background-color: #aaa395;
	}
	/* text on top of cards */
	.chemex::after,
	.aeropress::after,
	.pour-over::after {
		font-size: 4rem;
		font-family: var(--primary-font);
		color: white;
		position: absolute;
		top: calc(50% - (17% / 2));
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 5;
	}

	.chemex::after {
		content: "Chemex";
	}
	.aeropress::after {
		content: "Aeropress";
	}
	.pour-over::after {
		content: "Pour Over";
	}

	.img-box1 {
		grid-column: 1 / span 4;
		grid-row: 1;
		margin: -20px;
	}
	.img-box2 {
		grid-column: 3 / 7;
		grid-row: 2;
		margin: -20px;
	}

	img {
		width: 65%;
	}
</style>

<svelte:head>
	<title>Bear Coffee Brew Guides</title>
</svelte:head>

<main>
	<h1>Choose Your Brew</h1>
	<hr />
	<h2>
		Follow along with our experts and brew up a perfect cup of your favorite
		bean.
	</h2>
	<div class="container">
		<a class="card chemex" href="/brew-guides/chemex">
			<div class="image-box img-box1">
				<img src="/images/brewGuides/chemex/chemex1.jpg" alt="" />
			</div>
			<div class="image-box img-box2">
				<img src="/images/brewGuides/chemex/chemex2.jpg" alt="" />
			</div>
		</a>
		<a class="card aeropress" href="/brew-guides/aeropress">
			<div class="image-box img-box1">
				<img src="/images/brewGuides/aeropress/aeropress1.jpg" alt="" />
			</div>
			<div class="image-box img-box2">
				<img src="/images/brewGuides/aeropress/aeropress3.jpg" alt="" />
			</div>
		</a>
		<a class="card pour-over" href="/brew-guides/pourover">
			<div class="image-box img-box1">
				<img src="/images/brewGuides/pourover/pourover1.jpg" alt="" />
			</div>
			<div class="image-box img-box2">
				<img src="/images/brewGuides/pourover/pourover4.jpg" alt="" />
			</div>
		</a>
	</div>
</main>
