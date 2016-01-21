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