<script>
	export let faqs;
	let { coffeeQ, orderingQ } = faqs;

	coffeeQ.map((coffee) => (coffee.open = false && coffee));
	orderingQ.map((ordering) => (ordering.open = false && ordering));
</script>

<style>
	main {
		padding-top: 2em;
	}
	hr {
		margin: 2em auto;
	}
	.heading {
		text-align: center;
		font-size: 2.5em;
	}
	.answer {
		display: block;
		opacity: 0;
		height: 0px;
		transition: 0.3s ease-out;
	}
	.answer.open {
		background-color: #f9e9e7;
		padding: 2em 1em;
		display: block;
		opacity: 1;
		height: 100%;
		transition: 0.5s ease-out;
	}
	.question {
		position: relative;
		cursor: pointer;
	}
	.faq-item > .question::before {
		content: "✕";
		position: absolute;
		right: -10px;
		top: 0;
		transform: rotate(45deg);
		cursor: pointer;
	}
	.faq-item > .question.open::before {
		content: "✕";
		position: absolute;
		right: -10px;
		top: 0;
		transform: rotate(0deg);
		cursor: pointer;
	}
</style>

<main>
	<h2 class="heading">Coffee Questions</h2>
	{#each coffeeQ as { open, ...coffee }, i}
		<div
			class="faq-item faq-item{coffee.id}"
			on:click={() => {
				coffeeQ[i].open = !coffeeQ[i].open;
				coffeeQ = [...coffeeQ];
			}}>
			<h2 class="question" class:open>{coffee.question}</h2>
			<p class="answer" class:open>{coffee.answer}</p>
		</div>
	{/each}
	<hr />
	<h2 class="heading">Shipping Questions</h2>
	{#each orderingQ as { open, ...ordering }, i}
		<div
			class="faq-item faq-item{ordering.id}"
			on:click={() => {
				orderingQ[i].open = !orderingQ[i].open;
				orderingQ = [...orderingQ];
			}}>
			<h2 class="question" class:open>{ordering.question}</h2>
			<p class="answer" class:open>{ordering.answer}</p>
		</div>
	{/each}
</main>
