<script>
// Props
export let slideIndex = 0;
export let images = ['./images/carousel/1.jpg', './images/carousel/2.jpg', './images/carousel/3.jpg']

const paginationFactor = 450;

$: offset = 0;

const showSlides = slideIndex => {
    offset = slideIndex * paginationFactor
}

const currentSlide = n => {
    showSlides(slideIndex = n);
}

</script>

<main>
<div class="items" style="transform: translateX({offset}px);">
    {#each images as image}
    <img src="{image}" class="item">
    {/each}
</div>
</main>


<div style="text-align:center">
    <span class="dot" on:click="{() => currentSlide(-0)}"></span> 
    <span class="dot" on:click="{() => currentSlide(-1)}"></span> 
    <span class="dot" on:click="{() => currentSlide(-2)}"></span> 
</div>


<style>
main {
    width: 450px;
    overflow: hidden;
    position: relative;
    margin: auto;
}

.items {
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(0px);
}

.item {
    min-width: 450px;
    height: 200px;

    background-color: #ef4322;

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 10rem;
    user-select: none;
    overflow: hidden;
}

.items .item:first-child {
    margin-left: 0;
}

.items .item:last-child {
    margin-right: 0;
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

</style>