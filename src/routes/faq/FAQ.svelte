<script>
	export let data;
	const { faqs } = data;
	const { coffeeQ, orderingQ } = faqs;

	let open = false;

	function handleClick() {
		alert("work");
	}
</script>

<style>
	main {
		padding-top: 5em;
		width: 90vw;
		margin: 0 auto;
	}
	.answer {
		display: none;
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
</style>

<main>
	<h1>FAQ</h1>
	<button on:click={handleClick}>HERE</button>
	{#each coffeeQ as coffee}
		<div class="faq-item faq-item{coffee.id}" on:click={handleClick}>
			<h3 class="question">{coffee.question}</h3>
			<p class="answer {open ? 'open' : ''}">{coffee.answer}</p>
		</div>
	{/each}
	<hr />
	{#each orderingQ as ordering}
		<h3>{ordering.question}</h3>
		<p>{ordering.answer}</p>
	{/each}
</main>
