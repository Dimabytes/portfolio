let navBtnId = 0;
let SlideNow = 1;
let SlideCount = 4;
let translateWidth = 0;
let slideInterval = 5000;
let nav_now = $('#nav-btns li:nth-child(1)');
function nextSlide() {
    if (SlideNow === SlideCount || SlideNow <= 0 || SlideNow >= SlideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        SlideNow = 1
    } else {

        translateWidth = -$('#viewport').width() * (SlideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        SlideNow++;
    }
    nav_now.css('background', '');
    nav_now = $('#nav-btns li:nth-child('+ SlideNow +')');
    nav_now.css('background', 'gray');

}
function prevSide(){
    if (SlideNow === SlideCount || SlideNow <= 0 || SlideNow >= SlideCount) {
        translateWidth = -$('#viewport').width() * (SlideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        SlideNow = SlideCount;
    } else {
        translateWidth = -$('#viewport').width() * (SlideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        SlideNow--;
    }

}
let s_int = setInterval(nextSlide, slideInterval);
$(document).ready(function () {
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 !== SlideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            SlideNow = navBtnId + 1;
        }
        nav_now.css('background', '');

    nav_now = $('#nav-btns li:nth-child('+ SlideNow +')');
    nav_now.css('background', 'gray');
    clearInterval(s_int);
    setTimeout(function () {
        s_int = setInterval(nextSlide, slideInterval);
    }, 5000);

});
    });