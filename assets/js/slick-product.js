
$(document).ready(function(){
$('.variable').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
      autoplaySpeed: 2000,
    asNavFor: '.variable-nav'
  });
  $('.variable-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.variable',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    variableWidth: true,
        centerPadding: '1px',
  });
  $('.recom-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    variableWidth: true,
        centerPadding: '1px',
        autoplay: true,
      autoplaySpeed: 2000,
  });
});
