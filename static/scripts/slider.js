var navBtnId = 0;
var SlideNow = 1;
var SlideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 5000;
function nextSlide() {

    if (SlideNow == SlideCount || SlideNow <= 0 || SlideNow >= SlideCount) {
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
}
function prevSide(){
    if (SlideNow == SlideCount || SlideNow <= 0 || SlideNow >= SlideCount) {
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
$(document).ready(function () {
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != SlideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            SlideNow = navBtnId + 1;
        }
    });
});