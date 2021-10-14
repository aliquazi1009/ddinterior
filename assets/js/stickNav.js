$(window).scroll(function(){
    var scrollTop = $(window).scrollTop(),
    elementOffset = $('.nav.sticky-top').offset().top,
    distance      = (elementOffset - scrollTop);

    if(distance > 0) {
        $('.sticky-top.nav').css('background', 'transparent');
    }
    else {
        $('.sticky-top.nav').css('background', '#181818');
    }
});