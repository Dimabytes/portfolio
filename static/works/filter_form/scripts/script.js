$(function () {
  let slider = $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 40000,
    values: [ 5000, 20000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] +  "₽");
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "₽" +
    " - " + $( "#slider-range" ).slider( "values", 1 ) + "₽" );

  $('.plus_s').click(function() {
    slider.slider( "values", 1, slider.slider('values', 1) + 1000);
    $( "#amount" ).val( slider.slider('values', 0) + "₽" + " - " + slider.slider('values', 1) +  "₽");
  });
  $('.minus_s').click(function() {
    slider.slider( "values", 0, slider.slider('values', 0) - 1000);
    $( "#amount" ).val( slider.slider('values', 0) + "₽" + " - " + slider.slider('values', 1) +  "₽");
  });
  $('.show_all').click(function () {
    $('.comfort').toggleClass('showed_comfort');
    $(this).toggleClass('on_show_all');
  })
  var navBtnId = 0;
  var SlideCount = 5;
  var translateWidth = 0;
  function nextSlide(btn) {
     let SlideNow = Number(btn.parent().parent().parent().children('.current_block').text());
     let Slide_wrap = btn.parent().prev();

    if (SlideNow == SlideCount || SlideNow <= 0 || SlideNow >= SlideCount) {
      Slide_wrap.css('transform', 'translate(0, 0)');
      btn.parent().parent().parent().children('.current_block').text('1')
    } else {
      translateWidth = -$('.viewport').width() * (SlideNow);
      Slide_wrap.css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      btn.parent().parent().parent().children('.current_block').text(SlideNow + 1);
    }
  }
  function prevSide(btn){
    let SlideNow = Number(btn.parent().parent().parent().children('.current_block').text());
    let Slide_wrap = btn.parent().prev();
    if (SlideNow === SlideCount || SlideNow <= 1 || SlideNow >= SlideCount) {
      translateWidth = -$('.viewport').width() * (SlideCount - 1);
      Slide_wrap.css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      btn.parent().parent().parent().children('.current_block').text(SlideCount)
    } else {
      translateWidth = -$('.viewport').width() * (SlideNow - 2);
      Slide_wrap.css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      btn.parent().parent().parent().children('.current_block').text(SlideNow - 1);
    }

  }
  $('.next-btn').click(function() {
    nextSlide($(this));
  });

  $('.prev-btn').click(function() {
    prevSide($(this));
  });
  $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();
    let SlideNow = Number($(this).parent().parent().parent().children('.current_block').text());


    if (navBtnId + 1 != SlideNow) {
      let viewport = $(this).parent().parent();
      let Slide_wrap = $(this).parent().prev().prev();

      translateWidth = -viewport.width() * (navBtnId);
      Slide_wrap.css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      $(this).parent().parent().parent().children('.current_block').text(SlideNow + 1);
    }
  });
  function plus_spin(btn) {
    btn.prev().text(Number(btn.prev().text()) + 1);

  }
  function minus_spin(btn) {
    btn.next().text(Number(btn.next().text()) - 1);
  }
  $('.btn_min').click(function () {

    if(Number($(this).next().text()) > 0){
      minus_spin($(this))
    }
  });
  $('.btn_plus').click(function () {
    plus_spin($(this))
  });



});

