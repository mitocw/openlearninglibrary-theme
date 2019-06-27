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
