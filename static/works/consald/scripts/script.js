$(function () {
  $('.gallery').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.gallery .slick-arrow').text(' ')
  $('.menu > a').click(function () {
    $('.menu > a').removeClass('active_menu');
    $(this).addClass('active_menu');
  })
});
