
<script>
    import Item from './Item.svelte';
    import { onMount} from 'svelte';
    import {loadStripe} from '@stripe/stripe-js';

        let cartItems = []
        var stripe;
        var elements;
        var card;
        let status;
    
    onMount(async () => {
        cartItems = JSON.parse( localStorage.getItem( 'session' ) )
        stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        elements = await stripe.elements();
        card = elements.create('card', {style: style});
        card.mount('#card-element');
    })
    var style = {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
            color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };

   

    $: totalCost = cartItems.length ? (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)) : 0 ;
    $: console.log(totalCost)


    const handleSubmit = async e => {
        e.preventDefault();

            status = 'submitting';

            try {
                let { token } = await stripe.createToken({ name: 'Name' });

                let response = await fetch('/.netlify/functions/charge', {
                    method: 'POST',
                    body: JSON.stringify({
                    amount: totalCost * 100,
                    token: token.id,
                    }),
                });

                if (response.ok) {
                    status = 'complete';
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (err) {
                status = "error"
            }
             if (status === 'complete') {
                alert('Payment successful!')
            }
  };
    


</script>

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


<form on:submit|preventDefault={handleSubmit} id="payment-form">

  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>

    <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

  <div id="card-errors" role="alert"></div>
  </div>

  <button type="submit">Submit Payment</button>
</form>


