$(function() {
    $('.slide-adv').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ['<i class="fal fa-chevron-circle-left"></i>', '<i class="fal fa-chevron-circle-right"></i>'],
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