<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  import slide1 from '../assets/littleFar/gyokou.jpg';
  import slide2 from '../assets/littleFar/sajirushi.jpg';
  import slide3 from '../assets/littleFar/syokudou.jpg';

  let emblaApi;
  let options = { loop: true };
  let plugins = [Autoplay()];

  function onInit(event) {
    emblaApi = event.detail;
    console.log(emblaApi.slideNodes()); // Access API
  }
</script>

<div
  class="embla"
  use:emblaCarouselSvelte={{ options, plugins }}
  on:emblaInit={onInit}
>
  <div class="embla__container">
    <div class="embla__slide">
      <img class="image" src={slide1.src} alt="小田原漁港" />
    </div>
    <div class="embla__slide">
      <img class="image" src={slide2.src} alt="さじるし食堂" />
    </div>
    <div class="embla__slide">
      <img class="image" src={slide3.src} alt="食堂" />
    </div>
  </div>
</div>

<style>
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
