<script>
    export let item;
    let quantity = item.quantity;
    let price = item.price;
    $: total = price * quantity;

    function increment(id) {
        const copiedState = JSON.parse( localStorage.getItem( 'session' ));
        const findUpdated = copiedState.find(item => item.id === id);
        findUpdated.quantity = quantity++;
        localStorage.setItem('session', JSON.stringify(copiedState));
    };
    function decrement(id) {
        if(quantity > 1){
            const copiedState = JSON.parse( localStorage.getItem( 'session' ));
            const findUpdated = copiedState.find(item => item.id === id);
            findUpdated.quantity = quantity--;
            localStorage.setItem('session', JSON.stringify(copiedState));
        };
    };
    function removeItem(id) {
        const copiedState = JSON.parse( localStorage.getItem( 'session' ));
        const updatedState = copiedState.filter(item => item.id !== id);
        localStorage.setItem('session', JSON.stringify(updatedState));
    };
    
</script>

<div class="cartItem" style="
    display: flex;
    width: 97%;
    margin: 2rem auto;
    border-top: 1px solid #61F2C2;
    border-bottom: 1px solid #61F2C2;
    padding: 1rem;
">
    <img src={item.url} alt={item.name} style = "width: 15%; min-width: 150px"/>

    <div style="width: 70%">
        <h3 style="
            font-weight: bold;
        ">{item.name}</h3>
        <h4>10oz</h4>
        <div style="
            width: 80px;
            display: flex;
            justify-content: space-evenly;
            margin-top: 1.5rem;
            border: 1px solid #61F2C2;
        ">
            <button style="
                border: 1px solid transparent;
                background-color: #fbfaf4;
                outline: none;
                cursor: pointer;
                font-size: 1rem;
            " on:click={() =>decrement(item.id)}>-</button>
            <h5 style="
                font-size: 1.5rem;
            ">{quantity}</h5>
            <button style="
                border: 1px solid transparent;
                background-color: #fbfaf4;
                outline: none;
                cursor: pointer;
                font-size: 1rem;
            " on:click={()=>increment(item.id)}>+</button>
        </div>
    </div>
    <div style="width: 15%">
        <p on:click={() => removeItem(item.id)}>X</p>
        <p>${total}</p>
    </div>

</div>

