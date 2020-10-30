<script>
	import FAQDropdown from "../../components/FAQDropdown.svelte";
	export let data;
	const { faqs } = data;
</script>

<style>
	main {
		padding: 5em 0em 2em;
		margin: 0 auto;
		width: 90vw;
		max-width: 900px;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
</style>

<main>
	<h1>Frequently Asked Questions</h1>
	<hr />
	<p>Questions? Questions? Questions?</p>
	<p>
		We got your answers below! If you do not see your answer please email us at
		info@coffeebear.com
	</p>
	<FAQDropdown hydrate-client={{ faqs }} />
</main>
