<script>
  import { slide } from "svelte/transition";

  export let faqs;
  let { coffeeQ, orderingQ } = faqs;

  coffeeQ.map((coffee) => (coffee.open = false && coffee));
  orderingQ.map((ordering) => (ordering.open = false && ordering));
</script>

<style>
  main {
    padding-top: 2em;
  }
  hr {
    margin: 2em auto;
  }
  .heading {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 1.5rem;
  }
  .answer {
    display: block;
    opacity: 0;
    height: 0px;
  }
  .answer.open {
    background-color: #f9e9e7;
    padding: 2em 1em;
    margin: 1.5rem 0 0 0;
    display: block;
    opacity: 1;
    height: 100%;
  }
  .question {
    position: relative;
    cursor: pointer;
  }
  .faq-item > .question::before {
    content: "✕";
    position: absolute;
    right: -10px;
    top: 0;
    transform: rotate(45deg);
    cursor: pointer;
  }
  .faq-item > .question.open::before {
    content: "✕";
    position: absolute;
    right: -10px;
    top: 0;
    transform: rotate(0deg);
    cursor: pointer;
  }
  h2 {
    margin: 0;
  }
  .faq-item {
    margin: 0 0 2rem 0;
    cursor: pointer;
  }
</style>

<main>
  <h2 class="heading">Coffee Questions</h2>
  {#each coffeeQ as { open, ...coffee }, i}
    <div
      class="faq-item faq-item{coffee.id}"
      on:click={() => {
        coffeeQ[i].open = !coffeeQ[i].open;
        coffeeQ = [...coffeeQ];
      }}>
      <h2 class="question" class:open>{coffee.question}</h2>
      {#if open}
        <p
          class="answer"
          class:open
          in:slide={{ duration: 500 }}
          out:slide={{ duration: 300 }}>
          {coffee.answer}
        </p>
      {/if}
    </div>
  {/each}
  <hr />
  <h2 class="heading">Shipping Questions</h2>
  {#each orderingQ as { open, ...ordering }, i}
    <div
      class="faq-item faq-item{ordering.id}"
      on:click={() => {
        orderingQ[i].open = !orderingQ[i].open;
        orderingQ = [...orderingQ];
      }}>
      <h2 class="question" class:open>{ordering.question}</h2>
      {#if open}
        <p
          class="answer"
          class:open
          in:slide={{ duration: 500 }}
          out:slide={{ duration: 300 }}>
          {ordering.answer}
        </p>
      {/if}
    </div>
  {/each}
</main>
