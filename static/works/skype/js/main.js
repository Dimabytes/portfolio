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

  var lessons_count = $('#lessons_count').slider({
    min: 0,
    max: 32,
    range: "min",
    value: 1,
    animate: false,
    step: 8,
    change:  function( event, ui ){

      let curr_value = lessons_count.slider("value");
      $('.active_count').removeClass('active_count');
      $('.price').css('display', 'none')
      if (curr_value === 0){
        $('.count_1').addClass('active_count')
        $('.price_1').fadeIn(300)
      }
      else if(curr_value === 8){
        $('.count_2').addClass('active_count')
        $('.price_2').fadeIn(300)
      }
      else if(curr_value === 16){
        $('.count_3').addClass('active_count')
        $('.price_3').fadeIn(300)
      }
      else if(curr_value === 24){
        $('.count_4').addClass('active_count')
        $('.price_4').fadeIn(300)
      }
      else if(curr_value === 32){
        $('.count_5').addClass('active_count')
        $('.price_5').fadeIn(300)
      }

    }

  });

  $('.how nav p').click(function () {
    set_slide($(this).index(), $('.how .slider'));
    $('.how nav').children().removeClass('active_nav');
    $(this).addClass('active_nav')
  })

  $( "#accordion" ).accordion({
    animate: 200,
  });

});