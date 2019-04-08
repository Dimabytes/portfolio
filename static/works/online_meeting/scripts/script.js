$(function () {
    function send_form(button) {
        let data = {
            name: button.parent().children('Name_in').val(),
            email: button.parent().children('Email_in').val(),
        };
        $.ajax({
            type: "POST",
            url: 'send/',
            data: data,
            success: function () {},
            error: function () {}
        });
        button.parent().parent().parent().children('.thank').fadeIn(600);
        button.parent().parent().remove();
    }

    $('.send').click(function () {
        if (!$(this).parent()[0].checkValidity()) {
            $(this).parent().children('.submit').click();
        } else {
            send_form($(this))
        }

    });

});
