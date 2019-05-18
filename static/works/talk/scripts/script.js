function header(){
    let top_cord = $('.f_join').offset().top === 20;
    if (top_cord){
        $('header').removeClass('head_scrolled');
        $('.flag').removeClass('flag_m')
    } else {
        $('header').addClass('head_scrolled');
        $('.flag').addClass('flag_m')
    }

}

$(function () {
    let top_cord = $('.f_join').offset().top === 20;
    if (top_cord){
        $('header').removeClass('head_scrolled');
        $('.flag').removeClass('flag_m')
    } else {
        $('header').addClass('head_scrolled');
        $('.flag').addClass('flag_m')
    }

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

});
