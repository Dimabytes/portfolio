
$(function() {

    function lol(){
        if($('.page2, .active').length == 1){
            $('#Me').addClass('animated rollIn');
            $('#WhoText').addClass('animated fadeInRight');
        } else {
            $('#Me').removeClass('animated rollIn');
            $('#WhoText').removeClass('animated fadeInRight');
        };
        if($('.page3, .active').length == 1){
            $('#1').addClass('animated fadeInLeft');
            $('#2').addClass('animated fadeInRight');
            $('#3').addClass('animated fadeInLeft');
            $('#4').addClass('animated fadeInRight');
            $('#5').addClass('animated fadeInLeft');
            $('#6').addClass('animated fadeInRight');
            $('#7').addClass('animated fadeInLeft');

        } else {
            $('#1').removeClass('animated fadeInLeft');
            $('#2').removeClass('animated fadeInRight');
            $('#3').removeClass('animated fadeInLeft');
            $('#4').removeClass('animated fadeInRight');
            $('#5').removeClass('animated fadeInLeft');
            $('#6').removeClass('animated fadeInRight');
            $('#7').removeClass('animated fadeInLeft');


        };
        if($('.page4, .active').length == 1){
            $('#block-for-slider').addClass('animated fadeInLeft');
        } else {
            $('#block-for-slider').removeClass('animated fadeInLeft');
        };
        if($('.page5, .active').length == 1){
            $('form').addClass('animated fadeInLeft');
        } else {
            $('form').removeClass('animated fadeInLeft');
        };


    };
    var Time = 1;
    setInterval(lol, Time);

});

$(function() {
    $('.link_port').hover(function() {
        $( this ).toggleClass("animated bounce")
    })
});
