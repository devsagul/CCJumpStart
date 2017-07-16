$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: true
  });

  var $scrolled = 0;
  $(window).scroll(function() {
    var $scroll_top = $(this).scrollTop();
    if ($scroll_top - $scrolled >= 50) {
      var $height = $(".navbar").css("height");
      $('.navbar').animate({top: "-" + $height}, 150);
      $scrolled = $scroll_top;
    } else if ($scrolled - $scroll_top >= 50) {
      $('.navbar').animate({top: 0}, 150);
      $scrolled = $scroll_top;
    };
  });
});
