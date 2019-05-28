$(function() {
    $('.slide-adv').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 5000,
        // navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});