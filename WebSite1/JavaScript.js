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
            'scrollTop': $target.offset().top - 80
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


    // if the top of our browser is inside the section2
    //if (scroll + initialTopOffset >= $('#about').offset().top && scroll + initialTopOffset <= $('#about').offset().top + $('#about').outerHeight()) {
    //    console.log("in section 2");
    //    console.log(scroll);
    //    $('#about .container').delay(500).fadeIn('slow');
    //}
    //if (scroll + initialTopOffset >= $('#experience').offset().top && scroll + initialTopOffset <= $('#experience').offset().top + $('#experience').outerHeight()) {
    //    console.log("in section 3");
    //    console.log(scroll);
    //}
});

//trigger the scroll
$(window).scroll(); //ensure if you're in current position when page is refreshed
