<style>
	* {
		box-sizing: border-box;
	}
	main {
		margin: 0 auto;
		width: 85%;
		padding: 0;
		text-align: center;
	}

	.card {
		margin: 2.5em 0;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);
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
	.chemex::after {
		content: "Chemex";
		font-size: 3em;
		position: absolute;
		top: calc(50% - (17% / 2));
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 5;
	}
	.aeropress::after {
		content: "Aeropress";
		font-size: 3em;
		position: absolute;
		top: calc(50% - (17% / 2));
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 5;
	}
	.pour-over::after {
		content: "Pour Over";
		font-size: 3em;
		position: absolute;
		top: calc(50% - (17% / 2));
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 5;
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

<main>
	<h1>Choose Your Brew</h1>
	<hr />
	<h2>
		Follow along with our experts and brew up a perfect cup of your favorite
		bean.
	</h2>
	<div class="card chemex" onclick="location.href='/brew-guides/chemex-guide/'">
		<div class="image-box img-box1">
			<img src="images/chemex1.jpg" alt="" />
		</div>
		<div class="image-box img-box2">
			<img src="images/chemex2.jpg" alt="" />
		</div>
	</div>
	<div
		class="card aeropress"
		onclick="location.href='/brew-guides/aeropress-guide/'">
		<div class="image-box img-box1">
			<img src="images/chemex1.jpg" alt="" />
		</div>
		<div class="image-box img-box2">
			<img src="images/chemex2.jpg" alt="" />
		</div>
	</div>
	<div
		class="card pour-over"
		onclick="location.href='/brew-guides/pour-over-guide/'">
		<div class="image-box img-box1">
			<img src="images/chemex1.jpg" alt="" />
		</div>
		<div class="image-box img-box2">
			<img src="images/chemex2.jpg" alt="" />
		</div>
	</div>
</main>
