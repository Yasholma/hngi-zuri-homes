// Preloader
$(window).on('load', function () {
  $('#status').fadeOut()
  $('#preloader').delay(500).fadeOut()
  $('.navbar-brand').addClass('animate__animated animate__bounce')
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

// Magnific POP UP
$(function () {
  // Residence Main Images
  $('.residence-main-container').magnificPopup({ delegate: 'a', type: 'image' })

  // Residence Child Images //
  // Residence 1

  // Residence 2
  magnifyImages('residence-1')
  magnifyImages('residence-2')
  magnifyImages('residence-3')
  magnifyImages('residence-4')
  magnifyImages('residence-5')
  magnifyImages('residence-6')
  magnifyImages('residence-7')
  magnifyImages('residence-8')
  magnifyImages('residence-9')
})

function magnifyImages(id) {
  $(`#${id}`).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  })
}
