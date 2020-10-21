<svelte:head>
    <title>Cart</title>
</svelte:head>

<script>
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

