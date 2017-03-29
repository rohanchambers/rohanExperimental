var APP = {
};

// // DOM ready
$(function(){
	APP.infinteScroll();
});

APP.infinteScroll = function() {

	var token = '348944636.922990d.14b754c204514b78bb405dbdaf8801e5', // learn how to obtain it below
	    userid = 348944636, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
	    num_photos = 10; // how much photos do you want to get
	 
	$.ajax({
		url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: num_photos},
		success: function(data){
	 		console.log(data);
			for( x in data.data ){
				$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
				// data.data[x].images.thumbnail.url - URL of image 150х150
				// data.data[x].images.standard_resolution.url - URL of image 612х612
				// data.data[x].link - Instagram post URL 
			}
		},
		error: function(data){
			console.log(data); // send the error notifications to console
		}
	});

	console.log('jQuery!');
};