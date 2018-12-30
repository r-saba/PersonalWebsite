//preload
$(window).load(function () {
    $(".navbar").delay(2000).fadeIn("slow");
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
    
})

//smooth scroll
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

//data fade in on page
var initialTopOffset = $('#home').offset().top;
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 400) {
        $('#about').height('auto');
        $('#about .container').delay(100).fadeIn('slow');
    }

    if (scroll >= 2563) {
        $('#skills').height('auto');
        $('#skills .container').delay(100).fadeIn('slow');
        skillsBar();
    }
});
//trigger the scroll
$(window).scroll(); //ensure if you're in current position when page is refreshed


//Skills Bar
function skillsBar () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
};