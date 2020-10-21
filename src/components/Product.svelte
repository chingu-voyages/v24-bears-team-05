<script>   
    import Button from './Button.svelte';
    import CartStore from '../storage/cartStore.js';
    export let product;

    function addToCart(input) {
        let item = {...input}
        console.log(item)
        CartStore.update(currentCart => {
            return [item, ...currentCart]
        })
    }

</script>


<div class = "product">
    <img src={product.url} alt={product.name}>
    <p class="product-name">{product.name}</p>
    <h3 class="price">${product.price}</h3>
    <Button on:click = {() => addToCart(product)}>Add to cart</Button>
</div>

<style>
    .product {
        position: relative;
        width: 300px;
        padding: 1em;
        text-align: center;
        background-color: #C4C4C4;
    }
    img {
        width: 150px;
    }
    .product-name {
        font-size: 1.25em;
        font-weight: bold;
    }
    .price {
        position: absolute;
        right: 10px;
        bottom: 5px;
        font-weight: bold;
    }
    
</style>
