$( document ).ready(function() {

	// Prevent default
	$('a, #btn-submit').click( function(e) {
		e.preventDefault();
	});

	// Service shake repair products
	$('.repair a').hover( function(){
		$(this).parent().find('span').addClass('shake');
	}, function() {
		$(this).parent().find('span').removeClass();
	});

	// Shop shake products
	$('.product a, .product img').hover( function(){
		$(this).parent().find('img').addClass('shake');
	}, function() {
		$(this).parent().find('img').removeClass();
	});
});
