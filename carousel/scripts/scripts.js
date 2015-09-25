$(document).ready(function(){

	var slides = $('ul#carousel li');
	var slideWidth = 800;
	var totalSlides = $('ul#carousel li').length;
	var totalSlidesWidth = (totalSlides * slideWidth);
	var currentPos = 1;
	var speed = 500;
	var i;
						
	//Document ready	
	$('ul#carousel').css('width', totalSlidesWidth + 'px');
	
	if(currentPos == 1){
		$('a.btn-prev').hide();
	};					
	
	for(i=0; i<totalSlides; i++){		
		$('#blobs ul').append('<li><a href="' + i + '"></a></li>');
	};	
				
	//Blobs rule
	var allBlobs = $('#blobs li a');
	
	if(currentPos == 1){
		$(allBlobs[0]).addClass('active');
	};
		
	//Carousel Animate via buttons	
	$('a.btn-nxt').bind('click', function(){
		currentPos++;
		
		if(currentPos > 1){
			$('a.btn-prev').show();
		};
		
		if(currentPos >= totalSlides){
			$('a.btn-nxt').hide();
		};
		
		$('ul#carousel').animate({'left': '-=800px'}, speed);					
		
		//Blobs rule	
		allBlobs.removeClass();
		$(allBlobs[currentPos - 1]).addClass('active');	
		
	});
	
	$('a.btn-prev').bind('click', function(){
		currentPos--;
		
		if(currentPos == 1){
			$('a.btn-prev').hide();
		};
		
		if(currentPos < totalSlides){
			$('a.btn-nxt').show();		
		};
		
		$('ul#carousel').animate({'left': '+=800'}, speed);
		
		//Blobs rule					
		allBlobs.removeClass();
		$(allBlobs[currentPos - 1]).addClass('active');	
		
	});
	
	
	//Blobs nav
	$('#blobs ul li a').bind('click', function(){
	
		var xslide = $(this).attr('href');		
		var slideOffset = $(slides[xslide]).position();
		var iTotal = totalSlides - 1;
		xslide = parseInt(xslide);
		currentPos = xslide + 1;
		
		$('ul#carousel').animate({'left': '-' + slideOffset.left + 'px'}, speed);		

		if( xslide == 0){
			$('a.btn-prev').hide();
		};
		
		if( xslide > 0){
			$('a.btn-prev').show();
		};
		
		if( xslide == iTotal){				
			$('a.btn-nxt').hide();
		}
		
		if( xslide < iTotal){				
			$('a.btn-nxt').show();
		};

		$('#blobs a').removeClass();
		$(this).addClass('active');

		return false;		
	});
		
});