<script>
import { onMount} from 'svelte';
    let cartItems = []
console.log('brr')

onMount(() => {
    cartItems = [...JSON.parse( localStorage.getItem( 'session' ) )]
})
</script>


<style>
    img {
        width: 120px;
    }
</style>

    <div class="cart-header">
        <h1>A lot of cart items</h1>
    </div>

<div class = "cart">
    {#if cartItems.length}
        {#each cartItems as item}
            <div class="cartItem">
                <img src={item.url} alt={item.name}/>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
            </div>
        {/each}
    {:else if !cartItems.length}
        <h1>Cart is empty</h1>
    {/if}
</div>



