$(document).ready(function() {
    $('.accordion-title').click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('.accordion-content').slideToggle(400, "swing");
    });

    $('#btn_expand_faqs').click(function() {
    	$('.accordion-title').addClass('active');
        $('.accordion-content').slideDown(400, "swing");
    });

    $('#btn_minimise_faqs').click(function() {
    	$('.accordion-title').removeClass('active');
        $('.accordion-content').slideUp(400, "swing");
    });

    $('#why_support_mit_footer').click(function() {
        $('html, body').animate({
            scrollTop: $("#support_mit_faq_title").offset().top
        }, 500).promise().then(function() {
            $("#support_mit_faq_title").trigger("click");
        });
    });

});
