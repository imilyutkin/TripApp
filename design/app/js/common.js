$(function() {
	$('.toggle-menu').click(function(){
		$(this).toggleClass('on');
		$('.top-menu').slideToggle();
	});
});