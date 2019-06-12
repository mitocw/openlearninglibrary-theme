$(document).ready(function() {
	$('.accordion-title').click(function() {
		$('.accordion-content').not($(this).parent().find('.accordion-content')).slideUp(400, "swing");
		$(this).parent().find('.accordion-content').slideToggle(400, "swing");
	});
});
