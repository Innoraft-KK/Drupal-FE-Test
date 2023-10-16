(function ($, Drupal) {
    Drupal.behaviors.mySlickSlider = {
      attach: function (context, settings) {
        // Initialize Slick Slider on the wrapper element.
        /* $('.view-content').slick({ */
        $(' .view-content').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
         /*  autoplay: true, */
          autoplaySpeed: 2000,
          adaptiveHeight: true,
          prevArrow: '<i class="fa-solid fa-chevron-left fa-2xl"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right  fa-2xl"></i>',
        });
      }
    };
  })(jQuery, Drupal);