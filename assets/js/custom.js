// Slick Slider Configuration
$(document).ready(function () {
  $('.sliders').slick({
    autoplaySpeed: 2000,
    slidesToShow: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  })
})
