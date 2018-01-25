var APP = {
};

// // DOM ready
$(function(){
	APP.hamburger();

	$('#main').smoothState();
});

APP.hamburger = function() {
	$('.hamburger').click( function(){
		$(this).toggleClass('is-active');
		$('#myNav').toggleClass('isActive');
	});
};