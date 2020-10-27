<script>
import Item from './Item.svelte';

import { onMount} from 'svelte';
    let cartItems = []

onMount(() => {
    cartItems = [...JSON.parse( localStorage.getItem( 'session' ) )]
})
const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(totalCost)
</script>

    <div style="
        height: 100px;
        width: 100%;
        padding: 1.4rem;
        background-color:#f5d8c3;
    ">
        <h1 style="
            font-weight: 300;
            text-align: center;
        ">Your cart</h1>
    </div>
<p>Total cost ${totalCost}</p>
<div>
    {#if cartItems.length}
        {#each cartItems as item }
            <Item {item}/>
        {/each}
    {:else if !cartItems.length}
        <h1>Cart is empty</h1>
    {/if}
</div>


