// Slider

$('.stats-slider').slick({
  dots: false,
  arrow: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: "<img src='images/arrow-right.svg' class='arrow-prev' />",
  nextArrow: "<img src='images/arrow-left.svg' class='arrow-next' />",
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.quotes-slider').slick({
  dots: true,
  arrow: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<img src='images/arrow-left-red.svg' class='arrow-prev' />",
  nextArrow: "<img src='images/arrow-right-red.svg' class='arrow-next' />",
});