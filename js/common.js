$(document).ready(function(){
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        // add class header
        if( $height > 30 ) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
        // add class back to top
        if( $height > 100 ) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }

    });
    $('.theme-toggle').clickToggle(
        function() {
            $('html').attr('data-theme' , 'dark');
        },
        function() {
            $('html').attr('data-theme' , 'light');
        }
    );

    $('#slides .slider').slick({
        dots: true,
    });

    $('.count_num').countUp();

    $('#testimonials .testimonials_carousel').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              }
          ]
    });

});