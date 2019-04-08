$(function () {
        $('nav').hover(function () {
            if($(window).width() > 1000){
                $(this).addClass('active_nav');
                $(this).children('.sub_menu').css('display', 'flex').stop(false, true).fadeIn(300);
            }

        }, function () {
            if($(window).width() > 1000) {
                $(this).children('.sub_menu').stop(false, true).fadeOut(300);
                $(this).removeClass('active_nav');
            }
        })

    $('nav').click(function () {
        if($(this).attr('class').indexOf('active_nav') === -1){
            $(this).children('.sub_menu').css('display', 'flex').stop(false, true).fadeIn(300);
            $(this).addClass('active_nav');
        } else {
            $(this).children('.sub_menu').stop(false, true).fadeOut(300);
            $(this).removeClass('active_nav');
        }

    })


    function s1_has_prev(slide) {
        return slide.prev().attr('class') !== undefined;
    }
    function s1_has_next(slide) {
        return slide.next().attr('class').indexOf('slide_full') !== -1;
    }
    let allow_slide = true;

     function arrow_check(func_next, funk_prev, arrow_next, arrow_prev, obj, arrow_class) {
         if(!func_next(obj)){
             arrow_next.removeClass(arrow_class)
         } else {
             arrow_next.addClass(arrow_class)
         }
         if(!funk_prev(obj)){
             arrow_prev.removeClass(arrow_class)
         } else {
             arrow_prev.addClass(arrow_class)
         }
     }
    function s1_slide_next() {

        let now = $('.active_slide');


        if (s1_has_next(now)){


            now.stop(false, true).fadeOut(700);
            now.removeClass('active_slide');
            now.next().addClass('active_slide');
            now.next().stop(false, true).fadeIn(700);


            allow_slide = false;
            setTimeout(function () {
                allow_slide = true;
            }, 700)
            arrow_check(s1_has_next, s1_has_prev, $('.arrow_next'), $('.arrow_prev'), $('.active_slide'), 'ready_arrow');
        }
    }

    function s1_slide_prev() {


        let now = $('.active_slide');

        if (s1_has_prev(now)){
            now.stop(false, true).fadeOut(700);
            now.removeClass('active_slide');

            now.prev().addClass('active_slide')
            now.prev().stop(false, true).fadeIn(700);
            allow_slide = false;
            setTimeout(function () {
                allow_slide = true;
            }, 700)
            arrow_check(s1_has_next, s1_has_prev, $('.arrow_next'), $('.arrow_prev'), $('.active_slide'), 'ready_arrow');
        }
    }


    $('.arrow_next').click(function () {
        if(allow_slide){
            s1_slide_next();
        }

    })
    $('.arrow_prev').click(function () {
        if(allow_slide) {
            s1_slide_prev();
        }
    })


    function s2_has_next(slide) {
        return slide.next().attr('class').indexOf('slide_2') !== -1;
    }
    function s2_slide_next() {
        let now = $('.active_slide_2');
        if (s2_has_next(now)){
            now.stop(false, true).fadeOut(700);
            now.removeClass('active_slide_2');
            now.next().addClass('active_slide_2')
            now.next().stop(false, true).fadeIn(700);
            arrow_check(s2_has_next, s1_has_prev, $('.arrow_next_2'), $('.arrow_prev_2'), $('.active_slide_2'), 'no');
        }
    }
    function s2_slide_prev() {
        let now = $('.active_slide_2');
        if (s1_has_prev(now)){
            now.stop(false, true).fadeOut(700);
            now.removeClass('active_slide_2');
            now.prev().addClass('active_slide_2')
            now.prev().stop(false, true).fadeIn(700);
            arrow_check(s2_has_next, s1_has_prev, $('.arrow_next_2'), $('.arrow_prev_2'), $('.active_slide_2'), 'no');
        }
    }
    $('.arrow_next_2').click(function () {
        if(allow_slide){
            s2_slide_next();
        }

    })
    $('.arrow_prev_2').click(function () {
        if(allow_slide){
            s2_slide_prev();
        }

    })








});


$(function() {
    setTimeout(function () {
        $('.main_o_map').append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f5747476e09d59cc828fdc7b5915083e7573b4d2f5c4f5b0031691bf4f490ee&amp;source=constructor" width="380" height="338" frameborder="0"></iframe>');
    $('.second_o_map').append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f5747476e09d59cc828fdc7b5915083e7573b4d2f5c4f5b0031691bf4f490ee&amp;source=constructor" width="380" height="338" frameborder="0"></iframe>');
    $('#jquery').before('<script src="https://api-maps.yandex.ru/2.1/?apikey=ba680b4b-f235-4abe-940a-832720c77495&lang=ru_RU" type="text/javascript"></script>')

    setTimeout(function () {
        $('#jquery').after('<script language="JavaScript" src="scripts/big_map.js"></script>');

    }, 200)
    }, 1000)

});