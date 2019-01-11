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

let about = false;
let experience = false;
let skills = false;
//data fade in on page
var initialTopOffset = $('#home').offset().top;
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 400 && about == false) {
        $('#about').height('auto');
        $('#about .container').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
        about = true;
    }

    if (scroll >= 1200 && experience == false) {
        $('#experience .container').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
        $('#experience').height('auto').fadeIn('fast');
        experience = true;
    }

    if (scroll >= 2583 && skills == false) {
        $('#skills .container').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
        $('#skills').height('auto');
        skillsBar();
        skills = true;
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