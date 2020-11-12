<script>
  // Props
  export let slideIndex = 0;
  export let paginationFactor = 1000;
  export let images = [
    "./images/carousel/1.jpg",
    "./images/carousel/2.jpg",
    "./images/carousel/3.jpg",
  ];

  $: offset = 0;

  let showSlides = (slideIndex) => {
    offset = slideIndex * paginationFactor;
  };

  let currentSlide = (n) => {
    showSlides((slideIndex = n));
  };
</script>

<style>
  .slide-container {
    max-width: 1100px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }

  .slide {
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(0px);
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .dotselected {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #000000;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
</style>

<div class="slide-container">
  <div class="slide" style="transform: translateX({offset}px);">
    {#each images as image, i}
      <img src={image} alt="Carousel option {i}" />
    {/each}
  </div>
</div>

<div style="text-align:center; margin-bottom: 3rem;">
  {#each images as image, i}
    <span
      class={slideIndex === -i ? 'dotselected' : 'dot'}
      on:click={() => currentSlide(-i)} />
  {/each}
</div>
