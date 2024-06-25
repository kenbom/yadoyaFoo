<script>
  export let title;
  export let body;
  export let slidesObjs;
  //以下Emblaスクリプト
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  // import slide1 from '../assets/littleFar/gyokou.jpg';
  // import slide2 from '../assets/littleFar/sajirushi.jpg';
  // import slide3 from '../assets/littleFar/syokudou.jpg';
  // import { slide } from 'astro/virtual-modules/transitions.js';

  let emblaApi;
  let options = { loop: true };
  let plugins = [Autoplay()];

  function onInit(event) {
    emblaApi = event.detail;
    console.log(emblaApi.slideNodes()); // Access API
  }
</script>

<li class="link-card">
  <div class="card-sub">
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <div class="photo-card">
      <!-- 以下Emblahtml -->
      <div
        class="embla"
        use:emblaCarouselSvelte={{ options, plugins }}
        on:emblaInit={onInit}
      >
        <div class="embla__container">
          {#each slidesObjs as slideObj}
            <div class="embla__slide">
              <img class="image" src={slideObj.slide.src} alt={slideObj.alt} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</li>

<style>
  .link-card {
    list-style: none;
  }

  .card-sub {
    display: grid;
    grid-template-columns: 25% 1fr 1fr;
    width: 100%;

    @media (max-width: 496px) {
      display: block;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: rgb(27, 25, 25);
    @media (max-width: 496px) {
      font-size: 1rem;
    }
  }

  p {
    display: grid;
    justify-content: center;
    align-content: end;
    font-size: 1rem;
    height: 150px;
    margin-top: 50px;
    color: rgb(27, 25, 25);

    @media (max-width: 496px) {
      font-size: 0.8rem;
      display: block;
      height: inherit;
      margin-top: inherit;
      padding: 10px;
      padding-bottom: 8px;
    }
  }

  .photo-card {
    object-fit: cover;
    width: 100%;
    height: 300px;

    @media (max-width: 496px) {
      grid-column: 3 / -1;
    }
  }

  /* 以下Embla Css */
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 300px;

    @media (max-width: 496px) {
      object-fit: contain;
      width: 100%;
    }
  }
</style>
