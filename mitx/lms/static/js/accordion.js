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

    if(window.location.href.includes("why_support_mit_faq")){
        $("#why_support_mit_faq .accordion-title").addClass("active");
        $("#why_support_mit_faq .accordion-content").css("display", "block");
    }

});
