<!-- Layout is for any layout components like Header+Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  export let templateHtml, settings;
  export let request;
</script>

<style>
</style>

<svelte:head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='12 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>" />
  <link rel="stylesheet" href="/global.css" />
</svelte:head>
<div class="container">
  <Header
    hydrate-client={{ slug: request.slug }}
    hydrate-options={{ loading: 'eager' }} />
  {@html templateHtml}
  <Footer />
</div>
