<script src = "//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"
type = "text/javascript" > </script> <
    script >
    jQuery(function ($) {

        // The speed of the scroll in milliseconds
        var speed = 1000;

        // Find links that are #anchors and scroll to them
        $('a[href^=#]')
            .not('.lp-pom-form .lp-pom-button')
            .unbind('click.smoothScroll')
            .bind('click.smoothScroll', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, speed);
            });
    }); 
    </script>