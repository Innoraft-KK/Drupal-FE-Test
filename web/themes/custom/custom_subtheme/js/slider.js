(function ($, Drupal) {
    Drupal.behaviors.mySlickSlider = {
      attach: function (context, settings) {
        $(' .view-content').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          autoplaySpeed: 2000,
          adaptiveHeight: true,
          prevArrow: '<i class="fa-solid fa-chevron-left fa-lg"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right  fa-lg"></i>',
        });
        $('.carousel__text__title:contains("IND")').each(function() {
          $(this).prev('.hastag').css('display', 'inline');
        });
      }
    };
  })(jQuery, Drupal);