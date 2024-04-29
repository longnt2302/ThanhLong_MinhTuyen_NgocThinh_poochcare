$(document).ready(function(){
    $("#header").load("./inc/header.html");
    $("#footer").load("./inc/footer.html");   
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
    $('#theme-toggle').clickToggle(
        function() {   
            console.log('dark');
            $('html').attr('data-theme' , 'dark');
        },
        function() {
            console.log('light');
            $('html').attr('data-theme' , 'light');
        }
    );
});