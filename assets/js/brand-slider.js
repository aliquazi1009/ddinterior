$('.b-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    Infinity: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1670,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    }, 
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 520,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});

$('.t-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    Infinity: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2670,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, 
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});