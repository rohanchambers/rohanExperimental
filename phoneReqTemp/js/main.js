$( document ).ready(function() {

	// Show hide value of form inputs and textarea
	$('input:text, textarea').each(function(){
		var txtval = $(this).val();
		var txtAreaVal = $(this).attr('placeholder');
		
		$(this).focus(function(){
			$(this).val('');
			$(this).attr('placeholder', '');
			$(this).siblings('span').css({width: '100%'});
		});

		$(this).blur(function(){
			if( $(this).val() == '') {
				$(this).val(txtval);
				$(this).siblings('span').css({width: '0%'});
			}

			if( $(this).attr('placeholder') == '') {
				$(this).attr('placeholder', txtAreaVal);
				$(this).siblings('span').css({width: '0%'});
			}
		});
	});

	//Scroll to sections
	$('a[href^=#]').click(function(){
	    event.preventDefault();
	    var target = $(this).attr('href');
	    if (target == '#')
	      $('html, body').animate({scrollTop : 0}, 600);
	    else
	      $('html, body').animate({
	        scrollTop: $(target).offset().top - 75
	    }, 600);
	});

	// Icon mouse show hide intro text 
	$('.icon-animate').click( function(){
	    $('html, body').animate({
	        scrollTop: $('#services').offset().top - 0
	    }, 600);
	    $('#show-hide').slideDown(500);
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

$(document).on('scroll',function(){
    if($(document).scrollTop()>100){
        $('header').removeClass('nav-max').addClass('nav-min');
        $('#services').addClass('nav-max');
    } else{
        $('header, #services').removeClass('nav-min').addClass('nav-max');
        $('#services').removeClass('nav-max');
    }
});


// Load Google maps
function initMap() {
	var phoneResq = {lat: 30.670774, lng: -81.456867};

	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	center: phoneResq
	});

	var contentString = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<h1 id="firstHeading" class="firstHeading">Welcome to Phone Resq.</h1>'+
	  '<div id="bodyContent">'+
	  '<p>We repair and improve all of your handheld devices and home computers. ' +
	  'Our hassle-free customer service is centered around your interests and the intention of getting you back online.</p> '+
	  '<p>Website: <a href="https://phoneResq.com/" target="_blank">'+
	  'http://phoneResq.com/</a> <br>'+
	  'Email: <a href="@mailto:phoneresq@gmail.com">'+
	  'phoneresq@gmail.com</a><br>'+
	  'Phone: (904) 310-0059'+	  

	  '</div>'+
	  '</div>';

	var infowindow = new google.maps.InfoWindow({
	content: contentString
	});

	var marker = new google.maps.Marker({
	position: phoneResq,
	map: map,
	title: 'Phone ResQ'
	});

	marker.addListener('click', function() {
	infowindow.open(map, marker);
	});
}