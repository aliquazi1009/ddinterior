$(document).ready(function(){
    $('#mobileNavOpen').click(function openSideNav() {
        $('body').css({
            'overflow-y' : 'hidden'
        })
        $('.mob-nav').css({
            'left' : '0',
            'transition-delay' : '0s'
        })
        $('.mob-nav .wrapper').css({
            'transition-delay' : '.1s',
            'margin-left' : '0'
        })

    }),
    $('#mobileNavClose').click(function closeSideNav() {
        $('body').css({
            'overflow-y' : 'scroll'
        })
        $('.mob-nav').css({
            'left' : '-100%',
            'transition-delay' : '.5s'
        })
        $('.mob-nav .wrapper').css({
            'transition-delay' : '0s',
            'margin-left' : '-100%'
        })
    })

    // $(document.body).css('margin-bottom', $('#myfooter').outerHeight());
    // console.log($('#myfooter').outerHeight());
})


$(document).mouseup(function(e){
    //side navbar hide when click outside
    var y = $(".mob-nav .wrapper");    

    if(!y.is(e.target) && y.has(e.target).length === 0){
        $('body').css({
            'overflow-y' : 'scroll'
        })
        $('.mob-nav').css({
            'left' : '-100%',
            'transition-delay' : '.5s'
        })
        $('.mob-nav .wrapper').css({
            'transition-delay' : '0s',
            'margin-left' : '-100%'
        })
    }
});


$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="tooltip"]').hover(function(){
    $('.tooltip .tooltip-inner').css({
                                        'background-color': '#AD9271',
                                        'font-family' : 'Open Sans',
                                        'font-weight' : '550',
                                        // 'letter-spacing' : '1px',
                                        'font-size' : '13px',
                                        'color' :'#fff',
                                    });
    $('.tooltip .tooltip-arrow').css('border-top-color:', 'red !important;');
});