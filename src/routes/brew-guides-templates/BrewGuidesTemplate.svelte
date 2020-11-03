<script>
	export let data;
	const { guides } = data;
	const { name, description, steps, qualities } = guides;
</script>

<style>
	main {
		padding: 5em 0em 2em;
		width: 90vw;
		max-width: 1200px;
		margin: 0 auto;
	}
	span {
		font-family: Helvetica, sans-serif;
		font-size: 0.75em;
	}
	.header > * {
		margin: 0;
		text-align: center;
	}
	.description {
		margin: 2em 0;
	}
	.instructions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
		flex: 1 300px;
		padding: 1em 1.5em;
	}
	img {
		height: 350px;
		width: 100%;
		max-width: 450px;
		object-fit: cover;
	}
</style>

<svelte:head>
	<title>Bear Coffee Beans</title>
</svelte:head>
<main>
	<div class="header">
		<p class="decoration">Learn with the Bears</p>
		<h1 class="title">{name}</h1>
		<h2>Great For <br /><span>{qualities}</span></h2>
		<p class="description">{description}</p>
	</div>
	{#each steps as step}
		<div class="instructions step{step.id}">
			<img src={step.img} alt="step {step.id}" class="box" />
			<div class="box">
				<h2>{step.title}</h2>
				<p>{step.step}</p>
			</div>
		</div>
	{/each}
</main>
