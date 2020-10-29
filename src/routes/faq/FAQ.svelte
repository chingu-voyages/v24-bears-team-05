<script>
	import FAQDropdown from "../../components/FAQDropdown.svelte";
	export let data;
	const { faqs } = data;
</script>

<style>
	main {
		width: 85%;
		max-width: 900px;
		padding: 5em 0em 2em;
		margin: 0 auto;
	}
</style>

<main>
	<h1>Frequently Asked Questions</h1>
	<p>Questions? Questions? Questions?</p>
	<p>
		We got your answers below! If you do not see your answer please email us at
		info@coffeebear.com
	</p>
	<FAQDropdown hydrate-client={{ faqs }} />
</main>
