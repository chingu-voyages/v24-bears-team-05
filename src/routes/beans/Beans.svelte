<svelte:head>
    <title> Products </title>
</svelte:head>

<script>
    import products from '../../storage/products.js';
    import Product from '../../components/Product.svelte';
</script>

<div class = "text-wrapper">
    <h1 class = "title">Choose your Beans</h1>
    <p class = "desc ">Choose from a wide variety of coffee from the top roasters in the US. All coffee is roasted to order and shipped fresh to your door.</p>
</div>


<div class = "products">
    {#each products as product (product.id)}
        <Product {product} />    
    {/each}
</div>



<style>
    .text-wrapper {
        text-align: center;
        margin-top: 80px;
    }
    .title {
        font-size: 4em;
        font-weight: bold;
    }
    .desc {
        width: 600px;
        margin: 0 auto;
    }

    .products {
        width: 90%;
        margin: 40px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 60px;
    }
    
</style>