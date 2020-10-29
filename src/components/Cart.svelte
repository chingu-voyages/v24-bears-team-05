
<script>
    import CartItem from './CartItem.svelte';
    import { onMount} from 'svelte';

        let cartItems = []
    
    onMount(async () => {
        cartItems = JSON.parse( localStorage.getItem( 'session' ) )
    })
    

    $: totalCost = cartItems.length ? (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)) : 0 ;
    $: console.log(totalCost)

    


</script>

<p>Total cost ${totalCost}</p>
<div>
    {#if cartItems.length}
        {#each cartItems as item }
            <CartItem {item}/>
        {/each}
    {:else if !cartItems.length}
        <h1>Cart is empty</h1>
    {/if}
</div>


