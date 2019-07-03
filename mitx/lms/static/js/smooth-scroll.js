$(document).ready(function() {
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#terms-of-service').offset().top
        }, 800);
    });

    var autoHeight = $('.auto-height').length > 0;
    if(autoHeight) {
        $('html, body').css({
            'height': 'auto'
        });
    }

    $('.list-divided a').on('click', function(event) {
        var scrollElement = $(this).attr('href');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(scrollElement).offset().top
        }, 800);
    });
});

/*
** Navigate to anchor on page (#hash link)
*/
$(document).ready(function() {
    var target = $(location).attr("hash");
    var offset = ($(this).attr('data-offset') ? $(this).attr('data-offset') : 0);
    $('body,html').animate({
        scrollTop: $(target).offset().top - offset
    }, 1000);
});
