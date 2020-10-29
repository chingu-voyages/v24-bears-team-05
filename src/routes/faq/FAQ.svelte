<script>
	import FAQDropdown from "../../components/FAQDropdown.svelte";
	export let data;
	const { faqs } = data;
</script>

<style>
	main {
		padding-top: 5em;
		width: 90vw;
		margin: 0 auto;
	}
</style>

<main>
	<h1>FAQ</h1>
	<p>Here are some questions we know you will have for us.</p>
	<FAQDropdown hydrate-client={{ faqs }} />
</main>
