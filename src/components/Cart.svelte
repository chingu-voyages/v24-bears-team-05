
<script>
    import CartItem from './CartItem.svelte';
    import { onMount} from 'svelte';

        let cartItems = []
    
    onMount(async () => {
        cartItems = [...JSON.parse( localStorage.getItem( 'session' ) )]
        cartItems.forEach(element => {
            const removed_$_sign = element.price.replace("$","")
            element.price = removed_$_sign
        });
    })

    $: totalCost = cartItems.length ? (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)) : 0 ;
    $: console.log('total cost',totalCost)



</script>

    <div>
        {#if cartItems.length}
            <h1 style="
                margin: 1rem 2rem;
            ">Cart</h1>
            {#each cartItems as item }
                <CartItem {item}/>
            {/each}
        {:else if !cartItems.length}
            <h1>Cart is empty</h1>
        {/if}
    </div>
    <div style="width: 400px;
                margin: 5rem auto;">
        <h1>Subtotal: ${totalCost}</h1>
        <h1>Taxes: $0.00 </h1>
        <h1>Total: ${totalCost}</h1>
    <button>Checkout</button>
    </div>
    


