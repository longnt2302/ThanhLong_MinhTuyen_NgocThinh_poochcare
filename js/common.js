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
      if($height > 30) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
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
    
});