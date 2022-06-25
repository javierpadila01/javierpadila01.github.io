
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: false,
  mousewheel: {
    invert: false,
    releaseOnEdges: true,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
  swiper: {
    threshold: 90,
  }
  
});

