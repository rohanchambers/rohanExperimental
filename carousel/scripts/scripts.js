$(document).ready(function(){


	
			//$('#red, #blue').addClass('animate');





	var slide = $('#carousel li');
	var slideWidth = $('#carousel li').width();
	var totalSlides = slide.length;
	var totalSlidesWidth = slideWidth * totalSlides;


	$('#carousel').css('width', totalSlidesWidth);
	//alert(totalSlidesWidth);

	$('#btn-nxt').click( function(){
		$('#carousel').animate({ 'left' : '-=800px'});
	});
	
	$('#btn-prev').click( function(){
		$('#carousel').animate({ 'left' : '+=800px'});
	});

});