<script>
  export let products = [
    // Mock data if Stripe not connected and undefined.
    // The first entry represents a good example of the full data structure that could
    // potentially be sent in
    {
      name: "Bear Coffee",
      origin: "Kenya",
      roastProfile: "Bungoma",
      color: "rgba(83, 77, 86, 0.5)",
      price: "$18",
      src:
        "https://s3-alpha-sig.figma.com/img/d2ae/6b35/e3da824053ae97882387329125ede01e?Expires=1604275200&Signature=E~CLe6rZqmWG6wnf1SqQEU8i-CTkzoa-0PUlepqbWbW4Tno~i2oWUXovgnxgDKx70lBK3ikBN7KpF4KeNVQXrZPhufShj6stjjR3KQ~Ceo9-hG3miOVEXN0N2TPlqFDhjUREINGwrz8UPLLc2-9jvJcU~oyogWbU~2nb-KCnikvcX33Oo957pvjFE1Jk1TZjX9LaUdUvjkyxgJCROSOuWc2hFeh-Hu-mUg8ja1G~ybqugbsGWVGKhRvDTvnm7KvLMQq-YEvgXDcQOritsBI-O-~T7eiJIuQD50l~liq7BfzspMZmxhFaVgWyv4hdi~Of3JdwGoTn5tYrsuOTuczLBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Tucan",
      origin: "Ethiopia",
      roastProfile: "Ethiopia Raro",
      color: "hsl(57,87%,68%,0.5)",
      price: "$22",
      src:
        "https://s3-alpha-sig.figma.com/img/7251/70b5/9a04f258af1c509301eb717292e55b04?Expires=1604275200&Signature=ZRH-s9Y238OEW9NUvNEai2kutIY3y~5Kz7evubJf4XRmE77QkVsWZdHaC7mbjIBT3uBXoCnL5G4PZ8dGbtx8SwQTUJ2m80fScvRRmACNVIJJP~clcMHufgZ~XMdzYSAyyoGIWkTngE9R52znv2w1d4CrOOX-ocFg~Z7xtilvq1ywVW2y1DKKGIDfPphyosiCjZ85HVC4jqZ2qyEzEKS4eMNNBF6Gsw7S9~ZENZ71Y0-TD7Ifs5JhJTmED9uGA997bhmY-RCUPkfBkJkSuBr0n6-IK~EJwl82IbFniRZBIR5y92T6grPzneFHUwjWz1odxWKsPIaXt8APskv70-oeUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Tucan",
      origin: "Mexico",
      roastProfile: "Paraiso Veracruz",
      color: "hsl(191,35%,50%,0.5)",
      price: "$20",
      src:
        "https://s3-alpha-sig.figma.com/img/54db/e45d/f6775d54a23be2a8723bbb8fb392ecab?Expires=1604275200&Signature=bJ-Gwz7r82O~UgqiQgnNp8OJZMihA9VyJo3om2elrItXm30ea9AUPJLPENDYcipm7I6H~H3-8wZfhP7nJr85~wAamSDhnGUggGweb-uTot4WItAZAsDDLq76h9n0oEd8j~y6v-liJwosdE0qk2JWgJNHxhbdG6ceX7ITjP387rNh2yr5eC5XJleXhg9id1k64qY8C0QR-NsEO3XnVfq56CqpPyRW7ZbBJxsyFnXblQHpGz2YeYwPfZOIasJG5p-PysXsop8nw7UGCYVYr4Wrz7UKnelzcMDf~TB2Fl4zhZeQvarw7XobC16QyFix5NfVmBUeLC1cNzbu2qU041r1Fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  const originalList = products;

  function filterBungoma() {
    products = originalList;
    products = products.filter((product) => product.roastProfile === "Bungoma");
  }
  function filterEthipiaRaro() {
    products = originalList;
    products = products.filter((product) => product.roastProfile === "Ethiopia Raro");
  }
  function filterParaisoVeracruz() {
    products = originalList;
    products = products.filter(
      (product) => product.roastProfile === "Paraiso Veracruz"
    );
  }
</script>

<style>
  section {
    padding: 0 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 24rem;
  }
  article {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 1.5rem;
    padding-bottom: 0;
    margin-bottom: 3.5rem;
    min-width: 10rem;
    width: 100%;
  }
  article img {
    max-width: 11em;
    margin-bottom: 1rem;
  }
  article h2 {
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
  }
  .price {
    align-self: flex-end;
    margin-right: -0.5rem;
    margin-bottom: 0.5rem;
  }

  .dropdown {
    font-family: Killarney;
    border: 2px solid #222222;
    border-radius: 0.5rem;
    background: none;
    font-size: 1.2rem;
    padding: 0.25rem 1.5rem;
    align-self: flex-end;
    margin-bottom: 1.5rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #ddd;
  }
</style>

<section>
  <div class="container">
    <div class="dropdown">
      Filter
      <div class="dropdown-content">
        <a href="#" on:click={filterBungoma}>Bungoma</a>
        <a href="#" on:click={filterEthipiaRaro}>Ethipia Raro</a>
        <a href="#" on:click={filterParaisoVeracruz}>Paraiso Veracruz</a>
      </div>
    </div>
    {#each products as { name, origin, roastProfile, src, color = "lightgray", price = "N/A" }}
      <article style="background-color: {color};">
        <img {src} alt="{name} - {origin}" />
        <h2>{name} — {origin}</h2>
        <h2>{roastProfile}</h2>
        <h2 class="price">{price}</h2>
      </article>
    {/each}
  </div>
</section>
