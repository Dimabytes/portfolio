
$(function() {
    $('.link_port').hover(function() {
        $( this ).toggleClass("animated bounce")
    });


    function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
            }
                }
            return cookieValue;
        }

    let csrftoken = getCookie('csrftoken');


    function send_form(button) {
        let data = {
            csrfmiddlewaretoken: csrftoken,
            email: button.parent().children('.email').children('input').val(),
            name: button.parent().children('.ename').children('input').val(),
            text: button.parent().children('.Text').children('textarea').val(),
        };
        $.ajax({
            type: "POST",
            url: 'contact/',
            data: data,
            success: function (data) {
            },
            error: function (data) {
            }
        });

    }

    $('.send').click(function () {
        if (!$(this).parent()[0].checkValidity()) {
            $(this).parent().find(':submit').click();

        } else {
            send_form($(this))

        }

    });


});
