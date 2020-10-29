<script>
	export let faqs;
	let { coffeeQ, orderingQ } = faqs;

	coffeeQ.map((coffee) => (coffee.open = false && coffee));
	orderingQ.map((ordering) => (ordering.open = false && ordering));
</script>

<style>
	.answer {
		display: block;
		opacity: 0;
		height: 0px;
		transition: 0.1s ease-out;
	}
	.answer.open {
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
		right: 30px;
		top: 0;
		transform: rotate(45deg);
		cursor: pointer;
	}
	.faq-item > .question.open::before {
		content: "✕";
		position: absolute;
		right: 30px;
		top: 0;
		transform: rotate(0deg);
		cursor: pointer;
	}
</style>

<main>
	{#each coffeeQ as { open, ...coffee }, i}
		<div
			class="faq-item faq-item{coffee.id}"
			on:click={() => {
				coffeeQ[i].open = !coffeeQ[i].open;
				coffeeQ = [...coffeeQ];
			}}>
			<h3 class="question" class:open>{coffee.question}</h3>
			<p class="answer" class:open>{coffee.answer}</p>
		</div>
	{/each}
	<hr />
	{#each orderingQ as { open, ...ordering }, i}
		<div
			class="faq-item faq-item{ordering.id}"
			on:click={() => {
				orderingQ[i].open = !orderingQ[i].open;
				orderingQ = [...orderingQ];
			}}>
			<h3 class="question">{ordering.question}</h3>
			<p class="answer" class:open>{ordering.answer}</p>
		</div>
	{/each}
</main>
