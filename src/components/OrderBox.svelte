<script>
  import { onMount } from "svelte";

  onMount(async () => {
    var token = localStorage.getItem("token");
    if (!token) {
      location.pathname = "/login";
    }

    var res = await fetch(`/.netlify/functions/order-status`, {
      method: "POST",
      body: JSON.stringify({
        token,
      }),
    });

    var { email, orderHistory } = await res.json();

    console.log(email, orderHistory);
  });
</script>

<div>"Hey"</div>
