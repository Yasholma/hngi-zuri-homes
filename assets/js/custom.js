// Preloader
$(window).on('load', function () {
  $('#status').fadeOut()
  $('#preloader').delay(500).fadeOut()
})

// Slick Slider Configuration
$(document).ready(function () {
  // Homepage Sliders
  $('.home-sliders').slick({
    autoplaySpeed: 2000,
    slidesToShow: 3,
    dots: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
  })

  $('.residence-sliders').slick({
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

// Wow.js Animation
$(function () {
  new WOW().init()
})
