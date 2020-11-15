<script>
  let images = [
    "./images/carousel/sliderImg1.webp",
    "./images/carousel/sliderImg2.webp",
    "./images/carousel/sliderImg3.webp",
  ];

  let slideIndex = 0,
    w = 0;
  $: offset = slideIndex * w;
</script>

<style>
  .slide-container {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
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

<div class="slide-container" bind:clientWidth={w}>
  <div class="slide" style="transform: translateX({offset}px);;">
    {#each images as image, i}
      <div>
        <img src={image} alt="Carousel option {i}" style="width:{w}px; " />
      </div>
    {/each}
  </div>
</div>

<div style="text-align:center; margin-bottom: 3rem;">
  {#each images as image, i}
    <span
      class={slideIndex === -i ? 'dotselected' : 'dot'}
      on:click={() => (slideIndex = -i)} />
  {/each}
</div>
