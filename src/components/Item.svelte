<script>
    export let item;
    let quantity = item.quantity;
    let price = item.price;
    $: total = price * quantity;

    function increment(){
        quantity+= 1
    }
    function decrement(){
        if(quantity > 1){
           quantity-=1
        }else{
            quantity = 1
        }
    }
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
            " on:click={decrement}>-</button>
            <h5 style="
                font-size: 1.5rem;
            ">{quantity}</h5>
            <button style="
                border: 1px solid transparent;
                background-color: #fbfaf4;
                outline: none;
                cursor: pointer;
                font-size: 1rem;
            " on:click={increment}>+</button>
        </div>
    </div>
    <div style="width: 15%">
        <p>X</p>
        <p>${total}</p>
    </div>

</div>

