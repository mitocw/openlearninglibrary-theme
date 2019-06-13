$(document).ready(function() {
	$('.accordion-title').click(function() {
		$('.accordion-content').not($(this).parent().find('.accordion-content')).slideUp(400, "swing");
		$(this).parent().find('.accordion-content').slideToggle(400, "swing");
	});

	$('#btn_expand_faqs').click(function() {
		$('.accordion-content').slideDown(400, "swing");
	});

	$('#btn_minimise_faqs').click(function() {
		$('.accordion-content').slideUp(400, "swing");
	});
});
