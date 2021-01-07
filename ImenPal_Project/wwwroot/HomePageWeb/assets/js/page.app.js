/**
 * Implement custom javascript on App page 
 */
jQuery(document).ready(function($) {

  //App screenshot carousel
  jQuery('.screenshots .gallery-carousel').slick({
    rtl: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 0,
    centerMode: true,
    infinite: true,
    swipe: true,
    prevArrow: '<div class="prev-arrow"><i class="icon-arrow icon-arrow-right"></i></div>',
    nextArrow:  '<div class="next-arrow"><i class="icon-arrow icon-arrow-left"></i></div>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});