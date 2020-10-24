<!-- Layout is for any layout components like Header+Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
	import Header from "../components/Header.svelte";
	export let templateHtml, settings;
</script>

<style>
</style>

<svelte:head>
	<link rel="stylesheet" href="/global.css" />
</svelte:head>
<div class="container">
	<Header hydrate-client={{}} />
	{@html templateHtml}
</div>
