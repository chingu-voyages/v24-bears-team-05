<script>   
    export let products;
    export let product;
    let itemsInCart = [];
   
    function addToCart(input) {
        let newInput = {...input}
        itemsInCart = JSON.parse(localStorage.getItem('session')) || [];
        const itemInCart = itemsInCart.find(item => item.id === newInput.id);
        if(itemInCart){
                var updatedItemsInCart = itemsInCart.map(item => {
                    const updateItems = item.id === itemInCart.id ? ({...itemInCart, quantity: item.quantity + 1}) : {...item}
                    return updateItems
                })
                localStorage.setItem('session', JSON.stringify(updatedItemsInCart));
            }
        else{
            const addedItem =  {...newInput, quantity: 1}
            itemsInCart.push(addedItem)
            localStorage.setItem('session', JSON.stringify(itemsInCart));
        }
         console.log(JSON.parse( localStorage.getItem( 'session' )));
    };

</script>


<div class = "product"  >
    <img src={product.url} alt={product.name}>
    <p class="product-name">{product.name}</p>
    <h3 class="price">${product.price}</h3>
    <button on:click = {() => addToCart(product)}>Add to cart</button>
</div>

<style>
    .product {
        position: relative;
        width: 300px;
        padding: 1em;
        text-align: center;
        background-color: #C4C4C4;
        margin: 1.3rem;
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
