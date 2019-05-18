function header(){
    let top_cord = $('.head_wrap').offset().top === -3;
    if (top_cord){
        $('.head_wrap').removeClass('head_scrolled');
    } else {
        $('.head_wrap').addClass('head_scrolled');
    }
}




$(function () {
    $('.join_open').click(function () {
        $('.send_form').addClass('active_form').fadeIn(300).css('display', 'flex')
    });
    $('#close').click(function () {
        $('.send_form').removeClass('active_form').css('display', 'none').fadeOut(300)
    });
    function send_form(button) {
        let data = {
            name: button.parent().children('Name_in').val(),
            phone: button.parent().children('Phone_in').val(),
        };
        $.ajax({
            type: "POST",
            url: 'send/',
            data: data,
            success: function () {},
            error: function () {}
        });
        button.parent().parent().remove();
        $('.after_send').fadeIn(300).css('display', 'flex');
    }

    $('.send').click(function () {
        if (!$(this).parent()[0].checkValidity()) {
            $(this).parent().children('.submit').click();
        } else {
            send_form($(this))
        }

    });
    let slider = $('.slider ');
    const one_step_slide = 300;
    let ready = true;
    let prev_rdy = false;
    let next_rdy = true;
    function get_scroll_coords(obj) {
    return obj.scrollLeft();
    }
     function slide_next() {
        let max_scroll = slider.get(0).scrollWidth - slider.outerWidth();
         slider.animate( { scrollLeft: get_scroll_coords(slider) + one_step_slide }, 300);
         if(!prev_rdy){
             $('.prev').addClass('ready');
             prev_rdy = true;
         }
         if (max_scroll <= get_scroll_coords(slider) + one_step_slide){
             $('.next').removeClass('ready');
             next_rdy = false;
         }
     }
    function slide_prev() {
        if(!next_rdy){
            console.log('ya!');
            $('.next').addClass('ready');
            next_rdy = true;
        }
        slider.animate( { scrollLeft: get_scroll_coords(slider) - one_step_slide }, 300);
        if (0 >= get_scroll_coords(slider) - one_step_slide){
            $('.prev').removeClass('ready');
            prev_rdy = false;
        }
    }
     $('.next').click(function () {
         if(ready){
             slide_next();
             ready = false;
             setTimeout(function () {
                 ready = true;
             }, 300)
         }

     });
    $('.prev').click(function () {
        if(ready){
            slide_prev();
            ready = false;
            setTimeout(function () {
                ready = true;
            }, 300)
        }

    })

});