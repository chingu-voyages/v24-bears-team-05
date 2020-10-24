<svelte:head>
    <title>Cart</title>
</svelte:head>

<script>
    // This component should recieve data from svelte/store.  Data to the store gets passed from Product.js which is inside beans page
    import CartStore from '../../storage/cartStore.js';
    import { onDestroy} from 'svelte';
    
    let cartItems = [];

    const unsub = CartStore.subscribe(data => {
        cartItems = data
    });

    onDestroy(()=> {
        unsub()
    })

</script>

<h1>Cart</h1>

<div class = "cart">
    {#if cartItems.length}
        {#each cartItems as item}
            <h1>{item.name}</h1>
            <p>{item.price}</p>
        {/each}
    {:else if !cartItems.length}
        <h1>Cart is empty</h1>
    {/if}
</div>

