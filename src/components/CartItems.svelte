<script>
import Item from './Item.svelte';

import { onMount} from 'svelte';
    let cartItems = []

onMount(() => {
    cartItems = [...JSON.parse( localStorage.getItem( 'session' ) )]
})
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

<div style="

">
    {#if cartItems.length}
        {#each cartItems as item }
            <Item {item}/>
        {/each}
    {:else if !cartItems.length}
        <h1>Cart is empty</h1>
    {/if}
</div>


