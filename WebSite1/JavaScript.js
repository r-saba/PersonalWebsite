$(window).load(function () {
    $(".navbar").delay(2000).fadeIn("slow");
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
    
})

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});