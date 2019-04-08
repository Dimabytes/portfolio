$(function() {
    var menu = $('menu');
    var close = $('.close');
    var menu_link = $('#Hamburger');


    menu_link.click(function (e) {
        menu.toggleClass('active_menu')
        console.log(menu);

    });
    close.click(function (e) {
        menu.toggleClass('active_menu')

    });

});