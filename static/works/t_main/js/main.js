var $someImages = $(".object-fit");
objectFitImages($someImages), $(".js-modal-show").on("click", function (a) {
  a.preventDefault();
  var s = $(this).attr("href");
  $(s).fadeIn(500, "linear"), $(".body-mask").addClass("body-mask--active"), $(".item-mask").addClass("item-mask--active")
}), $(".js-modal-close").on("click", function (a) {
  a.preventDefault(), $(".js-modal-wrap").fadeOut(500, "linear"), $(".body-mask").removeClass("body-mask--active"), $(".item-mask").removeClass("item-mask--active")
}), $("#modal-form").submit(function (a) {
  $(".modal-form").addClass("modal-form--done"), a.preventDefault()
}), $("#modal-submit").click(function () {
  $("#modal-form").submit()
}), $(".header__burger").click(function () {
  $(".nav-side").addClass("nav-side--active"), $(".body-mask").addClass("body-mask--active"), $(".item-mask").addClass("item-mask--active")
}), $(".nav-side__close").click(function () {
  $(".nav-side").removeClass("nav-side--active"), $(".body-mask").removeClass("body-mask--active"), $(".item-mask").removeClass("item-mask--active")
}), $(".js-category-btn").click(function () {
  $(".courses__form-line--category").addClass("nav-side--active"), $(".body-mask").addClass("body-mask--active"), $(".item-mask").addClass("item-mask--active")
}), $(".js-level-btn").click(function () {
  $(".courses__form-line--level").addClass("nav-side--active"), $(".body-mask").addClass("body-mask--active"), $(".item-mask").addClass("item-mask--active")
}), $(".courses__line-close-mob").click(function () {
  $(this).parent().parent().removeClass("nav-side--active"), $(".body-mask").removeClass("body-mask--active"), $(".item-mask").removeClass("item-mask--active")
});

$(function() {
  function set_slide(num, slider) {
    let slide = slider.children().eq(num);
    $(slider).children().css('display', 'none');
    slide.fadeIn(500)
  }

  $('.sl_1_nav .circle').click(function () {
    set_slide($(this).index(), $('.sl_1'));
    $('.sl_1_nav').children().removeClass('active_nav');
    $(this).addClass('active_nav')

  });

  $('.sl_2_nav .circle').click(function () {
    set_slide($(this).index(), $('.sl_2'));
    $('.sl_2_nav').children().removeClass('active_nav');
    $(this).addClass('active_nav')

  });
  $('.lvls .lvl').click(function () {

    $('.lvls').children().removeClass('active_lvl');
    $(this).addClass('active_lvl')
    let id = $(this).attr('id');
    $('.full_slide').css('display', 'none')
    if(id === 'A1_btn'){
      $('#A1_slide').fadeIn(500).css('display', 'flex')
    } else if(id === 'A2_btn'){
      $('#A2_slide').fadeIn(500).css('display', 'flex')
    } else if(id === 'B1_btn'){
      $('#B1_slide').fadeIn(500).css('display', 'flex')
    } else if(id === 'B2_btn'){
      $('#B2_slide').fadeIn(500).css('display', 'flex')
    } else if(id === 'C1_btn'){
      $('#C1_slide').fadeIn(500).css('display', 'flex')
    }

  })

});