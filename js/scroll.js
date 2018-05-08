$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var hash = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000);
        return false;
    });
});
// scroll up-------------------------------------
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
