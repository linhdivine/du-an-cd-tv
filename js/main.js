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

$(function() {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 10000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });
});